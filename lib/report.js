// Builds the "QA analysis - <month>" PDF sent to an agent when an admin
// approves their QA for a month. Inter is embedded so the report matches the
// doola brand.

import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const FONT_REGULAR = fileURLToPath(new URL("../assets/fonts/Inter-Regular.ttf", import.meta.url));
const FONT_BOLD = fileURLToPath(new URL("../assets/fonts/Inter-Bold.ttf", import.meta.url));

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const C = {
  yellow: hex("#F9C800"), blue: hex("#4F8FF6"), green: hex("#40E86F"), pink: hex("#FFA5BB"),
  sYellow: hex("#FEF4CC"), sBlue: hex("#EEF3FE"), sGreen: hex("#E3F9EA"), sPink: hex("#FFE7EC"),
  text: hex("#141414"), text2: hex("#5B5B5B"), text3: hex("#6B6B6B"), line: hex("#EAEAEA"), track: hex("#F2F2F2"),
};

export const DIMENSIONS = ["Accuracy & Completeness", "Clarity & Structure", "Empathy & Tone", "Policy & Process", "Effort Reduction"];
const SHORT = ["Accuracy", "Clarity", "Empathy", "Policy", "Effort"];

export const total = (s) => (s.reduce((a, b) => a + b, 0) / 5) * 20;
export const band = (t) => (t >= 90 ? "A" : t >= 70 ? "B" : t >= 60 ? "C" : "D");
export const bandName = (b) => ({ A: "A Exceptional", B: "B Adequate", C: "C Fair", D: "D Weak" })[b];
const bandFill = (b) => ({ A: C.green, B: C.blue, C: C.yellow, D: C.pink })[b];
const bandTint = (b) => ({ A: C.sGreen, B: C.sBlue, C: C.sYellow, D: C.sPink })[b];

const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (iso) => {
  const d = new Date(`${iso}T12:00:00Z`);
  return Number.isNaN(d.getTime()) ? iso : `${d.getUTCDate()} ${MON[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
};

// Keep text to characters Inter can draw.
const safe = (s) => String(s || "").replace(/[–—]/g, ", ").replace(/[^\u0009\u000A -ɏ‘-‟•…€™]/g, "");

function wrap(text, font, size, width) {
  const lines = [];
  for (const para of safe(text).split("\n")) {
    let line = "";
    for (const word of para.split(/\s+/).filter(Boolean)) {
      const next = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(next, size) <= width) line = next;
      else {
        if (line) lines.push(line);
        line = word;
      }
    }
    lines.push(line);
  }
  return lines;
}

export async function buildAgentReport({ cycle, agentName, team, approvedAt = new Date() }) {
  const tickets = cycle.tickets.filter((t) => t.agent === agentName).sort((a, b) => (a.date < b.date ? -1 : 1));
  if (!tickets.length) throw new Error(`No scored tickets for ${agentName} in ${cycle.label}.`);
  const title = `QA analysis - ${cycle.label}`;
  const pct = tickets.reduce((n, t) => n + total(t.s), 0) / tickets.length;
  const b = band(pct);
  const dims = DIMENSIONS.map((_, i) => tickets.reduce((n, t) => n + t.s[i], 0) / tickets.length);

  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  // Full (non-subset) embedding: pdf-lib's subsetter drops glyphs from Inter.
  const regular = await doc.embedFont(fs.readFileSync(FONT_REGULAR), { subset: false });
  const bold = await doc.embedFont(fs.readFileSync(FONT_BOLD), { subset: false });
  doc.setTitle(title);
  doc.setAuthor("doola QA");
  doc.setSubject(`${agentName}, ${team}`);
  doc.setCreator("doola QA dashboard");

  const W = 595.28, H = 841.89, M = 48, CW = W - M * 2;
  let page, y;

  const newPage = () => {
    page = doc.addPage([W, H]);
    const stripe = W / 4;
    [C.yellow, C.blue, C.green, C.pink].forEach((c, i) => page.drawRectangle({ x: i * stripe, y: H - 6, width: stripe, height: 6, color: c }));
    y = H - 44;
  };
  const ensure = (h) => { if (y - h < 64) newPage(); };
  const text = (s, { x = M, size = 10, font = regular, color = C.text } = {}) => page.drawText(safe(s), { x, y, size, font, color });
  const paragraph = (s, { x = M, width = CW, size = 10, font = regular, color = C.text2, gap = 4 } = {}) => {
    for (const line of wrap(s, font, size, width)) {
      ensure(size + gap);
      page.drawText(line, { x, y, size, font, color });
      y -= size + gap;
    }
  };
  const heading = (s) => {
    ensure(40);
    y -= 10;
    text(s, { size: 13, font: bold });
    y -= 20;
  };

  // ---- page 1: summary --------------------------------------------------
  newPage();
  text(title, { size: 22, font: bold });
  y -= 22;
  text(`${agentName} · ${team}`, { size: 12, color: C.text2 });
  y -= 16;
  text(`Approved ${approvedAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })} · Tickets closed ${fmtDate(cycle.window.from)} to ${fmtDate(cycle.window.to)}`, { size: 9.5, color: C.text3 });
  y -= 30;

  const tiles = [
    ["Combined QA score", `${pct.toFixed(1)}%`, C.sBlue],
    ["Band", bandName(b), bandTint(b)],
    ["Overall", `${(pct / 20).toFixed(2)} / 5`, C.sGreen],
    ["Tickets scored", String(tickets.length), C.sPink],
  ];
  const tileW = (CW - 3 * 10) / 4, tileH = 62;
  tiles.forEach(([label, value, fill], i) => {
    const x = M + i * (tileW + 10);
    page.drawRectangle({ x, y: y - tileH + 12, width: tileW, height: tileH, color: fill });
    page.drawText(safe(label), { x: x + 12, y: y - 6, size: 8.5, font: bold, color: C.text2 });
    page.drawText(safe(value), { x: x + 12, y: y - 34, size: value.length > 8 ? 13 : 20, font: bold, color: C.text });
  });
  y -= tileH + 18;
  text(`Target 95%. Bands: A Exceptional 90 to 100, B Adequate 70 to 89, C Fair 60 to 69, D Weak below 60.`, { size: 8.5, color: C.text3 });
  y -= 16;

  heading("Score by dimension");
  dims.forEach((v, i) => {
    ensure(22);
    text(DIMENSIONS[i], { size: 10, color: C.text });
    const barX = M + 170, barW = CW - 170 - 60;
    page.drawRectangle({ x: barX, y: y - 1, width: barW, height: 8, color: C.track });
    page.drawRectangle({ x: barX, y: y - 1, width: Math.max(4, barW * (v / 5)), height: 8, color: bandFill(band(v * 20)) });
    text(`${v.toFixed(2)} / 5`, { x: W - M - 48, size: 10, font: bold });
    y -= 22;
  });

  const lowestFirst = [...tickets].sort((a, c) => total(a.s) - total(c.s));
  const strengths = [...new Set([...tickets].sort((a, c) => total(c.s) - total(a.s)).flatMap((t) => t.keep))].slice(0, 4);
  const focus = [...new Set(lowestFirst.flatMap((t) => t.fix))].slice(0, 6);

  heading("What to keep doing");
  for (const s of strengths) { ensure(16); text("•", { size: 10, color: C.text2 }); paragraph(s, { x: M + 12, width: CW - 12 }); y -= 3; }
  heading("What to work on next");
  for (const s of focus) { ensure(16); text("•", { size: 10, color: C.text2 }); paragraph(s, { x: M + 12, width: CW - 12 }); y -= 3; }

  // ---- ticket by ticket (starts on its own page) -------------------------
  newPage();
  heading("Ticket by ticket");
  for (const t of tickets) {
    const tt = total(t.s), tb = band(tt);
    // Keep each ticket's block together on one page.
    const noteLines = [...t.keep, ...t.fix].reduce((n, s) => n + wrap(s, regular, 9.5, CW - 46).length, 0);
    ensure(18 + wrap(t.subject, bold, 10.5, CW - 80).length * 14 + 28 + noteLines * 13.5 + 8);
    page.drawRectangle({ x: M, y: y - 6, width: CW, height: 0.75, color: C.line });
    y -= 18;
    const badge = `${tt.toFixed(0)}% ${tb}`;
    const badgeW = bold.widthOfTextAtSize(badge, 9) + 14;
    page.drawRectangle({ x: W - M - badgeW, y: y - 4, width: badgeW, height: 16, color: bandFill(tb) });
    page.drawText(badge, { x: W - M - badgeW + 7, y, size: 9, font: bold, color: C.text });
    for (const line of wrap(t.subject, bold, 10.5, CW - badgeW - 14)) { page.drawText(line, { x: M, y, size: 10.5, font: bold, color: C.text }); y -= 14; }
    text(`${fmtDate(t.date)} · Ticket ${t.id} · Focus: ${t.category}`, { size: 8.5, color: C.text3 });
    y -= 13;
    text(SHORT.map((n, i) => `${n} ${t.s[i]}`).join("   ·   "), { size: 9, color: C.text2 });
    y -= 15;
    for (const k of t.keep) { ensure(14); text("Keep", { size: 8.5, font: bold, color: C.text }); paragraph(k, { x: M + 46, width: CW - 46, size: 9.5 }); }
    for (const f of t.fix) { ensure(14); text("Change", { size: 8.5, font: bold, color: C.text }); paragraph(f, { x: M + 46, width: CW - 46, size: 9.5 }); }
    y -= 4;
  }

  // ---- footers ------------------------------------------------------------
  const pages = doc.getPages();
  pages.forEach((p, i) => {
    p.drawText(safe(`doola QA · ${title} · ${agentName}`), { x: M, y: 30, size: 8, font: regular, color: C.text3 });
    const label = `Page ${i + 1} of ${pages.length}`;
    p.drawText(label, { x: W - M - regular.widthOfTextAtSize(label, 8), y: 30, size: 8, font: regular, color: C.text3 });
  });

  const bytes = await doc.save();
  return {
    title,
    filename: `${title} - ${agentName}.pdf`.replace(/[\\/:*?"<>|]/g, ""),
    bytes,
    summary: { percent: pct, band: b, tickets: tickets.length },
  };
}
