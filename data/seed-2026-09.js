// September 2026 QA cycle (Cycle 2): tickets closed 23 Sep to 3 Oct 2026, scored before
// the admin page existed. Used to seed storage the first time the app runs.
export default {
 "month": "2026-09",
 "label": "September 2026",
 "window": {
  "from": "2026-09-23",
  "to": "2026-10-03"
 },
 "publishedAt": "2026-10-08T12:00:00.000Z",
 "source": "manual",
 "tickets": [
  {
   "id": "48698840144",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Change of LLC sole member, document update",
   "s": [
    5,
    5,
    4,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Confirmed receipt of all three documents by name, uploaded them, and closed the loop the same day the phone number arrived.",
    "Clean, short, zero ambiguity. The customer knew exactly what was needed and exactly when it was done."
   ],
   "fix": [
    "The phone number request created an extra round trip. List every field needed for a member update in the first reply so it closes in one exchange."
   ]
  },
  {
   "id": "48583279274",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Renewal discount and monthly plan pricing",
   "s": [
    5,
    5,
    4,
    5,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Every figure accurate and consistent across four messages: $2,999 annual, $2,699.10 discounted, $329 monthly, $296.10 first month.",
    "Explained that the signup discount is normally one time only, then applied a courtesy exception and framed it as such rather than silently overriding policy."
   ],
   "fix": [
    "Did not warn that the automated renewal reminder would still show $2,999. The customer re-contacted seven days later purely about this.",
    "Final reassurance reply took roughly 60 hours on an active billing concern."
   ]
  },
  {
   "id": "48697627189",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Withholding tax on bond investments, non-resident owner",
   "s": [
    4,
    5,
    3,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Correctly declined to give US tax advice on a non-resident withholding question and handed it to the Tax Team instead, which is the right scope call.",
    "Gave a complete numbered booking path plus a note on what to bring to the call, so the handoff needs no follow-up."
   ],
   "fix": [
    "Opened straight into process with no acknowledgement of the question itself. A single line confirming it is a sensible thing to ask would cost nothing.",
    "A short general framing of how withholding usually works would have left the customer better informed while still deferring the specifics."
   ]
  },
  {
   "id": "48609924733",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "IRS records, sole member to multi-member and name change",
   "s": [
    5,
    5,
    4,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Actually opened both IRS documents and reconciled them by date, explaining why the February 147C still shows SOLE MBR while the July notice shows the reclassification. That is real analysis, not a holding reply.",
    "Separated what the IRS has already processed from what is still outstanding, so the customer knew precisely where things stood."
   ],
   "fix": [
    "First response took roughly 53 hours against the 90 minute first response standard.",
    "We will keep you updated is open ended. Give the EIN amendment an expected window and a check-back date."
   ]
  },
  {
   "id": "48619261759",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Final Form 1120 after dissolution",
   "s": [
    3,
    4,
    3,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Stated the $600 short-year return fee up front rather than making the customer ask.",
    "Proactively flagged that state-level sales tax and payroll accounts may need closing separately. That is a genuine re-contact prevented."
   ],
   "fix": [
    "The dashboard path given was Company Settings then Danger Zone then begin the dissolution process, but this company is already dissolved. Pointing an already-dissolved customer at the dissolution flow is confusing and may be the wrong route entirely.",
    "Addressed as Hi there throughout when the signature carried a name."
   ]
  },
  {
   "id": "48538566714",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Mercury application declined twice, CFO escalation",
   "s": [
    5,
    5,
    1,
    4,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Diagnosed the actual blocker precisely, a passport image pasted onto a white background, after liaising with Mercury directly. The account opened on the next attempt.",
    "Chased Mercury proactively and came back with a specific, actionable instruction rather than a status update."
   ],
   "fix": [
    "Critical: the customer is Abhishek and was addressed as Hareesh and Haresh repeatedly across the thread, on a CFO escalation with the CEO and a board member copied in. This is the single most damaging defect in the cycle.",
    "The customer wrote that the end to end timeline was a key reason they chose doola and that it had slipped. That complaint was never acknowledged."
   ]
  },
  {
   "id": "48672899156",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Mercury requires passport, alternative providers",
   "s": [
    3,
    5,
    3,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "First reply was strong: four named alternatives with links, plus an offer to supply the formation and EIN documents for whichever they chose.",
    "Correctly avoided promising approval, noting each provider runs its own compliance review."
   ],
   "fix": [
    "The customer then asked a specific question, which provider supports Merchant IDs for payment processor approval, and got it is up to you based on your business needs. That is a deflection, not an answer.",
    "Ticket was closed on a non-response, then reopened by the customer."
   ]
  },
  {
   "id": "48067205770",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Payment dispute, services on hold",
   "s": [
    4,
    4,
    2,
    5,
    2
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Followed the dispute protocol correctly end to end, including the Card Authorization Form and name-match requirement for resubscription.",
    "Communicated the final outcome plainly rather than burying it."
   ],
   "fix": [
    "The customer is called Virender in the opening message and Manish from the middle of the thread onward. One of these is wrong and nobody caught it.",
    "Three separate chases got near-identical still pending replies with no timeline and no proactive check, while the customer was locked out of a paid service.",
    "Tone stayed transactional throughout with no acknowledgement of that impact."
   ]
  },
  {
   "id": "48143806281",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "New customer, EIN progress and 147C letter",
   "s": [
    5,
    4,
    2,
    2,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "The 147C answer was excellent and specific: the customer already had it, on page two of the IRS document, marked LTR 147C in the upper right. That is the kind of precision that ends a thread.",
    "Two proactive check-ins rather than waiting for the customer to chase."
   ],
   "fix": [
    "Critical: first response took 5.4 days against a 90 minute standard, to a brand new customer asking a nervous first question.",
    "That late first reply was a bare clarifying question with no warmth and no apology for the delay.",
    "A new customer asking what else should I know deserves the compliance calendar, not three lines."
   ]
  },
  {
   "id": "46252967533",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Refund request, repeated bookkeeper reassignment",
   "s": [
    2,
    4,
    3,
    2,
    1
   ],
   "category": "Policy & Process",
   "keep": [
    "The July denial letter was well constructed, explaining the 2025 catch-up work done at no charge and naming Fabio as the permanent bookkeeper.",
    "Acknowledged the frustration genuinely rather than hiding behind the Terms of Service."
   ],
   "fix": [
    "Critical: the ticket was closed on 25 September with the refund request unresolved, the proof-of-delivery request unanswered, and a second question about Registered Agent double-billing never addressed at all.",
    "Ran three months with at least six customer chases against a documented list of nine missed commitments from the bookkeeping side. Internal delivery failure, but the customer was left holding it.",
    "Repeated I will get back to you with no date attached. Every holding reply needs a committed return date."
   ]
  },
  {
   "id": "48648556676",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-10-03",
   "ranked": true,
   "subject": "doola Bookkeeping transactions not syncing with Mercury",
   "s": [
    3,
    4,
    4,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Best empathy in her sample. Named the frustration of a recurring fault directly rather than treating it as a fresh incident.",
    "Consulted the Bookkeeping Team and came back with a concrete action rather than a status update."
   ],
   "fix": [
    "Four days between the holding reply and the actual answer, for a single-line recommendation.",
    "The re-sync recommended was not what fixed it. The transactions appeared on their own, so the diagnosis was never actually confirmed.",
    "Third recurrence met with I will pass your feedback to the product team, with no reference number and no commitment to come back. That is where a repeat fault gets lost."
   ]
  },
  {
   "id": "48719069463",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Form 1099-NEC and 1099-MISC showing overdue",
   "s": [
    2,
    4,
    4,
    2,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied in 18 minutes with a definitive answer rather than a holding message.",
    "Warm and genuinely reassuring to a customer worried about an overdue compliance flag."
   ],
   "fix": [
    "Critical: the customer asked about Form 1099-NEC and 1099-MISC. The reply confirms the 2025 IRS tax filing and the annual state filing, which are different filings entirely. Telling someone to disregard a 1099 alert without establishing whether they paid any contractor $600 or more is reassurance on the wrong basis.",
    "The macro opens with I sincerely apologise for delayed response on a reply sent 18 minutes after the customer wrote in."
   ]
  },
  {
   "id": "48720769617",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-10-03",
   "ranked": true,
   "subject": "IRS Form 720 listed on EIN confirmation letter",
   "s": [
    3,
    3,
    2,
    4,
    3
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Did the real work of having the team contact the IRS, and came back with a genuine finding: the customer had enrolled for Excise Tax when applying for the EIN.",
    "Gave both paths plainly, continue and file on time, or contact the IRS to close the account."
   ],
   "fix": [
    "The customer is Michael. He was addressed as Emma twice, which is the company name, Emma and Kate Commerce LLC, not a person.",
    "The first question, could you explain what this form is for, was never answered. Form 720 is the quarterly federal excise tax return and that sentence was all it needed.",
    "The key sentence is garbled: if you would like to continue with the Excise Tax account then you need the required return is filed on time."
   ]
  },
  {
   "id": "48742538521",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Unexpected Registered Agent renewal notification",
   "s": [
    3,
    4,
    3,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Opening reply resolved the actual worry in one pass: confirmed the Business-in-a-Box yearly plan, named the 23 June 2027 renewal date, and explained the dashboard alert.",
    "Fast, roughly 1.3 hours from the customer writing in."
   ],
   "fix": [
    "Critical: told the customer yes, I can be added to your Slack and shared her direct email, then reversed it a day later because company policy does not allow Slack support and the IT admin denied the request. Do not commit to a channel before checking.",
    "The reversal carried no apology for the first answer having been wrong.",
    "Three extra exchanges to arrive at a no that could have been given immediately."
   ]
  },
  {
   "id": "48632397448",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Cancel subscription, no renewal on 22 September",
   "s": [
    1,
    4,
    4,
    2,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Pre-empted the automated renewal reminder emails so the customer would not panic when they arrived.",
    "Removed the card proactively and disclosed the ongoing good standing obligations."
   ],
   "fix": [
    "Critical: shipped with an unfilled merge token, cancel at the end of your current billing period on [date]. The customer asked for the date in writing and it is missing.",
    "The customer named 22 September 2026 explicitly. Confirm that specific date back.",
    "Block any reply still containing square brackets before send."
   ]
  },
  {
   "id": "48659916145",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-09-26",
   "ranked": true,
   "subject": "Meta verification, document linking LLC to phone number",
   "s": [
    2,
    4,
    2,
    4,
    1
   ],
   "category": "Effort Reduction",
   "keep": [
    "Numbered the reply to mirror the customer's two questions.",
    "Apologised for the delayed response up front."
   ],
   "fix": [
    "Question 2 was not answered. The customer asked about adding their own number to a future filing via the annual report or an amendment; the reply discussed member information on Wyoming formation documents, which is a different question.",
    "A detailed message listing five already-ruled-out documents got a two line dead end with no alternatives offered."
   ]
  },
  {
   "id": "48696826993",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Reseller permit, included in plan or not",
   "s": [
    2,
    3,
    2,
    4,
    1
   ],
   "category": "Effort Reduction",
   "keep": [
    "The Kintsugi partner referral is the right commercial route for sales tax registration and resale certificates.",
    "The partner macro itself is well-organised and covers registration, filing, nexus monitoring and cancellation."
   ],
   "fix": [
    "The customer asked a yes or no question, is the reseller permit part of my package or do I get it myself, and it was never answered directly. The macro implies no but never says it.",
    "Asked what is the cost and got you can reach out to Kintsugi support and they will help you with the cost. Nine words, no greeting, no sign-off, no price range.",
    "Sending a customer to a third party to discover a price we could state is the clearest effort-reduction failure in the cycle."
   ]
  },
  {
   "id": "48681786420",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Mercury onboarding link not working",
   "s": [
    2,
    3,
    2,
    4,
    1
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "The pending EIN answer was genuinely valuable and specific: Mercury will process a doola client application using the pending EIN letter.",
    "Escalated to the technical team once the fault was clearly reproducible."
   ],
   "fix": [
    "Critical macro mismatch. The customer reported a specific bug, the link redirects to a login for an account that does not exist, Open Account does nothing, and the dashboard wrongly shows Signed up. The reply was a generic list of seven banking partners that addresses none of it.",
    "The incorrect Signed up dashboard status was raised and ignored across all three replies.",
    "The customer reported the same unresolved bug three times and the ticket was closed on 1 October with it still open.",
    "Greeting typo, H Samarth."
   ]
  },
  {
   "id": "48725224464",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Florida warehouse arrangement for a Wyoming company",
   "s": [
    2,
    4,
    2,
    2,
    1
   ],
   "category": "Policy & Process",
   "keep": [
    "Reached for the right concept, foreign qualification rather than forming a second entity, and itemised the costs clearly at $199 processing, $125 Florida state fee and $125 Wyoming certificate of good standing."
   ],
   "fix": [
    "Critical: quoted $449 of billable filings before establishing the facts. The customer came back with six specific points, third-party fulfilment, no lease, no employees, not operating the facility, which very likely means no foreign qualification is required at all.",
    "The customer did the diagnostic work that should have been done by asking two questions first.",
    "Closed on 30 September with I will check with filing team and update you, and no answer was ever delivered. The customer is left holding a quote they have good reason to think is wrong.",
    "Typo, Thank you your message."
   ]
  },
  {
   "id": "48740377647",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Cancel plan and refund request",
   "s": [
    2,
    4,
    2,
    2,
    1
   ],
   "category": "Effort Reduction",
   "keep": [
    "Asking the reason for cancelling is standard retention practice and was phrased politely."
   ],
   "fix": [
    "Critical: the customer asked for two things, cancel my plan and provide a refund. Neither was actioned and neither was answered. No refund eligibility was stated and no cancellation was processed.",
    "Ticket closed on 1 October with the customer never having replied and nothing done. A cancellation request sitting unactioned is a billing risk, not just a QA miss.",
    "A terse four-word cancellation request met with hope you are doing well and it is my pleasure to e-meet you, then a feedback request. The retention probe came before the service."
   ]
  },
  {
   "id": "48714467236",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-09-26",
   "ranked": true,
   "subject": "Dissolution and final tax return confirmation",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Verified with the Tax Team before answering and confirmed all three concerns: dissolution status, 2025 filed as final, no 2026 return required.",
    "Named the underlying worry and defused it, then asked for a review at exactly the right moment."
   ],
   "fix": [
    "Customer switched to Spanish and was answered in English with no acknowledgement."
   ]
  },
  {
   "id": "48697183297",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "15 October tax deadline and dashboard compliance flags",
   "s": [
    5,
    5,
    3,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Answered all four questions point by point: the reminder was generic, the 2025 ITR is filed and on the dashboard, the Tax and Compliance workflow still needs basic information, and the 1 December Annual Report date is confirmed.",
    "Proactively explained that the Compliance Overview is a general checklist and not every listed filing applies to this entity. That single sentence prevents a whole class of future tickets. Best ticket in the Account Management cycle."
   ],
   "fix": [
    "Tone is correct but flat. Thank you for getting back to me opens the follow-up as if it were routine, for a customer who had clearly been worrying about deadlines."
   ]
  },
  {
   "id": "48616656787",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Mercury rejecting India co-working address",
   "s": [
    5,
    4,
    3,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Answered all three sub-questions and correctly flagged that the Registered Agent address is virtual and will not satisfy a physical address requirement.",
    "Gave a workable path and a fallback in one message. The bank account was issued."
   ],
   "fix": [
    "Customer said it was urgent and that Mercury had rejected them multiple times. Neither was acknowledged.",
    "Closing message was two lines for a resolved banking blocker."
   ]
  },
  {
   "id": "48709603991",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Ownership change request, opening outreach",
   "s": [
    4,
    5,
    5,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Warmest opening in the whole cycle. Proactive outreach on a request raised elsewhere, with a clear invitation to supply detail.",
    "Correctly asked what the change involves before advising, since ownership changes branch heavily."
   ],
   "fix": [
    "A bare tell me more leaves the customer guessing. Outlining what an ownership change usually needs, amended operating agreement, updated Exhibit A, member details and any EIN implications, would let them prepare everything in one go.",
    "No reply ever came. A single follow-up nudge would likely have recovered it."
   ]
  },
  {
   "id": "48587024308",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Cancel subscription, wants bookkeeping and tax prep only",
   "s": [
    4,
    4,
    3,
    5,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Disclosed before acting that cancelling ends the Registered Agent address and can lead to administrative dissolution. That is exactly the right warning and it protects the customer from a serious outcome.",
    "Offered the Starter Plan downgrade with a complete itemised breakdown of what is included, what is excluded, and add-on pricing for doola books, state filing, CPA time and IRS filings."
   ],
   "fix": [
    "The customer said plainly that they want bookkeeping and tax preparation without the monthly subscription. The reply offers the one plan that excludes both, then lists them as paid add-ons. Build the answer around what they asked for.",
    "I have asked more than once is a complaint about not being heard, and it went unacknowledged.",
    "Four days between the downgrade question and the pricing reply, and the ticket closed with no decision taken."
   ]
  },
  {
   "id": "48806968081",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "EIN reference number for IRS follow-up",
   "s": [
    5,
    4,
    2,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Every fact correct and specific: submitted 28 September, 8 to 10 week standard timeline, no reference number exists because the SS-4 is faxed, call using the entity name, IRS hours Monday to Friday 7am to 7pm.",
    "Replies came back within hours each time, which matters for someone blocked on a bank application."
   ],
   "fix": [
    "Four separate exchanges to deliver facts that fit in one reply. Each answer addressed only the literal question with no anticipation of the obvious next one.",
    "Customer is blocked on Mercury and phoning the IRS repeatedly. Every reply opens Thank you for getting back to me with no acknowledgement of that.",
    "This thread is still open. The customer listed their full SS-4 details asking what the IRS will ask, and has had no answer."
   ]
  },
  {
   "id": "48729741476",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "California Statement of Information and Franchise Tax",
   "s": [
    4,
    4,
    2,
    3,
    3
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Confirmed the Statement of Information was filed and gave the Franchise Tax rule precisely, the $800 annual tax due the 15th day of the fourth month after filing, with a worked example and the FTB link.",
    "Correctly scoped out that doola does not handle Franchise Tax filings, and offered a call to talk it through."
   ],
   "fix": [
    "The customer wrote this is business matter stuff with double exclamation marks and said twice that the date had passed. Neither the stress nor the missed deadline was acknowledged anywhere.",
    "They are past the due date and were never told what to do about it. That is the one thing they needed.",
    "Apologies for the slight delay understates a roughly four day gap, on a thread the customer had flagged as urgent."
   ]
  },
  {
   "id": "48671649345",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Secondary contact for Irish non-Union OSS registration",
   "s": [
    4,
    4,
    2,
    5,
    1
   ],
   "category": "Effort Reduction",
   "keep": [
    "Correct refusal. doola should not be listed as a named contact with a foreign tax authority, and declining protected both sides.",
    "Usefully clarified in the same breath that the Registered Agent scope is the virtual address only, which heads off the same request arriving again."
   ],
   "fix": [
    "The customer named a hard deadline, submit before 30 September, reply needed by 28 September. It was not acknowledged.",
    "Complete dead end. No alternatives offered at all: their own accountant, a company secretary service, a second person in their business, or simply asking Irish Revenue whether the field can be waived for a single-member entity.",
    "We understand your requirement followed immediately by a refusal reads as boilerplate on a genuine blocker."
   ]
  },
  {
   "id": "49000242076",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Hiring and paying US creators through the LLC",
   "s": [
    2,
    5,
    2,
    4,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Correctly declined to give tax advice and surfaced the free 30 minute consultation entitlement the customer did not know they had.",
    "The booking macro is genuinely excellent: numbered, complete, and covers both booking and joining."
   ],
   "fix": [
    "Ten carefully numbered questions, zero answered. Several are plainly inside support scope, can I pay by ACH from Mercury, is a signed agreement plus monthly invoice enough, what records should I keep, do I need a new invoice monthly.",
    "W-9 collection and 1099-NEC reporting above $600 are standard knowable facts, and doola sells 1099 e-filing as a dashboard item. At least flag the shape of the answer before routing the detail.",
    "The customer did substantial work to ask precisely and got a booking link. Acknowledge that effort and answer what can be answered now."
   ]
  },
  {
   "id": "48625721371",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Documents for opening a Chase or Wells Fargo account",
   "s": [
    2,
    4,
    2,
    4,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Right call not to advise on traditional bank requirements doola has no reliable visibility into.",
    "The partner provider list in the second reply is well-organised with correct caveats on independent approval."
   ],
   "fix": [
    "Two of three questions silently dropped. Which document is the certificate of formation is answerable in one line, it is on the dashboard under Documents. Whether the Articles of Organization mailing address works as proof of address was never addressed either.",
    "Opens with Unfortunately and runs three negatives in a row, do not have information, do not have contacts, do not have a guide, before offering anything.",
    "The useful alternatives only appeared after the customer prompted a second time."
   ]
  },
  {
   "id": "48673483819",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Non-US shareholder and corporate bylaws",
   "s": [
    2,
    4,
    2,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "The bylaws answer is clear and reusable, with the exact dashboard path and a list of what else lives in Documents."
   ],
   "fix": [
    "There seems to be lots overdue, can this be sorted asap was ignored completely and the ticket closed without it ever being addressed. Overdue compliance plus asap is the highest-priority line in the message.",
    "The customer stated clearly that the main shareholder field will not accept a non-US company. Asking where they would like to add the company name sends that back to them instead of addressing it.",
    "Hi there on an identified account, and no acknowledgement of the stated urgency."
   ]
  },
  {
   "id": "48719255643",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Taxpayer address vs designee address on formation",
   "s": [
    3,
    4,
    5,
    5,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Genuinely warm with an anxious pre-formation customer, and the emphatic restatement that the New York designee address must not be used was the right call.",
    "Asked a clarifying question before advising rather than giving generic guidance."
   ],
   "fix": [
    "Never circled back to that clarifying question. The business address issue was unresolved at close.",
    "No ETA on the formation. Soonest is not an answer.",
    "Customer asked four separate times across the thread."
   ]
  },
  {
   "id": "48700077206",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "EIN letter name correction, urgent query",
   "s": [
    4,
    5,
    3,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Acknowledge and escalate, then return with the substantive answer. The customer never had to chase.",
    "Correctly separated the valid EIN from the IRS decision on the letter."
   ],
   "fix": [
    "Flagged URGENT and first response took around 9 hours against the 90 minute standard.",
    "Timeline moved from 2 October to 27 October with no apology.",
    "No check-back date and no plan if 27 October also slips."
   ]
  },
  {
   "id": "48636374364",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Correct member legal names and addresses across filings",
   "s": [
    4,
    4,
    4,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "First reply landed in about 1.9 hours and broke the request into three numbered areas: Wyoming records, Operating Agreement, and IRS Responsible Party.",
    "Proactively flagged that the Responsible Party did not match and quoted the Form 8822-B option at $149 with a realistic IRS backlog note."
   ],
   "fix": [
    "Committed to update and generate the Operating Agreement but the thread never shows it delivered before close. Send the document or state when it will be ready.",
    "Said member info can be updated in the dashboard but gave no steps or link. Add where to click so Awad can do it himself."
   ]
  },
  {
   "id": "48644304942",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Confirm SS-4 dispatch date and channel for pending EIN",
   "s": [
    3,
    4,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Owned the earlier automated reply openly and acknowledged the exact distinction Maytham was making, within about 2.6 hours of his escalation.",
    "Pointed to the fax confirmation already in the dashboard as evidence the IRS received the SS-4."
   ],
   "fix": [
    "Maytham asked one precise question, the date and channel. The reply confirmed fax but never stated the date, even though the fax confirmation should show it.",
    "Did not correct the earlier suggestion about Letter 147C, which the customer rightly pointed out does not apply to a pending application.",
    "The 10 business days estimate for the mailed EIN letter was given without basis. Avoid timelines that may conflict with the 12 October dashboard estimate."
   ]
  },
  {
   "id": "48631327541",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Whether outstanding invoices must be paid to keep using account",
   "s": [
    3,
    4,
    3,
    2,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Gave a direct yes or no answer up front: the account stays usable without paying immediately.",
    "Short and easy to read."
   ],
   "fix": [
    "First response took about 16.5 hours against the 90 minute standard.",
    "Phrases like a certain period and some services leave Zekirja guessing. State which services are affected and after how long.",
    "No invoice amounts, link to the billing page, or how to pay. Give the balance and the exact path to settle it."
   ]
  },
  {
   "id": "48669627049",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Request for CPA letter with apostille for Argentine residency",
   "s": [
    4,
    4,
    3,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Replied in about 3 hours with a clear, honest decline covering each part of the request: income, distributions, ownership, and notarization.",
    "Explained which existing documents typically support ownership and distributions."
   ],
   "fix": [
    "Ended at no with no alternative. Suggest an independent US CPA or point Stefan to what doola can offer if he transfers his company.",
    "Tone reads transactional for someone working on a residency application. Acknowledge what is at stake before declining."
   ]
  },
  {
   "id": "48638148687",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Correct SS-4 physical address before EIN filing",
   "s": [
    2,
    4,
    3,
    2,
    2
   ],
   "category": "Policy & Process",
   "keep": [
    "Asked a smart clarifying question about whether the same address change should apply to the California formation documents."
   ],
   "fix": [
    "Never answered whether an EIN application had already been submitted, or whether the Statement of Information route would add a fee or delay. Both were asked directly.",
    "Second reply took about 9.5 hours and asked Nicholas to check if he had received the corrected SS-4, putting the tracking back on him. Confirm the status from our side.",
    "Closed with a generic all set message without confirming the SS-4 and California address were actually corrected."
   ]
  },
  {
   "id": "48704863852",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Business bank account options for foreign-owned Delaware LLC",
   "s": [
    3,
    4,
    3,
    3,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Set honest expectations that banks decide independently and approval cannot be guaranteed.",
    "Gave a practical tip to check the Operating Agreement is complete and consistent with other documents."
   ],
   "fix": [
    "Customer was rejected by Mercury, yet the reply mentions Mercury as our partner and offers no other banking options. Suggest alternatives suited to foreign-owned LLCs.",
    "Addressed as Foster Team. Use Foster, the name signed on the email.",
    "First response took about 9.2 hours against the 90 minute standard."
   ]
  },
  {
   "id": "48726462358",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Who is listed as registered agent for a Delaware corporation",
   "s": [
    3,
    4,
    4,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Very fast replies, about 11 minutes and 32 minutes.",
    "Second reply corrected the key point that the agent of record is a partner company, not doola itself."
   ],
   "fix": [
    "The first answer was vague enough that James had to ask again. Lead with who is actually listed on the Delaware record.",
    "Still did not name the registered agent company. Give the name so James knows exactly what will appear on file."
   ]
  },
  {
   "id": "48742578222",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Stop billing emails after LLC dissolution",
   "s": [
    2,
    4,
    3,
    2,
    2
   ],
   "category": "Policy & Process",
   "keep": [
    "Gave the immediate self-serve option to unsubscribe in both replies."
   ],
   "fix": [
    "Americo said he owes nothing because the LLC was dissolved. Check the account and confirm whether any balance or subscription is still active instead of asking which email he means.",
    "Said I will check with our team but gave no return date, and the ticket was closed about a day later with no follow-up.",
    "Customer writes in Spanish and the replies were in English. Consider matching his language."
   ]
  },
  {
   "id": "48701431728",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Add business partner access to doola account",
   "s": [
    4,
    5,
    3,
    3,
    3
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Final reply came within about 54 minutes and gave clear Forgot Password steps so the partner could get in right away.",
    "Completed the link and confirmed it, fully resolving the request."
   ],
   "fix": [
    "Asked again for the partner's email even though it was in the first message. Only request the details still missing.",
    "Customer switched to French in his reply. Acknowledge or match the language.",
    "First response took about 4.7 hours against the 90 minute standard."
   ]
  },
  {
   "id": "49028634519",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Annual report notice received after requesting dissolution",
   "s": [
    4,
    4,
    5,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied in about 15 minutes with a warm, transparent explanation that left Iva reassured and thankful.",
    "Clear next step: no action needed unless we contact her."
   ],
   "fix": [
    "Leaned on another client's similar case and the word generally. Confirm the rule for her specific dissolution timeline instead of using an anecdote.",
    "Did not explain why the reminder email was sent. Clarify that it is an automated notice so she knows to ignore it."
   ]
  },
  {
   "id": "48605148580",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "US bank and Payoneer options after LLC formation",
   "s": [
    3,
    4,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "First reply flagged straight away that Mercury does not accept applicants from Pakistan, then laid out Aspire, Airwallex and Payoneer with links, setup steps and a clear note on payments vs banking.",
    "Gave practical pre revenue ideas for Payoneer verification, such as a signed letter of intent or an unpaid invoice."
   ],
   "fix": [
    "Nizar said he was stuck because Amazon needs bank details. The reply never pointed out that an Aspire or Airwallex account could supply those details, so the core blocker went unanswered.",
    "He said twice that he was frustrated. The reply opened with one line and moved on. Acknowledge the impact before the advice.",
    "Ticket was closed within a minute of sending the advice, with no check that he had a way forward. First reply took about 6 hours and the follow up about 12 hours."
   ]
  },
  {
   "id": "48397516439",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "EIN application status and timeline concerns",
   "s": [
    3,
    4,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Checked the account and confirmed the EIN had been submitted in early August, then answered the follow up about next steps plainly: nothing can move until the EIN arrives.",
    "Closed the loop on 24 Sep with the EIN letter uploaded and a note that it is ready for banking."
   ],
   "fix": [
    "Quoted 6 to 8 weeks while the website says 4 to 6 weeks. The customer spotted the mismatch and lost trust. Check the published timeline before quoting one.",
    "The answer on the expedited 2 week saving was muddled and did not tell the customer where his application actually stood. Give a concrete status and date.",
    "Closed the ticket the day after the second reply while the EIN was still pending, so the customer had to chase twice more. Replies took roughly 2, 6, 8 and 11 hours."
   ]
  },
  {
   "id": "48633147494",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Recommended US banks and Mercury dashboard integration",
   "s": [
    4,
    5,
    4,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Replied in about 30 minutes and answered the integration question first: Mercury is the only bank linked to the dashboard. Clear numbered steps and document list followed.",
    "Follow up on the Mercury login screen came within about 75 minutes with sensible checks to try."
   ],
   "fix": [
    "Alexander said he always signs in with Google and has no password. Address that point directly, for example whether the Mercury button needs a separate Mercury login, rather than guessing at a duplicate application.",
    "Ended with 'let me know what you find', then the ticket closed three days later with no check in. Send a short follow up before closing."
   ]
  },
  {
   "id": "48705462687",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Locked out, password reset email not arriving",
   "s": [
    4,
    4,
    5,
    3,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Spotted the older email address on the account, raised it with Engineering and got Jean Damien back in within about a day. He called it amazing support.",
    "Warm, steady tone through a frustrating lockout, and explained the cause (a system migration) when asked."
   ],
   "fix": [
    "First human reply came about 13.5 hours after his last message, and suggested retyping the email in lowercase, which was a guess.",
    "Sent generic cache, VPN and browser steps and asked if he had used the email before, after he had already said he always used it and had checked spam. Read the thread before sending troubleshooting.",
    "Asked for his country and phone number. Check the account record first instead of asking for details we likely hold."
   ]
  },
  {
   "id": "46360826954",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Request for copies of 2025 Form 5472 and 1120 filing",
   "s": [
    4,
    4,
    2,
    2,
    2
   ],
   "category": "Policy & Process",
   "keep": [
    "Checked the account and gave a clear, factual answer: the subscription was cancelled, so no 2025 return was filed and there is no proof of filing."
   ],
   "fix": [
    "Replied about 63 hours after Omar's question against the 90 minute standard, then closed the ticket in the same minute.",
    "Delivered bad news in three lines with no next step. Tell him the return is now overdue, that late Form 5472 filings carry penalties, and how doola or a partner can help him file.",
    "The reply named the plan as Business in a Box while earlier messages in the thread called it the Starter plan. Keep plan names consistent."
   ]
  },
  {
   "id": "48822553376",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Pre purchase questions from founder based in Djibouti",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Clear and polite handoff that told Mina who would follow up and why the ticket was being closed."
   ],
   "fix": [
    "Mina asked seven detailed questions and none were answered. Several are standard Care answers, such as EIN timelines for foreign owners, Mercury availability and Form 5472 pricing. Answer what you can before handing off.",
    "Reply came about 3.8 hours after the email with a generic template and no personal touch on her e-commerce plans.",
    "Closed the ticket at handoff with nothing confirming when Sales would respond. Give an expected response time."
   ]
  },
  {
   "id": "48653081440",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Non virtual bank options, mail address, VOIP and SSN",
   "s": [
    3,
    4,
    4,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Mailing address and VOIP answer was clear and useful: explained what the Registered Agent address covers, then recommended Virtual Post Mail and Quo with the discount.",
    "Gave a straight, responsible answer on SSN eligibility and warned against having someone else open a bank account for her, while offering the ITIN as a real alternative."
   ],
   "fix": [
    "Cheryl asked for non virtual bank options on 23 Sep and that question sat unanswered for about six days.",
    "When it came up again, the reply listed Aspire, Airwallex, Payoneer and Relay, which are the fintech style options she had asked to avoid. Answer the question she actually asked or explain why traditional banks are hard for non residents.",
    "Replies took about 5 and 12 hours. Aim for the 90 minute standard."
   ]
  },
  {
   "id": "48977340424",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Trademark filing help and legal counsel referral",
   "s": [
    5,
    5,
    4,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Replied in about 85 minutes with two trademark partners, how to reach them and a broader legal option, all clearly laid out.",
    "Good structure: each partner had a short heading, what they do and how to get started."
   ],
   "fix": [
    "The Trademark Engine link pointed to an internal Airtable view. Use the clean partner link so the customer lands on the right page.",
    "Sarah had just confirmed her email change. A quick acknowledgement would have made the reply feel less templated."
   ]
  },
  {
   "id": "48741050681",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Steps and fees to dissolve the LLC",
   "s": [
    4,
    4,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied in about 80 minutes with the self serve dashboard path, the full flow, the 15 to 20 business day timeline and the state tax account caveat.",
    "Flagged the two possible tax filings for a 2025 active company dissolving in 2026, which heads off a common follow up."
   ],
   "fix": [
    "Younes asked what outstanding fees or filings apply to his company. Check his account and say which items actually apply rather than listing every possible charge.",
    "The reply is long. Lead with the two or three actions he needs to take, then put pricing and caveats below."
   ]
  },
  {
   "id": "48633520143",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Unrecognised $80.97 card charge attributed to doola",
   "s": [
    2,
    3,
    2,
    2,
    2
   ],
   "category": "Empathy & Tone",
   "keep": [
    "First reply landed in about 32 minutes and asked for proof of charge so the claim could be checked."
   ],
   "fix": [
    "Replied \"I was not asking for your literal card\" to an already upset customer. Explain what you need without correcting them.",
    "Once Edgar sent the date, amount and merchant phone number, the reply took about 6 hours and simply said it was not ours. Say what you checked (name, date, amount) and suggest he dispute it with his card issuer.",
    "Never explained what doola is or how he could contact us beyond email, which was his main frustration."
   ]
  },
  {
   "id": "48606522768",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Can the registered agent address be used for Amazon Seller Central",
   "s": [
    3,
    3,
    3,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied in about 89 minutes, inside the 90 minute standard, with a clear no and a Virtual Post Mail link as the fix.",
    "Explained why the address cost is not in the plan, which answered the fee question directly."
   ],
   "fix": [
    "Yasir listed 7 numbered questions. Question 6 (updating the mailing and principal address with the Wyoming SOS) was never answered. Answer numbered questions point by point.",
    "\"Amazon Seller Control\" appears twice. Use the correct product name, Seller Central.",
    "Pushed all proof and pricing questions to the partner. Give a rough price range or what document VPM provides so he can decide without another email."
   ]
  },
  {
   "id": "48683957886",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Hawaii formation status update and refund request",
   "s": [
    3,
    3,
    2,
    2,
    2
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Acknowledged in about 33 minutes and followed with a state record update within minutes."
   ],
   "fix": [
    "Melanie asked to cancel and get a refund. Only the refund was answered, the cancellation was ignored. Confirm what happens to the subscription.",
    "\"Actually not a loophole at all\" came across as defensive to a customer two months into waiting. Acknowledge the frustration and give a realistic Hawaii processing estimate.",
    "Replies to the refund and complaint messages took about 7 and 12 hours. No expected timeline or next check-in date was ever given."
   ]
  },
  {
   "id": "48691865890",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Disputed $1,999 renewal, refund and switch to monthly plan",
   "s": [
    2,
    3,
    2,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Explained clearly why the renewal moved from $1,341 to $1,999 once the one time discount ended.",
    "Accepted the customer's proposal and processed the switch with a $1,670 refund."
   ],
   "fix": [
    "The separate August $1,999 transaction was asked about in every message and never answered. Check payment records and confirm its status in writing.",
    "Asked for proof of charge and then the charge date even though the receipt number and September 8 date were in the first email. Use what the customer already sent.",
    "Addressed the customer as Murtaza while every email is signed Mehdi, and closed without a refund timeline or confirmation that no further annual charges will be taken."
   ]
  },
  {
   "id": "48668230715",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Bank applications rejected, needs alternative banks and address",
   "s": [
    3,
    3,
    3,
    2,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Gave a tailored list of three providers with links and specific address guidance for each, including Virtual Post Mail.",
    "Explained that country of residence can limit eligibility, which addressed the why behind the rejections."
   ],
   "fix": [
    "Ahmad wrote twice and waited about 14 hours for a first human reply against the 90 minute standard.",
    "Typo \"se local address\" in the Slash line. Proofread link lists before sending.",
    "Did not directly answer his follow up about his business address. Confirm what address he has with doola and what he can use."
   ]
  },
  {
   "id": "49013588106",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Non-renewal of Starter plan and registered agent transition",
   "s": [
    2,
    3,
    2,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Confirmed the renewal was disabled and gave a clear end of service date of October 11, 2026."
   ],
   "fix": [
    "Tommaso asked 6 numbered questions plus document export. Questions on agent resignation timing, mail after end date, and a short extension were not answered.",
    "Mail answer said dashboard documents are \"faxed documents\", which is confusing. Explain plainly what happens to mail at the Sheridan address after service ends and how to download everything.",
    "\"It would be your responsibility\" reads cold. Give if/then steps for appointing a new registered agent so coverage does not lapse."
   ]
  },
  {
   "id": "48681456746",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Dissolve Wyoming LLC and cancel all services",
   "s": [
    3,
    3,
    2,
    3,
    3
   ],
   "category": "Empathy & Tone",
   "keep": [
    "First reply in about 58 minutes with dashboard steps, the 15 to 20 business day timeline and full fee breakdown.",
    "Answered the declined card message within about 2 minutes."
   ],
   "fix": [
    "\"I am not sure if you read the email\" is condescending. Restate the key points without implying the customer missed them.",
    "Iva asked if the $600 tax filing is needed with zero activity. The reply was one vague sentence. Explain plainly what is required for a no activity LLC.",
    "Closed without confirming the registered agent and subscriptions are cancelled, or when she will get written confirmation, both of which she asked for."
   ]
  },
  {
   "id": "49003018879",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Charged for membership but cannot log in",
   "s": [
    3,
    3,
    2,
    3,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Responded in about 8 minutes and correctly asked for verification before sharing account details."
   ],
   "fix": [
    "Told the customer there are two people with her name in our system. Do not disclose other account information while verification is pending.",
    "Closed with \"not related to doola in any way, shape or form\". Soften the tone and suggest she check the merchant name on her Apple Pay statement or contact Apple.",
    "Follow ups took about 5.5 and 12.5 hours, which stretched a simple check over two days."
   ]
  },
  {
   "id": "49054745475",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Cost to add Annual State Filing for a past due report",
   "s": [
    2,
    3,
    2,
    2,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave dashboard steps to file the annual report through the Annual Reports tab."
   ],
   "fix": [
    "The only question asked was the cost, and no price or fee was given. State the service and state fee, plus any late fee for a past due report.",
    "Addressed the customer as Aleiva, a name guessed from the email address. Use a neutral greeting when the name is unclear.",
    "First response took about 2.5 hours against the 90 minute standard, and the macro was sent with an empty step 3."
   ]
  },
  {
   "id": "47955017227",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Correct name typos on EIN letter and member address",
   "s": [
    2,
    3,
    2,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Updated the member address on the dashboard once Oleksandr clarified it was his personal address, not the company address.",
    "Confirmed the IRS filing was submitted and set a 60 to 90 business day expectation at close."
   ],
   "fix": [
    "Correction letter went out with errors three times: the wrong attachment, then the company name misspelled as PGSUS, and it never covered the owner's misspelled first name.",
    "On 9/18 asked whether the letter was signed when the customer had already explained on 9/10 why he could not sign it. Read the latest reply before chasing.",
    "Holding reply on 9/7 promised an update with no return date, and the owner name correction was still unresolved at close despite the customer asking to be kept updated."
   ]
  },
  {
   "id": "48706134683",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Urgent request to dissolve company and book a call today",
   "s": [
    4,
    3,
    3,
    3,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Gave dashboard steps for dissolution, the 15 to 20 business day timeline, tax filing implications and full pricing in one reply.",
    "Included the Account Management booking link so the customer could get the call they asked for."
   ],
   "fix": [
    "Customer flagged URGENT and said nobody had answered a call request. First response took about 2.6 hours against the 90 minute standard.",
    "Opened with a cheerful macro line. Acknowledge the urgency and the missed call first, and say plainly that dissolution cannot be completed same day."
   ]
  },
  {
   "id": "48707549073",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Next steps for amendment service to update operating agreement",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Responded in about 76 minutes with a clear explanation of why doola does not edit operating agreements.",
    "Offered a practical path: edit with a PDF tool and send the revised copy for upload to the dashboard."
   ],
   "fix": [
    "Customer asked about the amendment service. Check whether a state amendment filing is also needed for the change and mention that service and its price, rather than only declining the OA edit.",
    "Ask what the customer is changing (ownership, members, address) so the guidance fits, before closing the ticket on the same reply."
   ]
  },
  {
   "id": "48720935710",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-09-26",
   "ranked": true,
   "subject": "Explain five overdue compliance tasks shown on dashboard",
   "s": [
    2,
    3,
    3,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Reassured Tommaso that no extra RA renewal payment was needed and that completed filings can be disregarded."
   ],
   "fix": [
    "Customer listed six numbered requests across five tasks. The reply grouped them into two generic points and never addressed Form 7004, the 1099 task, or whether to use Mark as complete.",
    "Did not confirm the registered agent is active, which was asked directly. First response took about 8.2 hours against the 90 minute standard.",
    "Closed less than 2 hours after replying while the dashboard was left showing the overdue warning. Either update the tasks or tell the customer to mark them complete."
   ]
  },
  {
   "id": "48737409447",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-09-26",
   "ranked": true,
   "subject": "Cancel subscription immediately",
   "s": [
    4,
    4,
    3,
    3,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Final reply confirmed the cancellation, no further charges, and listed the compliance duties the customer now owns.",
    "Clearly explained the risk of losing a registered agent and business address."
   ],
   "fix": [
    "Ruben asked twice to cancel immediately. The first reply was a retention style warning without actioning the request, which forced a third, firmer message.",
    "Confirmation came about 2.8 hours after the customer withdrew card authorization. Process clear cancellation requests in the first reply and add the compliance reminder alongside it."
   ]
  },
  {
   "id": "48968486488",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Correct member address before EIN filing",
   "s": [
    3,
    3,
    2,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Explained that the SS-4 uses doola's address for IRS correspondence and updated the member address on the account."
   ],
   "fix": [
    "Customer flagged URGENT before the SS-4 was faxed. The reply came about 8 hours after that message and about 13.5 hours after the first one, by which time the SS-4 had already gone in.",
    "Did not address the state filing with the wrong member address or whether the EIN letter will match his passport for Mercury or Wise, which was his core worry.",
    "Two line reply with a typo and no acknowledgement of the stress. Confirm what changed, what did not, and any next step if the bank asks for proof of address."
   ]
  },
  {
   "id": "49013288782",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Options to move LLC from Colorado to Texas",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied within about 20 minutes with clear fee breakdowns for domestication out of Colorado and into Texas.",
    "Flagged that foreign qualification still leaves a Colorado annual report obligation."
   ],
   "fix": [
    "Customer asked whether leaving Colorado starts with registering in Texas. Explain the difference between domestication and foreign qualification and which path fully exits Colorado.",
    "Quoted $1,059 for domesticating into Texas and $1,099 for foreign qualification without saying how the two compare. Give a short side by side so the customer can choose."
   ]
  },
  {
   "id": "48720199745",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Resend ITIN signature documents after missing email",
   "s": [
    3,
    3,
    3,
    2,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Gave detailed signing instructions for the W-7, Form 2848 and OA letter, plus clear passport scan requirements."
   ],
   "fix": [
    "Customer asked for a human after two AI replies. Dennis replied about 14.3 hours later, well past the 90 minute standard.",
    "Final reply only said the issue was passed to the specialist. It did not confirm the PDFs would be resent, give a return date, or say how to send back the signed documents, all of which were asked.",
    "Ticket closed the next day with the documents still not in the customer's hands. Keep it open until the resend is confirmed."
   ]
  },
  {
   "id": "49015940963",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Card declined, asking for PayPal or bank wire option",
   "s": [
    3,
    4,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Explained why Stripe blocked the card and gave two clear options: contact the bank or use another card.",
    "Reassured the customer that doola would wait while the bank approved the payment."
   ],
   "fix": [
    "First reply ignored the direct ask for PayPal or a wire. Only the second reply, about 9 hours later, said Stripe is the only option. Answer that up front.",
    "First response took about 4.5 hours against the 90 minute standard, and the ticket was closed while payment was still pending with no follow up committed."
   ]
  },
  {
   "id": "49056009339",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Apostille and notarization for formation documents",
   "s": [
    4,
    4,
    3,
    4,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Suggested the EIN letter as proof of ownership since Wyoming articles do not list members, which solved the customer's real problem.",
    "Fast follow ups of about 30 and 11 minutes, and a partner option for notarization with booking links and steps."
   ],
   "fix": [
    "The customer asked about the Operating Agreement specifically. Say explicitly that it is not eligible for the $499 state apostille instead of leaving it implied.",
    "Open with more than \"We do not offer this service\". A softer lead in and a note that the partner also offers apostille for the OA would land better."
   ]
  },
  {
   "id": "48091749281",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "EIN still not issued months after formation, needs status and CP575",
   "s": [
    3,
    4,
    3,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Stepped in 28 minutes after the customer pushed back on the AI reply and took ownership by coordinating with the filing team.",
    "Closed the loop on Sep 23 with clear directions to find the EIN letter under My documents in the dashboard."
   ],
   "fix": [
    "Customer said it had been over 4 months since an April formation, and the reply restated the 8 to 10 week standard without acknowledging the application was already well past it.",
    "Holding replies on Sep 2 and Sep 8 gave no return date, then the customer heard nothing for 15 days until the letter arrived on Sep 23. Commit to a check-in date and keep it.",
    "The Sep 8 follow-up waited about 3.6 hours for a reply against the 90 minute standard."
   ]
  },
  {
   "id": "48405648709",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Unexpected charge after formation, asking what it is and to cancel",
   "s": [
    4,
    4,
    4,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied in about 71 minutes and explained the charge as the $297 annual Starter Plan renewal, with a clear list of what cancelling would remove.",
    "Flagged that cancelling does not dissolve the company and laid out both paths, keep the LLC or dissolve it, before acting."
   ],
   "fix": [
    "Kim assumed formation was a one time charge. Say plainly that the charge was the automatic annual renewal and whether a refund is possible, since that was the real question behind the email.",
    "When closing 14 days later because a colleague handled it elsewhere, briefly confirm the outcome so the customer knows the cancellation request was actioned."
   ]
  },
  {
   "id": "48695232525",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Mercury declined bank application, wants partner review",
   "s": [
    4,
    4,
    4,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Set expectations honestly within 18 minutes that Mercury decides on its own and may not share reasons, then still offered to contact Mercury.",
    "Came back with a concrete answer that the customer is eligible to reapply, plus four relevant Mercury help links and a heads up about later account reviews."
   ],
   "fix": [
    "The holding reply took about 13 hours after the customer sent the requested info and gave no time frame. Give a committed return time such as within one business day.",
    "Asked for the application email when the customer was already writing from it. Check the address on file before asking."
   ]
  },
  {
   "id": "48743838104",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Lost access to login email, needs access to doola account",
   "s": [
    4,
    4,
    4,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Replied in 55 minutes with a clear numbered verification list and a self service alternative to update the email from Settings.",
    "Spotted that the uploaded document showed the registered agent address, not the responsible party address, and asked for the right one within 5 minutes."
   ],
   "fix": [
    "The customer answered the address question and waited about 17.5 hours for Doris to grant access. A colleague had to send a holding note at the 13 hour mark.",
    "Verification asked for the full address but accepted city only on the second try. Be specific up front about the format needed to avoid a back and forth."
   ]
  },
  {
   "id": "48722633832",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Customer says plan already renewed after renewal reminder",
   "s": [
    3,
    4,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave specific facts from the account, purchase on Oct 10, 2025 and renewal on Oct 9, 2026, with a link to update payment details."
   ],
   "fix": [
    "The customer said it was already renewed until July 21, 2027. The reply did not reconcile that date with the October renewal, for example whether it refers to another company or service, so confusion is likely.",
    "Opened with Hi there instead of the customer's name, and closed the ticket in the same message before the customer confirmed the mismatch was clear.",
    "First response took about 2.4 hours against the 90 minute standard."
   ]
  },
  {
   "id": "48608408969",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "One time price for final nil Form 5472 on dissolution",
   "s": [
    3,
    4,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "First reply in 32 minutes, and the final answer clearly explained why two filings were needed, $1,500 for 2025 and $600 for the 2026 short year, with a 14 to 21 business day timeline."
   ],
   "fix": [
    "The first two replies quoted only the $1,500 annual service as the cost, then the later answer added a second $600 return. Check the formation year before quoting so the customer gets the full cost once.",
    "Promised to get back promptly but gave no date, and Kay had to chase about 22 hours later.",
    "Kay asked twice for a one time option. Address that directly at the start rather than restating the subscription terms."
   ]
  },
  {
   "id": "48712450135",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Annual report paid but dashboard still shows overdue tasks",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Replied in about 71 minutes and confirmed the annual report request was received and in progress with no action needed."
   ],
   "fix": [
    "Nathalie asked why 2 overdue tasks still show. Explain what the tasks are and when they will clear, otherwise she will likely write in again.",
    "Tell her where she will see the state receipt once filed, such as Company tab, Annual Reports, so she can confirm herself."
   ]
  },
  {
   "id": "48678329918",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Error when signing Form 8821 from unlinked email",
   "s": [
    3,
    4,
    3,
    3,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Clear numbered verification list and named the exact issue, the Form 8821 signing error, so the customer knew why it was needed."
   ],
   "fix": [
    "First response took about 1.8 hours against the 90 minute standard.",
    "No acknowledgement of the error or any first troubleshooting step. Add a likely fix, such as signing from the account email or refreshing the link, so the customer can try while verification is pending.",
    "Ticket was closed without a reply from the customer. Send a short follow up before closing so the open error is not left unresolved."
   ]
  },
  {
   "id": "48721371503",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Keep one company subscription, cancel three being dissolved",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Checked all four companies and explained in 49 minutes that none were active, including why Auratech lapsed, before the customer paid for anything.",
    "Mirrored the customer's three confirmation points one by one in writing and sent the reactivation link in the same message, about 87 minutes after the request."
   ],
   "fix": [
    "Add a brief line of acknowledgement for the dissolutions in progress, which would round out an otherwise complete reply."
   ]
  },
  {
   "id": "48742672033",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Request to extend plan after no business activity this year",
   "s": [
    4,
    4,
    4,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Replied in 12 minutes, acknowledged the unforeseen circumstances, and gave a clear answer that renewals cannot be paused or extended."
   ],
   "fix": [
    "Few weeks of renewal attempts is vague. State the renewal date and amount so the customer can plan the payment.",
    "The customer said he will continue next year. Offer an option such as confirming the payment method in Settings or the cost of downgrading so he leaves with a next step, not only a no."
   ]
  },
  {
   "id": "48697591379",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Confirm Starter Plan cancellation before renewal",
   "s": [
    5,
    5,
    4,
    3,
    5
   ],
   "category": "Policy & Process",
   "keep": [
    "Confirmed exactly what Liam asked: the Starter Plan cancels at the end of the cycle on September 30 and no further charges will apply.",
    "Told him he could disregard the renewal email, which closes the loop and prevents a follow-up."
   ],
   "fix": [
    "First reply took around 4.4 hours against the 90 minute standard for a simple yes or no confirmation.",
    "Add one line acknowledging that the renewal email was confusing after he had already cancelled."
   ]
  },
  {
   "id": "48722354065",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Document proving owner relationship for Amazon verification",
   "s": [
    3,
    4,
    3,
    2,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Clearly explained that Wyoming does not record owners, so no state document can show both the LLC and Adhyayan's name.",
    "Pointed to the EIN letter as a usable alternative that does name the responsible party."
   ],
   "fix": [
    "Customer marked this URGENT and the first human reply came about 31 hours after the first message and 25 hours after the follow-up.",
    "Never answered the fee question or whether a Certificate of Good Standing was still worth ordering, then closed in the same message.",
    "Explain how to get the EIN letter if it is missing (dashboard Documents or a 147C) and what to do if Amazon rejects it."
   ]
  },
  {
   "id": "48697106716",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Wyoming entity ID, annual report date and other filings",
   "s": [
    3,
    2,
    4,
    2,
    4
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Answered all four questions, including confirmation from Operations that no Wyoming state account was created.",
    "Proactively flagged the Form 1120 and 5472 obligation with IRS links."
   ],
   "fix": [
    "The numbered list rendered with blank items 2, 4 and 6, which makes the four answers hard to match to the questions.",
    "Said the LLC was established in 2025 while the entity ID and the April 15, 2027 deadline point to a 2026 formation. Double check dates before sending.",
    "Reply came about 61 hours after Abid's message."
   ]
  },
  {
   "id": "48722375031",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Repeated annual report reminders after filing",
   "s": [
    5,
    5,
    5,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Switched to Spanish to match Maria Romina and kept the tone warm and natural.",
    "Checked the account and confirmed the annual report was already filed, apologising for the repeated automatic notices."
   ],
   "fix": [
    "Reply took around 7 hours against the 90 minute standard.",
    "Say what happens next with the reminders, for example whether they will stop or whether she needs to mark the filing as already done in the dashboard."
   ]
  },
  {
   "id": "48655265678",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Stop all doola services and future charges",
   "s": [
    2,
    3,
    2,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Clearly listed what is lost on cancellation, including the Registered Agent consequences, so the customer could make an informed choice."
   ],
   "fix": [
    "Adrian asked how to stop all further charges. The reply was a retention macro that never said whether anything was cancelled or how charges would stop.",
    "Asking for cancellation feedback without acknowledging his clear request reads as pushback. Confirm the action first, then offer options.",
    "No follow-up after the reply and the ticket closed about 6 days later with the request unresolved."
   ]
  },
  {
   "id": "48705798046",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Confirm cancellation and stop October auto-billing",
   "s": [
    3,
    4,
    3,
    2,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Fast first reply, around 2.5 hours, with a clear list of the four active foreign filing subscriptions and their renewal dates."
   ],
   "fix": [
    "Kristin had already said she wanted no October billing. Asking her to confirm again added a round trip while NJ was due to renew on October 1.",
    "Ticket closed with no reply and the cancellation not actioned, so she may have been charged the next day.",
    "Did not address her request to stop the automated notifications."
   ]
  },
  {
   "id": "48703741253",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Request for a US authorized signer with an SSN",
   "s": [
    3,
    4,
    3,
    3,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Gave a clear, honest answer that doola does not offer or source authorized signer services, without overpromising."
   ],
   "fix": [
    "Djanni explained he was blocked from banking as a non-resident in a high-risk industry. Offer something useful, such as banking partners that accept non-US owners.",
    "Response took around 4 hours against the 90 minute standard.",
    "Acknowledge the specific difficulty he described rather than a generic apology."
   ]
  },
  {
   "id": "49007258511",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "W-9 or W-8 for foreign-owned disregarded LLC",
   "s": [
    2,
    3,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Correctly steered the customer away from the W-9 for a foreign-owned disregarded entity and linked the IRS instructions."
   ],
   "fix": [
    "Recommended the W-8BEN, which is for individuals. The owner is an Israeli company, so the W-8BEN-E is the right form.",
    "Did not answer question 1 (confirming the current tax classification and whether an 8832 was filed) or question 3 (help preparing the form).",
    "Long generic macro on W-9 versus W-8 history. Lead with the direct answer to each numbered question."
   ]
  },
  {
   "id": "48977985322",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Past-due annual report notices after filing",
   "s": [
    5,
    5,
    4,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Confirmed the exact filing date of September 3 so Rafael knew he was compliant.",
    "Took ownership by apologising and raising it with the Product team to stop the notices."
   ],
   "fix": [
    "Reply took around 6 hours against the 90 minute standard.",
    "Said the notices would be resolved but closed the ticket in the same message with no follow-up commitment or timeframe."
   ]
  },
  {
   "id": "48952377194",
   "agent": "Giovanna H",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Bank account and physical card options for Benin resident",
   "s": [
    2,
    3,
    4,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Shared partner links for seven banking providers and explained the Registered Agent plus mail forwarding route for physical cards."
   ],
   "fix": [
    "Jacques asked four numbered questions. Only the card question got a partial answer, and Mercury as main account plus a secondary account, and Payoneer funding, were not addressed.",
    "Stated as a blanket rule that these banks only ship cards within the US, which conflicts with the provider documentation he cited. Verify before stating.",
    "His later question about LLC registration status and timeframe was not answered before the ticket was closed."
   ]
  },
  {
   "id": "48705979652",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Customer disputing an $80.97 card charge attributed to doola",
   "s": [
    3,
    4,
    3,
    3,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Acknowledged the frustration and named the exact $80.97 amount, so the customer knew the right charge was checked."
   ],
   "fix": [
    "Ask for the charge date, statement descriptor and last four digits before concluding there is no record. Pointing an angry customer to the card issuer with no further lookup leaves them to chase it.",
    "Reply took around 11.4 hours to an already frustrated customer against the 90 minute standard, and the ticket was closed the moment the reply went out with the dispute unresolved."
   ]
  },
  {
   "id": "48742207387",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Updated operating agreement upload and member percentage update",
   "s": [
    3,
    4,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Confirmed the upload with the exact file name and location (Company > My Documents), which made it easy for Andy to find."
   ],
   "fix": [
    "Andy asked twice how soon the dashboard would show the corrected member percentages. That question was never answered before the ticket was closed.",
    "Give a timeline or a committed follow up date for the percentage change rather than closing on the document upload alone."
   ]
  },
  {
   "id": "48657127592",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Florida LLC name amendment and business description update",
   "s": [
    5,
    5,
    4,
    3,
    5
   ],
   "category": "Policy & Process",
   "keep": [
    "Clear cost breakdown ($25 state fee plus $149 doola fee, $174 total), 2 to 3 week timeline, and a correct explanation that the business description is not on state or IRS records.",
    "Answered all five EIN and banking follow up questions point by point and sent the invoice in the same reply."
   ],
   "fix": [
    "Replies took around 7.9 and 9.7 hours against the 90 minute standard.",
    "Confirm with the customer before changing the dashboard description rather than stating it has already been shortened."
   ]
  },
  {
   "id": "48702580322",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Afghanistan resident asking about Texas LLC and seller's permit",
   "s": [
    2,
    4,
    4,
    2,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Restated each of Bilal's questions in the handoff so the Sales team had the full context."
   ],
   "fix": [
    "First response took around 27.8 hours against the 90 minute standard.",
    "Neither question was answered. Whether the Starter plan includes a Texas seller's permit is a plan inclusion question Customer Care can answer directly.",
    "Ticket was closed in the same reply with both questions still open, leaving the customer to wait on another team."
   ]
  },
  {
   "id": "48637672491",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Stop $297 renewal while registered agent transfer completes",
   "s": [
    1,
    3,
    1,
    1,
    1
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Explained why registered agent coverage, annual reports and IRS filings matter for good standing."
   ],
   "fix": [
    "The customer asked for written confirmation that the $297 renewal would not be charged. The reply was a generic cancellation retention macro asking why they were leaving, and the confirmation was never given.",
    "Addressed the customer as Julio while the message was signed Alexander. Check the name before sending.",
    "First response took around 30 hours and arrived after the September 20 renewal date. The ticket was then closed for no reply with the billing request unresolved."
   ]
  },
  {
   "id": "48642515036",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Plan downgrade, prepaid bookkeeping and tax contact follow up",
   "s": [
    4,
    4,
    4,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Clear downgrade plan: Starter at $297 per year taking effect at the November 18 renewal, with Tax and Compliance and prepaid bookkeeping usable until then.",
    "Followed up after Joshua's thread and acknowledged that Tiffany's 2025 returns were already filed."
   ],
   "fix": [
    "The holding reply came around 8 hours after the message and promised an update shortly with no committed date. The actual update took around 40 hours more.",
    "Tiffany asked to schedule an appointment about bookkeeping. Offer a booking link or a confirmed call rather than only the bookkeeping email address."
   ]
  },
  {
   "id": "48656839686",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Turn off Starter auto renewal and confirm coverage end date",
   "s": [
    2,
    4,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "The final reply was exactly what Nadpiya asked for: auto renewal off, coverage through February 2, 2027, and confirmation this was non renewal only."
   ],
   "fix": [
    "The first confirmation went out with an unfilled [date] placeholder, on the one detail the customer had asked for twice.",
    "The corrected reply came around 4 days later. Proofread macros before sending and correct mistakes the same day.",
    "Using 'sorry to see you go' wording on a non renewal request felt off script for a customer who explicitly said they were not leaving yet."
   ]
  },
  {
   "id": "48841563795",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Urgent business address proof for Wise verification",
   "s": [
    3,
    3,
    4,
    2,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Set expectations accurately: doola's virtual address will not pass Wise's trading address check, with the physical address option and the VPM partner link offered.",
    "The TruLease follow up flagged the 1 to 2 week utility bill timeline against the Wise deadline and advised confirming with Wise before paying."
   ],
   "fix": [
    "Marked urgent by the customer, yet the first reply took around 7.7 hours and the follow up around 12.3 hours against the 90 minute standard.",
    "The first reply said a document was attached but left a [DOCUMENT NAME] placeholder in the text.",
    "The second reply repeated the utility bill bullet lines twice and ran long. Trim and proofread before sending."
   ]
  },
  {
   "id": "48966627337",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Duplicate SS-4 signing request after EIN submission",
   "s": [
    4,
    5,
    4,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Gave a direct answer to the key question: disregard the new request, the signed SS-4 was already faxed to the IRS, no action needed."
   ],
   "fix": [
    "First response took around 4.9 hours against the 90 minute standard.",
    "Shazia also asked why the new request was sent. Give a short reason so she trusts the next email from doola."
   ]
  },
  {
   "id": "48633516109",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Formation status, EIN timeline, Form 8821 and ODI questions",
   "s": [
    3,
    4,
    4,
    2,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Resolved the missing forms confusion by confirming the SS-4 was faxed on September 21, with a 6 to 8 week standard timeline and the $300 expedited option.",
    "The ODI reply clearly set the scope (US compliance only) and pointed Rizwan to an Indian CA specialising in FEMA and ODI."
   ],
   "fix": [
    "Replies took around 13.2, 9.1 and 13.1 hours. The customer had to chase with 'Anyone here?' before getting an answer.",
    "'Entirely up to you' did not really answer whether he could send contracts before the EIN. Explain what the EIN is needed for (banking, invoicing, tax forms) so he can decide."
   ]
  },
  {
   "id": "48448533657",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Document list for paying an India based contractor",
   "s": [
    2,
    3,
    4,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Stepped in for an away colleague and thanked Yash warmly for being a three year customer."
   ],
   "fix": [
    "Yash asked for the compliance documents needed to engage an India based contractor, but the reply said the tax team needs to review documents for filing and asked him to enrol in the tax service. That answers a different question.",
    "The earlier reply in the thread already offered a $150 tax consultation. Point back to that concrete option instead of a vague tax service sign up with no price or link.",
    "Reply came about 13.5 hours after the customer's message, and the ticket was closed six days later with the offer to help still open. Use the customer's name instead of Hi there."
   ]
  },
  {
   "id": "48623513934",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-09-25",
   "ranked": true,
   "subject": "Surname misspelled on EIN letter",
   "s": [
    3,
    4,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "First reply checked the SS-4, confirmed the correct spelling was submitted and named the exact fix needed, which reassured an upset customer.",
    "Final reply attached the corrected EIN document directly to the email as well as uploading it to the dashboard."
   ],
   "fix": [
    "Sent an 'EIN document uploaded' update before checking that the surname was actually corrected, and Victory had to write back that it was still wrong.",
    "When Victory flagged the error was not fixed, the holding reply gave no return date. Commit to a specific day for the next update.",
    "First response came about 3.7 hours after a message the customer described as urgent, against the 90 minute standard. Final reply should state plainly that the surname is now corrected."
   ]
  },
  {
   "id": "48538152601",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Name still visible in NM change history after removal",
   "s": [
    3,
    4,
    3,
    2,
    2
   ],
   "category": "Policy & Process",
   "keep": [
    "Clarifying reply correctly explained that doola does not control what the state website shows in its change history."
   ],
   "fix": [
    "The holding reply came about 12 hours after the customer's message and only said a colleague would reply when available, with no return date.",
    "The substantive reply took another 4.4 days, and the ticket was closed five days later with the clarifying question unanswered and no follow up.",
    "Rdwan had paid for a privacy amendment. Check the filing status and explain whether historical records can be removed, instead of making him confirm what he already described."
   ]
  },
  {
   "id": "48678478946",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Phone number blocking Meta business verification",
   "s": [
    3,
    4,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Checked the Articles of Organization and confirmed that the old phone number is not on doola's records, which answered Amin's question about whose number it was."
   ],
   "fix": [
    "Amin first asked doola to change the company phone number. The thread never said what number doola holds or whether it can be updated.",
    "Both replies came about 12 to 13 hours after Amin's messages on a request he marked ASAP. Acknowledge the urgency.",
    "Beyond 'contact Facebook Support', suggest practical alternatives such as verifying with formation documents, the EIN letter or a domain, so Amin is not stuck."
   ]
  },
  {
   "id": "48983020875",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Cancel subscription without dissolving the LLC",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Replied in about 28 minutes and confirmed every point asked: cancellation set, no further charges, services active until Jun 17, 2027.",
    "Warned that automated renewal reminders may still arrive, and listed the compliance duties he now owns."
   ],
   "fix": [
    "Greeted him as Juan Carlos Manuel, which mixes his signature name with the contact record. Use the name he signed with.",
    "Say in one line that the LLC itself stays active and is not being dissolved, since he asked about this directly."
   ]
  },
  {
   "id": "48924347666",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Correct full legal name and company name punctuation",
   "s": [
    3,
    4,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Updated the full legal name across account, authorized person and member details, and sent the revised SS-4. The customer replied 'Awesome customer service'."
   ],
   "fix": [
    "Gonçalo asked twice for the name to be Superlimit, LLC with a comma. The reply said it is already Superlimit LLC so no changes are needed, which ignores his request. Explain whether the comma can be added.",
    "His first message asked to pause pending filings and to explain next steps if anything was already filed. This was never addressed.",
    "First reply came about 9.4 hours after his message, and the next came about 12 hours after his follow up."
   ]
  },
  {
   "id": "49011144343",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Duplicate annual report fee and tax filing status",
   "s": [
    3,
    5,
    5,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Confirmed the duplicate $62.25 charge, refunded it in full right away, and set a 5 to 10 business day expectation.",
    "Warm, clear and brief tone that owned the mistake without over apologising."
   ],
   "fix": [
    "Emrah asked a second question about whether anything else is needed on his 2025 return showing as submitted to the IRS. It was never answered, and the ticket was closed.",
    "First response took about 2 hours against the 90 minute standard."
   ]
  },
  {
   "id": "48652766791",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-10-03",
   "ranked": true,
   "subject": "Overdue tax and annual report after reinstatement",
   "s": [
    3,
    2,
    3,
    3,
    3
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Clarified that the Starter Plan does not include tax filing, and gave step by step tax filing instructions with a walkthrough video."
   ],
   "fix": [
    "The reply is a long pasted macro, with marketing text like 'Why It Matters' and an empty step 3 in the annual report list. Cut it down to what Lisa asked.",
    "Lisa asked what the 'window isn't open' pop up means and what is expected of her. Explain the pop up and her reinstatement status directly instead of only giving generic steps.",
    "Reply came about 14 hours after her message. Lisa had already complained that information was not being explained, so lead with plain answers."
   ]
  },
  {
   "id": "49030772759",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Set Australian parent company as sole C-Corp shareholder",
   "s": [
    3,
    4,
    1,
    2,
    3
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Final answer was useful: Delaware does not record shareholders publicly, so Ed can submit and record the parent company in the bylaws and stock ledger."
   ],
   "fix": [
    "Sent Ed a reply about forwarding a label that belonged to another customer, then called him Remzi three times, even after he corrected it. Check the thread and name before sending, and apologise for the mix up.",
    "First reply came about 10.6 hours later and asked for a screenshot instead of answering the shareholder question. That added a round trip while Ed waited to submit.",
    "Confirm whether doola's formation documents, such as the stock certificate, will show the parent company as 100% shareholder, so Ed knows what to do after filing."
   ]
  },
  {
   "id": "48641219926",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Suspend, not cancel, Starter Plan after failed payment",
   "s": [
    2,
    3,
    2,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "First response went out in about 43 minutes, well inside the 90 minute standard.",
    "Clearly listed what the customer would lose by cancelling, including Registered Agent mail and compliance responsibility."
   ],
   "fix": [
    "Didier asked for a suspension only and explained why. The reply was the generic cancellation macro and never addressed whether suspension is possible.",
    "The customer wrote in French and the reply was in English. Match the customer's language or acknowledge the switch.",
    "Asked for the cancellation reason he had already given, then the ticket was closed six days later with no follow up and nothing resolved."
   ]
  },
  {
   "id": "48700623275",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Confirm subscription is cancelled and no further rebilling",
   "s": [
    4,
    5,
    4,
    4,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Gave a direct, unambiguous answer: the subscription is cancelled and there will be no further charges.",
    "Short, warm close that left the door open without overselling."
   ],
   "fix": [
    "Add the effective cancellation date and what happens to the dashboard and Registered Agent so David has nothing left to confirm.",
    "First response took about 1 hour 49 minutes, slightly over the 90 minute standard."
   ]
  },
  {
   "id": "48662929786",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Registered Agent could not verify sender for state notice update",
   "s": [
    2,
    3,
    1,
    2,
    2
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Told the customer the follow up link was automated and no action was needed, which stopped the confusion about the broken link."
   ],
   "fix": [
    "Addressed Sol Mee as \"Artem\" in both replies. Check the customer name before sending.",
    "Sol asked what an authorized email is and said she was writing from her login email. Neither reply answered that or explained that the Registered Agent needs doola to submit on her behalf.",
    "Ticket was closed about two hours after the Registered Agent replied again that it still could not verify the request, so the state notice update was unresolved at close."
   ]
  },
  {
   "id": "48675223597",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "How to close the company",
   "s": [
    5,
    4,
    4,
    4,
    5
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Gave the exact dashboard path to start dissolution, the 15 to 20 business day timeline, the tax filings that may apply and the full fee breakdown in one reply.",
    "Preempted follow ups on state tax accounts, foreign registrations and administrative dissolution risk, plus a guide link."
   ],
   "fix": [
    "The reply is long and dense. Lead with the three steps and put the fee table and tax notes under clear headings.",
    "Include the parts relevant to Karime's company only, for example drop the December note if it does not apply, and acknowledge the request before the macro.",
    "First response took about 1 hour 45 minutes, slightly over the 90 minute standard."
   ]
  },
  {
   "id": "48606451021",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Overdue compliance tasks showing in dashboard incorrectly",
   "s": [
    3,
    4,
    4,
    2,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Kept the commitment to follow up: came back the next morning to confirm the dashboard issue was fixed.",
    "Confirmed the tax return was filed and the Registered Agent was active and paid, so the customer knew nothing was due."
   ],
   "fix": [
    "First response took about 20 hours against the 90 minute standard.",
    "Sinead asked about Form 7004, the Wyoming Annual Report and the 1099 separately. The reply did not confirm the status of each one individually."
   ]
  },
  {
   "id": "48612479667",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "IRS CP282 notice response and whether it is covered by plan",
   "s": [
    2,
    4,
    3,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Looped the Tax team in on the same thread and shared the taxes inbox so the customer knew where to go next."
   ],
   "fix": [
    "First response took about 48 hours, from Saturday morning to Monday morning, against the 90 minute standard.",
    "Benjamin asked three clear questions. None were answered, including whether the notice response is included in his plan, which Customer Care can confirm.",
    "Closed the ticket at handoff with no expected response time from the Tax team. Give a timeframe so the customer is not left to chase."
   ]
  },
  {
   "id": "48613271142",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Update responsible party and members on the company",
   "s": [
    3,
    3,
    3,
    2,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Told the customer which teammate owned the request and replied within minutes to the thank you."
   ],
   "fix": [
    "First response took about 25 hours, from Sunday to Monday, against the 90 minute standard.",
    "When Gabeth chased for an update two hours later, the reply was the same duplicate ticket macro again. Give a real status or an expected time instead.",
    "Spelled the teammate's name two ways (Shubham and Subham) and greeted the customer in all caps. Small details like these affect trust."
   ]
  },
  {
   "id": "48710209835",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Refund and cancel an unrecognised $297 Starter Plan charge",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Handled all three asks in one reply about 45 minutes after contact: refund processed, subscription cancelled, payment method unlinked, and which company the charge was for.",
    "Set expectations with the 7 to 10 business day refund window. Edmond replied that everything was clear."
   ],
   "fix": [
    "Framing the refund as a courtesy exception reads oddly when the customer says the charge was unauthorised. Acknowledge his concern first and avoid suggesting he is getting a favour."
   ]
  },
  {
   "id": "48440960177",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Refund request for $2,999 renewal charged without notice",
   "s": [
    2,
    4,
    3,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Final reply on Sep 23 offered a full refund with cancellation, explained why, and listed exactly what changes for the Registered Agent and compliance.",
    "Kept the thread warm with a follow up after the lead's offer and a holding reply after the customer's counter."
   ],
   "fix": [
    "Told Sergei renewal reminders had been sent. The team lead later confirmed they were not. Verify facts before stating them in a dispute.",
    "Gave conflicting answers on auto renewal, first saying it could not be disabled, then that it could, and re offered the 10% credit he had already rejected.",
    "Holding replies had no committed return date, and the ticket was closed on Sep 29 while the full refund offer was still awaiting his decision."
   ]
  },
  {
   "id": "48724005711",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Slash bank application error and status check",
   "s": [
    4,
    4,
    3,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Correctly pointed Benjamin to Slash Support, who owned the error and the application review.",
    "Responded to both of his messages within about 77 to 109 minutes."
   ],
   "fix": [
    "Opening with \"I take it you have everything you need\" twice feels dismissive. Acknowledge the frustration of a blocked bank application first.",
    "Tell him what doola can do if Slash is delayed or declines, such as other banking options, so he is not left waiting with no plan B."
   ]
  },
  {
   "id": "48587814323",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-09-23",
   "ranked": true,
   "subject": "Wyoming annual report status after overdue notice",
   "s": [
    4,
    4,
    3,
    3,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Checked the account and confirmed the 2026 Wyoming annual report was already filed, gave the next due date of 1 July 2027 and attached the report.",
    "Pointed Aiste to the documents section of the dashboard so she can find it again."
   ],
   "fix": [
    "Asked whether she meant the state report or IRS filings when her message already said annual report. That cost a full round trip on an overdue concern.",
    "First human reply came around 11 hours after her email and the follow up took around 14 hours, well past the 90 minute standard.",
    "She was worried after our email said the report may be overdue due to a doola reminder glitch. Acknowledge that confusion and confirm no payment or action is needed."
   ]
  },
  {
   "id": "48637178139",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Foreign owned Wyoming LLC compliance: Form 5472 and annual report",
   "s": [
    2,
    3,
    2,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied in about 45 minutes and checked her plan before answering.",
    "Gave clear pricing for the annual report ($199 plus state fee) and IRS filing ($1,500)."
   ],
   "fix": [
    "Customer asked three numbered questions. The Wyoming annual report due date and state fee were not given, and question 3 on other federal or state obligations was ignored entirely.",
    "Customer wrote in French and signed as Océane. Reply was in English and opened with \"Hi Océan\". Match the language switch and get the name right.",
    "IRS deadline given as \"March 15/April 15 depending on entity type\" instead of the specific Form 5472 deadline for her single member LLC, and her concern about the $25,000 penalty was not addressed."
   ]
  },
  {
   "id": "48717032549",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-09-24",
   "ranked": true,
   "subject": "Upload updated operating agreement to dashboard",
   "s": [
    5,
    5,
    4,
    4,
    5
   ],
   "category": "Policy & Process",
   "keep": [
    "Completed the request in a single reply: uploaded the updated operating agreement and linked the documents section so Damian could verify it.",
    "Short and easy to follow, nothing left for the customer to chase."
   ],
   "fix": [
    "First reply took around 2 hours 10 minutes against the 90 minute standard, on a request the customer asked to be handled swiftly.",
    "Proofread before sending. \"uploaded it ot your dashboard\" looks careless on an otherwise clean reply."
   ]
  },
  {
   "id": "48726064274",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-09-28",
   "ranked": true,
   "subject": "Cost to dissolve a New Mexico LLC in future",
   "s": [
    2,
    2,
    3,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Replied within two minutes to the follow up with a clear numbered price list for dissolution and related filings."
   ],
   "fix": [
    "First reply was a long Starter plan feature macro that did not answer the question. It said dissolution costs \"an additional fee\" without the amount, forcing Mohamed to write back asking for it.",
    "His question about the New Mexico state filing fee was never answered. \"Applicable state fee\" was all he got.",
    "First response came around 31 hours after his email, far past the 90 minute standard."
   ]
  },
  {
   "id": "48710046108",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-09-29",
   "ranked": true,
   "subject": "Missed Florida annual report reminders and compensation",
   "s": [
    4,
    4,
    3,
    2,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Got a clear answer from the team, owned the reminder glitch, confirmed the company was still active and offered to file with the late fee covered.",
    "Closed the loop well: uploaded the self filed reports and added $199 in non expiring credits as the discount David asked for."
   ],
   "fix": [
    "David had already complained about getting an AI reply, yet the first human reply came about 13 hours later and opened with the standard intro macro. Lead with an acknowledgement of his frustration.",
    "Holding replies said \"I will notify you as soon as I get an update\" with no committed return date.",
    "His discount request sat for around 3.5 days (a colleague covered with a holding note) before the agent replied."
   ]
  },
  {
   "id": "48940737358",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Mercury transaction missing from doola Books",
   "s": [
    2,
    3,
    3,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Raised the issue with the bookkeeping team and pointed Gonzalo to the bookkeeping contact for future questions."
   ],
   "fix": [
    "Gonzalo asked \"What was the issue?\" once the transaction appeared. The ticket was closed with a generic sign off and his question was never answered.",
    "First human reply came around 15 hours after his email, and the holding reply gave no return date.",
    "Proofread. \"your future queries related to bookkeeping, you can directly reach out\" is missing words."
   ]
  },
  {
   "id": "48670398289",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-09-30",
   "ranked": true,
   "subject": "Fix misspelled LLC name on EIN",
   "s": [
    4,
    4,
    4,
    3,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Took action on the first reply by raising the EIN name correction with the filing team.",
    "Followed up with a clear update and set expectations that the IRS can take up to 90 days, then acknowledged Owen's frustration about the wait."
   ],
   "fix": [
    "Did not tell Owen he would receive a document to sign. He became suspicious of the signature email and had to write in to check it was genuine.",
    "First reply came around 9 hours after his email, beyond the 90 minute standard."
   ]
  },
  {
   "id": "48656192657",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-10-01",
   "ranked": true,
   "subject": "Missing signature request and Mercury account setup",
   "s": [
    3,
    4,
    3,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Resolved the blocked formation fast: replied in under an hour and re sent the signature request within minutes when it was not in spam.",
    "Got Mercury to confirm an application already existed and gave the exact login link to resume it."
   ],
   "fix": [
    "After Samarth reported the reset had not worked, there was no reply from the agent for almost 6 days, covered only by colleague holding notes.",
    "His question on how to list a corporate parent as owner in Mercury was never answered before the ticket was closed.",
    "Holding reply on the tech team request gave no committed return date."
   ]
  },
  {
   "id": "48675870213",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Repeat IRS notice for dissolved company",
   "s": [
    2,
    3,
    2,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Acknowledged within about 15 minutes and raised the notice with the tax team straight away."
   ],
   "fix": [
    "Wael flagged this as urgent and critical, then waited around 8 days for a substantive update with no return date given.",
    "Never explained what the notice was or what to do. \"The return was filed on time\" plus a vague \"IRS needing some additional filings\" conflicts and leaves the notice unresolved, then pushes him to book a call.",
    "His point that he paid doola to file and close the company was not addressed, and the ticket was closed with the notice still open. Typo \"tzx team\" also slipped through."
   ]
  },
  {
   "id": "49056377526",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-10-02",
   "ranked": true,
   "subject": "Put new LLC formation on hold before filing",
   "s": [
    5,
    4,
    2,
    4,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Actioned the request directly by adding a hold note for the filing team and told the customer how to restart it."
   ],
   "fix": [
    "Addressed the reply to Anurita when Chetan was the one who wrote in. Check the sender name before sending.",
    "Reply took around 1 hour 45 minutes, just past the 90 minute standard, on a time sensitive hold request.",
    "Proofread the sign off. \"Rgeards\" undermines an otherwise good reply."
   ]
  }
 ]
};
