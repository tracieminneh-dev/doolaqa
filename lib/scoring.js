// How a ticket's five dimension scores (1 to 5) become its Combined %.
// Weights are set by team leads in Settings; equal weights are the default.

export const DIMENSION_KEYS = ["accuracy", "clarity", "empathy", "policy", "effort"];
export const DEFAULT_WEIGHTS = { accuracy: 20, clarity: 20, empathy: 20, policy: 20, effort: 20 };

// Combined % = sum(score x weight) / sum(weight) x 20
export function weightedTotal(s, weights = DEFAULT_WEIGHTS) {
  const w = DIMENSION_KEYS.map((k) => Number(weights[k]) || 0);
  const sum = w.reduce((a, b) => a + b, 0) || 1;
  return (s.reduce((n, v, i) => n + v * w[i], 0) / sum) * 20;
}
