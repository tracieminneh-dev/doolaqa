// November 2026 QA cycle, month to date: tickets closed 1 to 16 Nov 2026, scored
// in Claude through the HubSpot connector with the HubSpot notes check. Response
// time is not scored.
export default {
 "month": "2026-11",
 "label": "November 2026",
 "window": {
  "from": "2026-11-01",
  "to": "2026-11-16"
 },
 "publishedAt": "2026-11-23T07:39:40.834Z",
 "source": "manual",
 "tickets": [
  {
   "id": "50604215150",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Downgrade a dormant company to the Starter plan",
   "s": [
    2,
    3,
    3,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Once the mix-up was clear, the final reply was crisp: plan ends November 29th, Starter invoice of $297, nothing needed from the client."
   ],
   "fix": [
    "Customer asked for a downgrade to Starter and the subscription was set to cancel instead, which took two confused follow-ups to correct.",
    "The card was removed from the payment details as part of the cancellation, yet a $297 Starter invoice is still due on November 29th; tell the client how that invoice will be paid.",
    "Use the cancellation macro only for cancellations; the \"sorry to see you go\" and good standing warning did not fit a downgrade."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50509040233",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-06",
   "ranked": true,
   "subject": "Cannot reach dashboard after formation, password reset fails",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave numbered login steps that are easy to follow and asked Taha to confirm whether he could log in."
   ],
   "fix": [
    "The reset steps spelled the customer's login email differently from the address on file, so following them as written would fail.",
    "Customer said the duplicate was already deleted and the real issue was being routed back to the formation flow; the reply repeated the reset flow that was already not working.",
    "Ticket was closed without the customer confirming they could log in; keep it open until access is confirmed."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50616399529",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-07",
   "ranked": true,
   "subject": "Loyalty discount on registered agent renewal",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Opened with the renewal date and an exact discounted price of $267.30.",
    "Handled the counter request firmly with a clear final offer of 15% at $252.45, then confirmed the invoice was updated and when the link would arrive."
   ],
   "fix": [
    "The client mentioned their struggling startup team; a short acknowledgement before the final offer would soften the no to 20%.",
    "Restate the final amount of $252.45 in the confirmation so the client has it in one place."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50804989491",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-08",
   "ranked": true,
   "subject": "Add a director to a Texas C corp and redistribute shares",
   "s": [
    2,
    3,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "After payment, gave a clear state timeline of 17 to 20 business days and said nothing was needed from the client."
   ],
   "fix": [
    "Told the client the director was added and bylaws updated, then 25 minutes later said a $299 state amendment was required; give the full answer in one reply.",
    "The first reply was a holding message with no return time; holding replies need a committed time for the next update.",
    "The share redistribution request was never addressed, and the client's name was misspelled as Marc in the final reply."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Single note was logged before the final update confirming the amendment was filed, and it has no Next Step owner."
   }
  },
  {
   "id": "50975945608",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-11",
   "ranked": true,
   "subject": "Formation date and 2026 filing duties for foreign-owned LLC",
   "s": [
    2,
    4,
    3,
    4,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave a clear status update that the formation was filed with the state and nothing was needed yet."
   ],
   "fix": [
    "Customer asked four specific questions (2026 filing obligation, Form 5472 and pro forma 1120, KYC/AML, booking a call) and none were answered directly.",
    "Deferring to a tax call without a booking link leaves the customer to chase; include the link or the general rule for foreign-owned single member LLCs."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Next Step is only NFA with no owner."
   }
  },
  {
   "id": "51027568658",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Update company address with the IRS",
   "s": [
    3,
    3,
    4,
    4,
    4
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Quoted the $149 fee up front, sent the payment link on request and named Form 8822-B as the next step."
   ],
   "fix": [
    "Mixed terms (amendment filing, updated EIN letter) confused the client and prompted a follow-up; use one consistent description of the 8822-B process.",
    "The clarification stayed vague; say what the IRS will send and roughly how long it takes.",
    "Give a committed date for when the 8822-B will be sent for signature, so the client knows when to expect it."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Next Step says no further action despite the 8822-B pending with Ops, and has no owner."
   }
  },
  {
   "id": "51041452579",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Dissolve a Wyoming LLC before the December 1 report",
   "s": [
    2,
    3,
    3,
    4,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave an itemised price list for the annual report, dissolution and short-year return, and flagged state tax accounts and foreign registrations."
   ],
   "fix": [
    "Client asked whether dissolution is included in the plan, how to coordinate subscription and registered agent cancellation, what documents are needed and the completion date; none were answered.",
    "Did not confirm whether the December 1 deadline is achievable, which was the client's main concern.",
    "The long macro buried the pricing; lead with direct answers to the numbered questions."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "No Resolution status or Next Step with an owner."
   }
  },
  {
   "id": "51155787591",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-14",
   "ranked": true,
   "subject": "Expedited same-day EIN using an existing ITIN",
   "s": [
    2,
    4,
    3,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Explained the next step plainly: EIN applied online once the state approves the formation, nothing needed from the client."
   ],
   "fix": [
    "Client said they have an ITIN, and the reply said \"Since you have an SSN\"; confirm the ID type before advising.",
    "Did not address the same-day expectation or give a realistic EIN timeline."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Next Step is only NFA with no owner, and the note repeats the SSN error."
   }
  },
  {
   "id": "50954871870",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-15",
   "ranked": true,
   "subject": "Downgrade to Starter and update billing address",
   "s": [
    2,
    3,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Respected the request not to be pitched and confirmed the switch date of December 12th and the $297 invoice."
   ],
   "fix": [
    "The billing address update in the first message was never acknowledged or done, and the ticket was closed with it still outstanding.",
    "The annual report question got a plan feature list instead of a direct answer that the New Hampshire report becomes the client's responsibility.",
    "The closing message has a broken fragment, \"Wishing you\"; proofread before sending."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Next Step has no owner and the note says the client was unresponsive though they replied later."
   }
  },
  {
   "id": "51161007133",
   "agent": "Annie Kapoor",
   "pipeline": "Account Management",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Update responsible party address and SSN on file",
   "s": [
    4,
    4,
    4,
    4,
    5
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Updated the address, uploaded a new Operating Agreement and sent a screenshot as proof.",
    "Proactively checked the EIN letter address and answered the 8822-B question with the $149 option."
   ],
   "fix": [
    "The SSN update was requested but never confirmed in the reply.",
    "Advise the client not to send a full SSN by plain email in future and point to a secure channel."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Next Step is only NFA with no owner, and the SSN outcome is not recorded."
   }
  },
  {
   "id": "50073149742",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-02",
   "ranked": true,
   "subject": "LLC dissolution and short year tax return costs and next steps",
   "s": [
    4,
    5,
    4,
    5,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Answered the five numbered questions point by point with the $809 total, forms 1120 and 5472, and a 15 to 30 business day timeline.",
    "Later update gave a concrete state date (November 25) for the Certificate of Dissolution and what happens after it."
   ],
   "fix": [
    "Customer had already attached the annual report and tax return, yet the reply asked them to share the completed documents again.",
    "The last reply did not say whether copies and filing confirmation of Forms 1120 and 5472 will be shared with the customer; answer every numbered question so they do not have to ask again."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only one note for five customer updates, and it has no Next Step."
   }
  },
  {
   "id": "50364414494",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-02",
   "ranked": true,
   "subject": "Wants subscription charged in USD instead of EUR",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave clear dashboard steps to update the payment method under Settings, Subscription, Billing Information."
   ],
   "fix": [
    "Customer asked to be charged in USD; the reply removed the card instead and never addressed the billing currency.",
    "Customer came back reporting a $343.86 charge on a $329 invoice and the ticket was closed with no reply in the thread.",
    "Acknowledge the extra cost from the currency conversion and say what will be done about it."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note only says the client was contacted via Gmail, with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50611981195",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-03",
   "ranked": true,
   "subject": "Dashboard 1099 alert, Mercury bank change and address update",
   "s": [
    4,
    4,
    4,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Explained the 1099 NEC threshold of $600 to contractors and confirmed the alert could be ignored once no contractors were hired.",
    "Handled all three questions with labelled sections and updated the address the same day."
   ],
   "fix": [
    "The Mercury question was passed back to Mercury; say whether a reconnect is usually needed so the customer is not left to chase.",
    "Repeat the new address as entered in the confirmation so the customer can check it was recorded correctly."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Summary and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "50492635424",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Same day Certificate of Good Standing request",
   "s": [
    4,
    5,
    3,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Laid out standard ($175, 6 to 12 business days) and expedited ($225, 2 to 4 business days) options clearly."
   ],
   "fix": [
    "Customer asked for the certificate by today; offer a faster route such as ordering directly from the state online, rather than only saying it cannot be done in one day.",
    "Follow up went to a different company contact and caused confusion; confirm which entity the request is for before chasing."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Updates over several days are covered by one note with no Next Step."
   }
  },
  {
   "id": "50702290010",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Reporting US LLC income on a Moroccan tax return",
   "s": [
    3,
    4,
    3,
    5,
    3
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Set the scope clearly (no Moroccan tax advice) and pointed to the free VIP tax consultation with dashboard steps."
   ],
   "fix": [
    "Opened with the customer's surname and switched to Michael in the next reply; use the right first name from the start.",
    "Customer said they are not fluent in English; offer an email based option for the tax questions instead of only a compliance address.",
    "Answer the US side that was asked, such as disregarded entity treatment, rather than deferring every question to a call."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Two updates on different days with one note and no Next Step."
   }
  },
  {
   "id": "50614647422",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Follow up on pending questions and discount after a meeting",
   "s": [
    4,
    4,
    4,
    3,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Apologised for the delay and gave a clear answer: a one time 10% goodwill discount, plan expiry of December 11, 2026 and what is not included."
   ],
   "fix": [
    "Answers promised for October 26 only arrived after the customer chased on November 2; keep committed dates or send an update before they pass.",
    "Post meeting email was only a thank you; recap what was agreed and the next step in writing."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only one note reading 'Email follow up after the call' for two updates, with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50693530893",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Cost to register a DBA for the company",
   "s": [
    4,
    4,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave the $299 price including state fee plus step by step dashboard instructions to purchase the DBA."
   ],
   "fix": [
    "Add the expected processing time so the customer knows when the DBA will be in place."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged on the ticket."
   }
  },
  {
   "id": "50705078074",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Cancel subscription but keep the registered address",
   "s": [
    3,
    3,
    2,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Explained that cancelling removes the Registered Agent and can lead to administrative dissolution."
   ],
   "fix": [
    "Verification answers gave a different applicant name from the sender, yet account status was shared without checking the sender is authorised.",
    "Called the customer Lulian twice; the name is Iulian.",
    "Customer asked to keep only the address; the reply pushed higher plans and a long upsell list instead of a direct yes or no and the Starter option."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged on the ticket."
   }
  },
  {
   "id": "51031430155",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Reinstatement and good standing certificate for a bank deadline",
   "s": [
    5,
    5,
    4,
    5,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Explained why the entity lost good standing (missed 2025 and 2026 annual reports) and itemised the $226.90 reinstatement fees.",
    "Answered the Mercury address and US operations questions with practical guidance and gave timelines that fit the November 25 deadline."
   ],
   "fix": [
    "Acknowledge the deadline pressure up front and confirm the certificate should arrive before November 25."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Summary and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "51162416560",
   "agent": "Fatima Sindhu",
   "pipeline": "Account Management",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Asked for help with sales tax after a check in email",
   "s": [
    3,
    4,
    3,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Set the scope clearly and named a partner, Kintsugi, for sales tax compliance."
   ],
   "fix": [
    "Include a direct link to Kintsugi instead of telling the customer to find their Support Center.",
    "Ask what sales tax help is needed before closing; a nexus or registration question may have a quick answer."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note only says 'Response to the check in email', with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "49867726409",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-03",
   "ranked": true,
   "subject": "Dissolve inactive Wyoming LLC before renewal and confirm costs",
   "s": [
    3,
    2,
    4,
    4,
    3
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Verified identity before sharing any account dates, and caught an EIN mismatch before proceeding.",
    "Acknowledged the earthquakes warmly before getting back to business."
   ],
   "fix": [
    "The final reply lists two different fee breakdowns for the same dissolution and leaves a dangling 'For more details, click here' with no link; give one clear price list.",
    "Annual report was due November 1, four days after the reply, yet it is not flagged as urgent or tied to a next step.",
    "Close with concrete cancellation steps for the November 12 renewal instead of 'let me know how you would like to proceed'."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket for any of the three updates."
   }
  },
  {
   "id": "50324064542",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "LLC to C-Corp conversion via outside provider, filings and fees",
   "s": [
    4,
    5,
    5,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Clear numbered answers on Form 8832, share structure, registered agent and the $300 state fee.",
    "Kept the promise to confirm the registered agent email and followed up unprompted."
   ],
   "fix": [
    "First reply asked the customer whether their provider would file Form 8832 when doola had already filed it; check the account before asking."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only one note with a Slack link; three of four updates have no note and none has Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50066487139",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Apple App Store tax form for foreign-owned LLC, W-9 or W-8BEN",
   "s": [
    4,
    5,
    5,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Holding reply acknowledged the app launch was blocked and offered a tax consult with step by step booking instructions.",
    "Final answer followed the customer's five numbered questions with clear headings and prices ($149 address amendment, $149 Form 8832)."
   ],
   "fix": [
    "Did not answer how a 1099-K would be handled in the Form 5472 / pro forma 1120 filing or whether a protective 1040-NR is advised.",
    "Skipped the question on downsides for the bank account, Stripe and D-U-N-S when changing the business address.",
    "Holding reply gave no return date; commit to a day when routing to the Tax Team."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only a Slack link note on the first update; the final answer has no note and none has Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50228184448",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Add spouse as 50% member, capital contributions and tax impact",
   "s": [
    2,
    3,
    3,
    4,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Correctly confirmed no Wyoming state amendment or registered agent change is needed for a new member.",
    "Pointed out the membership certificate on the last page of the Operating Agreement."
   ],
   "fix": [
    "Stated Form 8832 must be filed for the LLC to become a partnership; a two member LLC is a partnership by default, and the customer had to correct this.",
    "Pasted a generic employee-style member clause for a 50% owner and left the asked fee and timeline for drafting the documents and the BOI question unanswered.",
    "The second reply has an unfinished sentence about the January 2027 effective date, and it sends the customer's correct Form 8832 point to a Tax Advisor instead of acknowledging the earlier error; proofread and own the correction."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket for either update."
   }
  },
  {
   "id": "50969992114",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "How to refer a friend to doola",
   "s": [
    5,
    4,
    4,
    5,
    5
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Complete referral steps including the 10% friend discount, up to 30% reward and Tremendous payout timing.",
    "Gave the referrals contact for follow ups so the customer knows where to go."
   ],
   "fix": [
    "Break the reward rules paragraph into short bullets so the key figures are easier to spot."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket for either update."
   }
  },
  {
   "id": "50797560113",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-11",
   "ranked": true,
   "subject": "Pay past due $1,999 subscription by ACH",
   "s": [
    3,
    5,
    3,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Checked the account and confirmed the payment had already gone through."
   ],
   "fix": [
    "Did not answer whether ACH debit is supported, so the same problem will return at the next renewal.",
    "Explain how to add or update a payment method for future charges instead of only asking if anything else is needed."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket."
   }
  },
  {
   "id": "50860579340",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Request a Philippines-based account manager for bank setup",
   "s": [
    3,
    4,
    5,
    5,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Congratulated the customer on the new EIN and built rapport by noting she is also based in the Philippines."
   ],
   "fix": [
    "The customer's goal was opening a US bank account, but the reply gives no options, documents or steps, only a meeting link.",
    "Add the banking partner options and required documents so the customer can start before the call."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket."
   }
  },
  {
   "id": "50867523092",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Bank account question during formation and required documents",
   "s": [
    5,
    4,
    4,
    5,
    5
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Answered every numbered question: passport timing, which documents doola provides, industry choice, a second project under the same LLC and formation review.",
    "Clarified proof of address is the personal residence, preventing a wrong upload."
   ],
   "fix": [
    "The reply was sent cut off mid-sentence ('I'l'); proofread before sending.",
    "Say in the first document list that proof of address means your personal residence, so the customer does not have to ask whether doola provides it."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket for any of the three updates."
   }
  },
  {
   "id": "50962105963",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Start Delaware LLC dissolution before year end",
   "s": [
    2,
    3,
    3,
    4,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Closed the loop when the customer confirmed resolution and committed to follow up with Luiz on the Delaware license notice."
   ],
   "fix": [
    "Sent the generic dissolution macro and did not answer the six numbered questions: invoice, a December 31 filing commitment, document list, DBA, Mercury and EIN closure timing, and subscription coverage.",
    "The macro ends with 'For more details, click here' and no link.",
    "Answer each numbered question directly when the customer lays them out."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket for either update."
   }
  },
  {
   "id": "51158806315",
   "agent": "Jesi Alderite",
   "pipeline": "Account Management",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Does a Wyoming LLC and registered agent create sales tax nexus",
   "s": [
    4,
    5,
    5,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Clearly explained sales tax is outside doola's scope and pointed the customer to the sales tax partner Kintsugi, who resolved it.",
    "Warm, personalised tone that matched the customer's message."
   ],
   "fix": [
    "Add a one line general note on what typically creates physical nexus so the customer has some guidance before contacting the partner."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket for either update."
   }
  },
  {
   "id": "49854914926",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-01",
   "ranked": true,
   "subject": "Delaware franchise tax notice after federal return was filed",
   "s": [
    4,
    3,
    4,
    3,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Correctly identified the notice as Delaware franchise tax and listed the exact figures needed to compute it.",
    "Explained the penalty and good standing risk of late payment to create urgency without pressure."
   ],
   "fix": [
    "Ticket was closed while the franchise tax details were still outstanding, right after telling Harsh you would take it from there.",
    "Send the request as a short numbered list with a deadline rather than repeating the full blank form twice."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Three customer updates but only one note, and its Next Step says no action while details were still awaited."
   }
  },
  {
   "id": "50477819215",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-03",
   "ranked": true,
   "subject": "Change new LLC name, later withdrawn by customer",
   "s": [
    3,
    4,
    3,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Restated the exact old and new names so the request was clear."
   ],
   "fix": [
    "Asked why the customer wanted the change instead of explaining the name change options, timeline and cost up front.",
    "Addressed the customer as Deep twice although the reply was signed by Arpan; confirm the contact name before replying."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Two customer updates but only one note, which has no real summary or owner."
   }
  },
  {
   "id": "50475601249",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Records check on 2022 EIN application and confirmation letter",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Explicitly confirmed no new EIN application or paid service would be started, matching the customer's instruction."
   ],
   "fix": [
    "Final reply only said records were uploaded; answer the three questions asked (was the SS-4 submitted, when, and was an EIN assigned) in the email itself.",
    "The holding reply said you would circle back but gave no return date; commit to a specific day you will update Jonathan."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "First note is only a Slack link with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50706790957",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "IRS EIN letter shows sole member for a two member LLC",
   "s": [
    4,
    4,
    5,
    3,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Reviewed the SS-4 and told the customer clearly the error was on the IRS side, with empathy for the bank account impact.",
    "Follow up set a clear two week window and said nothing was needed from the customer."
   ],
   "fix": [
    "Ticket was closed the same day you asked for two weeks to fix the IRS record, so the correction was still open.",
    "Answer whether a Form 2848 or signed letter will be needed, since the customer asked directly."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "First note is only a Slack link and the second Next Step has no owner or date."
   }
  },
  {
   "id": "50468642587",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-06",
   "ranked": true,
   "subject": "First year compliance questions for a new Wyoming LLC",
   "s": [
    3,
    4,
    4,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Answered all six questions in a numbered structure that mirrored the customer's email, with the 5472 deadline of April 15, 2027."
   ],
   "fix": [
    "Questions 3 and 4 told the customer to check plan coverage herself; look up her plan and state what is included and the cost to add 5472.",
    "Give the registered agent address and its permitted use directly instead of pointing to formation documents and asking her to confirm with the team.",
    "You offered to review her plan but the ticket was closed without that answer; keep it open until the plan question is resolved."
   ],
   "notes": {
    "status": "Complete",
    "issue": ""
   }
  },
  {
   "id": "50644487273",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Process and costs to close a Wyoming LLC",
   "s": [
    4,
    5,
    5,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Clear dissolution walkthrough with dashboard steps, timeline, $149 plus $60 fees and the $600 short year return.",
    "Warm, respectful tone that acknowledged the decision and closed gracefully when Amal chose to wait."
   ],
   "fix": [
    "Amal asked about partners for bank wind down and distributing funds; say whether doola offers or refers that help.",
    "The fee list says doola processing fee; always write doola in lowercase."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Two customer updates but only one note, and the closing update has no note."
   }
  },
  {
   "id": "51051766699",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-11",
   "ranked": true,
   "subject": "Refund of two charges and cancel all services after dissolution",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Spotted the duplicate ticket and named Dennis as the owner, so Marcel knew where his request was being handled."
   ],
   "fix": [
    "Customer asked for four things; the reply only said a refund was processed without confirming both charges, explaining the $67.12, or confirming all subscriptions were cancelled.",
    "Before closing a duplicate, restate what was already done on the primary ticket so Marcel does not have to chase it.",
    "Acknowledge the frustration of being charged after dissolving both companies."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note is a link and the word duplicate, with no Summary, Resolution or Next Step owner."
   }
  },
  {
   "id": "50967505176",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Urgent SS-4 address and title check, then name availability",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Explained why the registered agent address is used on the SS-4 and confirmed the EIN representative clearly.",
    "Friendly, personal tone that kept Joyjit engaged across several updates."
   ],
   "fix": [
    "The phone number and Sole Member title request was answered with entity classification instead; confirm what will appear on the form.",
    "The holding reply on the name check gave no return date; commit to a specific day you will come back.",
    "Check with the filing team before sending an update; your name update asked for an alternative name after Racine had already resolved it and the company was formed."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Six customer updates but three notes, and one note is only a Slack link."
   }
  },
  {
   "id": "50963322925",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-14",
   "ranked": true,
   "subject": "Dissolve an inactive LLC and cancel subscription",
   "s": [
    2,
    3,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Cancelled the renewal proactively and stated the service end date in the first reply."
   ],
   "fix": [
    "Second reply quoted a $660 total that dropped the $149 fee from your own first email, and the correction relabelled the $600 as annual report fees instead of the short year return.",
    "Check the dashboard checkout before quoting a closure total so the quote matches what the customer will actually be charged.",
    "Gustavo asked whether any filing is included in the plan; answer that directly."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Three updates by Anna and no notes from her on the ticket."
   }
  },
  {
   "id": "51031433746",
   "agent": "Anna H",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Update SS-4 line 9a for a foreign owned LLC before filing",
   "s": [
    4,
    4,
    4,
    4,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Final updates confirmed the exact line 9a and line 10 wording, the fax to the IRS and an up to 8 week EIN timeline.",
    "Sent the revised SS-4 in the thread for review when the customer could not find it, and got his approval before it went to the IRS."
   ],
   "fix": [
    "Holding replies said the team would update Burim but gave no return date; commit to a specific day each time.",
    "Told Burim the revised SS-4 had been emailed for signature when it had not arrived; verify before saying it was sent."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Five updates by Anna but three notes, and two of them are only Slack links."
   }
  },
  {
   "id": "50643530065",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Existing client unable to open a business bank account",
   "s": [
    3,
    4,
    3,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave a clear step by step Mercury walkthrough with the documents, address and phone guidance Mercury asks for."
   ],
   "fix": [
    "Waiel said he could not open an account; ask what happened (rejection or stuck application) instead of sending the generic Mercury setup guide.",
    "Offer alternative banking options in case Mercury does not work for a Saudi Arabia based founder.",
    "Acknowledge the frustration and close with a clear next step or invite to reply."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Issue Summary and Action Taken but no Resolution or Next Step with an owner, only NFA."
   }
  },
  {
   "id": "50829987644",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Follow up on IRS EIN name correction request",
   "s": [
    4,
    5,
    4,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Restated the up to 90 day IRS timeline and confirmed the request was already submitted and being monitored."
   ],
   "fix": [
    "Give Owen the submission date and an expected window or check in date instead of an open ended promise to follow up, so he does not have to chase again."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Issue Summary and Action Taken but no Resolution or Next Step with an owner, only NFA."
   }
  },
  {
   "id": "50874883588",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Third LLC partner not saving during onboarding",
   "s": [
    3,
    4,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "First reply offered troubleshooting plus a manual add with the exact fields needed.",
    "Final reply confirmed the members were added and explained the next step (state formation document)."
   ],
   "fix": [
    "Osa also corrected ownership to 40/40/20; confirm the percentages on the dashboard match, not just that members were added.",
    "Customer said they had tried repeatedly; skip generic browser troubleshooting and offer the manual add up front."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Both notes lack a Resolution and a Next Step with an owner; the second only says NFA."
   }
  },
  {
   "id": "50951322477",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Sales tax permit and resale certificate for Amazon FBA LLC",
   "s": [
    3,
    5,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Was direct that doola does not offer sales tax permits and referred Maria to ResaleCertify and Kintsugi with a link."
   ],
   "fix": [
    "Questions 1 and 3 got no general guidance at all; share the basics (resale certificates usually follow a state registration where you have nexus) before referring out."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Issue Summary and Action Taken but no Resolution or Next Step with an owner, only NFA."
   }
  },
  {
   "id": "50999443596",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Wyoming LLC compliance deadlines, fees and plan upgrade",
   "s": [
    4,
    5,
    5,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered six numbered questions point by point with dates (Oct 1, 2027 report, Apr 15, 2027 return) and fees, plus an exact $1,563.05 prorated upgrade.",
    "Was honest that the ECI and structure questions need the Tax Team and gave booking steps for a consultation."
   ],
   "fix": [
    "Ahmed asked about available extensions and his new renewal date after upgrading; neither was answered."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Notes lack Resolution and Next Step owner, and the third note copies the second instead of logging the tax consultation advice."
   }
  },
  {
   "id": "51053496221",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Using EIN fax for Mercury, then Mercury rejection",
   "s": [
    3,
    4,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "After the Mercury rejection, explained what Mercury checks (legal vs physical address) and listed six alternative banks."
   ],
   "fix": [
    "Nassim quoted the fax saying it is not an official verification document; address that wording instead of calling the fax fully valid.",
    "Ask for the rejection reason shown in his screenshot before pointing him to Mercury support."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Both notes have Issue Summary and Action Taken but no Resolution or Next Step with an owner, only NFA."
   }
  },
  {
   "id": "51095485028",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "LLC dissolution steps and closing state tax accounts",
   "s": [
    4,
    5,
    4,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Initial outreach covered the dashboard path, timeline, every fee and when to close the bank account.",
    "Follow up gave the Wyoming Department of Revenue link and a clear four step closure path."
   ],
   "fix": [
    "Close with how to reach us once she starts the dissolution flow so she knows the next step."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Second note duplicates the first and neither has a Resolution or Next Step with an owner."
   }
  },
  {
   "id": "51191053894",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Where to get blank W-9 forms for contractors",
   "s": [
    2,
    3,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Follow ups confirmed Simeon could safely send the IRS form to his creators, tied it to 1099 reporting, and told him to use the official IRS copy."
   ],
   "fix": [
    "Used a macro on how to fill out your own W-9 when Simeon is the requester collecting forms from creators, which caused another follow up.",
    "Simeon had asked three times after the AI replies; acknowledge that and answer the exact question (link to the blank IRS form) in one line first.",
    "His question on whether the $600 rule applies for 2025 was not confirmed."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Three identical notes with no Resolution or Next Step owner, and they describe fill out instructions rather than what was resolved."
   }
  },
  {
   "id": "51165086095",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Notarized Operating Agreement for payment provider",
   "s": [
    4,
    5,
    5,
    5,
    5
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered all three questions with the partner notary link for non-US residents and the steps.",
    "Asked Maciej to send back the notarized copy so it is stored on the dashboard, and flagged the three month window."
   ],
   "fix": [
    "Told Maciej to sign the agreement before notarizing; signing should happen during the notary session so the notary witnesses it."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Issue Summary and Action Taken but no Resolution or Next Step with an owner, only NFA."
   }
  },
  {
   "id": "51167051098",
   "agent": "Art Flores",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Switch from Starter Plan to Registered Agent only plan",
   "s": [
    4,
    5,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Sent the $99 invoice link and flagged the 24 hour link expiry.",
    "Kept the commitment to cancel the Starter Plan once payment cleared so Bryn was not double charged."
   ],
   "fix": [
    "Tell him when the RA plan renews and whether any unused Starter Plan time is credited."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Notes lack Resolution and a Next Step with an owner; the first only says awaiting payment."
   }
  },
  {
   "id": "50094719777",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-02",
   "ranked": true,
   "subject": "Cancel Starter Plan renewal without dissolving the LLC",
   "s": [
    5,
    5,
    4,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Confirmed the plan is set to cancel at period end on November 10 with no further charge, exactly what Khalid asked for.",
    "Added a clear reminder that he now owns registered agent, annual report and IRS filings to stay in good standing."
   ],
   "fix": [
    "Add the one practical next step he flagged: file the Wyoming registered agent change before November 10 so there is no gap.",
    "Khalid said he is already moving his registered agent to another provider; acknowledge that plan directly so the reply answers him rather than reading as a standard cancellation template."
   ],
   "notes": {
    "status": "Complete",
    "issue": ""
   }
  },
  {
   "id": "50416019252",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-02",
   "ranked": true,
   "subject": "Whether a DBA also makes the matching website domain legal",
   "s": [
    2,
    2,
    2,
    3,
    3
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Pointed Julia to a trademark partner with timeline and USPTO fee context, which is the right direction for brand protection."
   ],
   "fix": [
    "Addressed the customer as Lixia when she signed every email as Julia; always use the name the customer uses.",
    "Saying she can trademark the domain once purchased is misleading; explain that owning the domain already gives her the rights to it and a trademark protects the brand name.",
    "The long trademark macro buried the one-line answer she needed, and the ticket was closed before her actual question was clearly answered; lead with the direct answer and keep the partner details short."
   ],
   "notes": {
    "status": "Complete",
    "issue": ""
   }
  },
  {
   "id": "50609445023",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Remove member name from anonymous NM LLC public record",
   "s": [
    2,
    3,
    2,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Set a clear expectation of 10 to 15 business days with no expedite option in New Mexico and said the filing will land on the dashboard."
   ],
   "fix": [
    "Jiri asked you to confirm doola's representative signs the amendment and his name appears nowhere on it; that was never answered.",
    "The second reply declining goodwill was two lines ending in I hope this helps; acknowledge his frustration and explain the decision with care on an escalated privacy complaint.",
    "Closing with a generic macro while the filing was still pending leaves him to chase the filed copy; commit to sending it when filed."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Your November 5 reply declining goodwill has no note, and the existing note marks NFAN while the filing is pending."
   }
  },
  {
   "id": "50511349361",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Switch from Starter Plan to standalone registered agent",
   "s": [
    2,
    4,
    4,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered each numbered question in the same numbered order, which made a multi-part request easy to follow.",
    "Offered the $99 registered agent option as a fit for keeping the LLC active, which saved the customer from a full cancellation."
   ],
   "fix": [
    "Two replies described the company as a Wyoming LLC with a $60 Wyoming annual report, then the last reply said New Mexico with no correction or apology; flag and own the error clearly.",
    "The final reply never confirmed the plan switch was actually done, and she asked for official filing links that were not given.",
    "Holding lines such as we will share the exact expiry date shortly and I'm checking on this and will update you soonest gave no return date; commit to a specific day you will come back."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Summary note marks NFAN with no Next Step owner while the RA plan switch was still pending."
   }
  },
  {
   "id": "50865205943",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-06",
   "ranked": true,
   "subject": "Unexpected DBA invoice paid twice, refund request",
   "s": [
    2,
    3,
    2,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave a clear fee breakdown of $199 plus the $100 state fee so Nazar could see what the invoice covered."
   ],
   "fix": [
    "You first said the invoice was for a completed DBA and could be ignored, then minutes later said the charge was correct and in progress; check the billing history before answering so the information does not conflict.",
    "Nazar said he already paid the DBA fee at registration and then paid again; confirm whether this is a duplicate before declining a refund.",
    "Open with the customer's name and close with a next step, such as when the DBA will be filed."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note omits the duplicate payment refund request and how it was answered."
   }
  },
  {
   "id": "50969350255",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-08",
   "ranked": true,
   "subject": "Cancel Tax and Compliance Package and refund $1,702",
   "s": [
    1,
    3,
    2,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Shared a concrete Mercury onboarding guide and explained that banks decide approvals independently."
   ],
   "fix": [
    "Zunair asked for a refund of the $1,999 tax package that has not been delivered; the reply only cited formation and EIN as complete, which answers a different question.",
    "The cancellation request, the promo credit point and the November 13 dispute deadline were not addressed, then the ticket was closed.",
    "Opening with sorry the banking side hasn't moved misreads a formal cancellation and refund letter; acknowledge the request he actually made before anything else."
   ],
   "notes": {
    "status": "Complete",
    "issue": ""
   }
  },
  {
   "id": "50477521580",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "What a company name change involves before buying amendment",
   "s": [
    4,
    4,
    4,
    4,
    5
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Covered every question asked, timeline, Mercury and Stripe, documents, fees and impacts, in a numbered breakdown.",
    "Added a practical checklist of common pitfalls and offered to check name availability and send the invoice."
   ],
   "fix": [
    "Remove internal wording like client would need to update this on their own and write it to Reem directly.",
    "Repeated promises that doola will assist with IRS name notices should be confirmed as included in the service before stating them."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged on the ticket."
   }
  },
  {
   "id": "50718164335",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Question about an automatic $397 charge",
   "s": [
    3,
    4,
    3,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Correctly verified identity before discussing any account or billing details."
   ],
   "fix": [
    "Larry said he was writing again and is upset about a charge; acknowledge the frustration before asking for details.",
    "When the email did not match, suggest other ways to find the account, such as the card's last four digits or a receipt, so he is not left guessing.",
    "Ticket closed without any follow-up while the charge question stayed open."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged on the ticket."
   }
  },
  {
   "id": "51160361333",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Confirm switch to $99 registered agent plan before renewal",
   "s": [
    4,
    4,
    3,
    5,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Confirmed the switch is complete, the address stays the same and the $99 charge date of November 26."
   ],
   "fix": [
    "He asked if $99 applies to future renewals and if IRS and state letters still reach the dashboard; answer each one explicitly rather than a general you will still have access to your mail.",
    "Open warmly and drop the duplicate closing macro so the confirmation reads cleanly."
   ],
   "notes": {
    "status": "Complete",
    "issue": ""
   }
  },
  {
   "id": "50970023297",
   "agent": "Christabelle Brown",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Cancel Delaware good standing order no longer needed",
   "s": [
    4,
    5,
    3,
    5,
    3
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Short, clear answer to the only open question and the invoice was actually voided, per the note."
   ],
   "fix": [
    "Boris thanked the team warmly and shared that the agency accepted his status screenshot; acknowledge that good news and his thanks instead of a one-line reply followed by the closing macro.",
    "Confirm the invoice has been cancelled rather than we'll cancel it, and remind him the expedited option is ready if the agency asks for the formal certificate."
   ],
   "notes": {
    "status": "Complete",
    "issue": ""
   }
  },
  {
   "id": "50652813922",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Upload EIN confirmation letter and update EIN status",
   "s": [
    3,
    4,
    4,
    3,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Checked the account before answering, told Cong plainly that the IRS letter had not arrived yet, and raised it with the processing team."
   ],
   "fix": [
    "The holding reply promised to follow up without a committed return date.",
    "The customer also asked for the dashboard EIN status to be updated; the final reply only confirmed the letter upload and never addressed the status."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only a bare Slack link note exists; the second update has no note and neither has Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50513033556",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Cancel subscription and get status of paid dissolution",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Confirmed the subscription is set to cancel at the end of the billing period with no further charge, and explained that renewal reminder emails can be ignored."
   ],
   "fix": [
    "Athul asked twice for an update on the $209 dissolution filed October 12; neither reply mentioned it.",
    "First reply was a generic retention macro that ignored that the LLC is being dissolved.",
    "Said registered agent coverage could not be guaranteed without offering how to protect the company until the dissolution completes."
   ],
   "notes": {
    "status": "Missing",
    "issue": "First update has a note with no Next Step owner; the cancellation update has no note."
   }
  },
  {
   "id": "50867674213",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-06",
   "ranked": true,
   "subject": "State tax notice for a different company forwarded to account",
   "s": [
    3,
    4,
    3,
    2,
    3
   ],
   "category": "Policy & Process",
   "keep": [
    "Owned the mistake clearly and confirmed the $407 notice was not related to the customer's company."
   ],
   "fix": [
    "Confirmed an ownership change as updated on the strength of a single email, with no documents or verification requested.",
    "Kept addressing the customer as Kishore after the new owner Lohit signed the message.",
    "Holding reply had no return time and the customer's question about any actual Wyoming tax obligations was never answered."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes on the ticket for any of the agent's updates."
   }
  },
  {
   "id": "50980290728",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Urgent registered agent cancellation before Nov 15 renewal",
   "s": [
    3,
    4,
    3,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Confirmed in writing that the subscription will not charge again, which was the core ask."
   ],
   "fix": [
    "Customer asked for the effective date in writing; the macro reply never stated it.",
    "Macro told the customer to keep a registered agent and file annual reports even though the LLC is already dissolved."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes on the ticket for the agent's update."
   }
  },
  {
   "id": "51049439902",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "IRS name typo on EIN confirmation letter",
   "s": [
    5,
    5,
    5,
    4,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Validated the IRS error against the formation docs and SS-4 and reassured that the EIN number itself is unaffected.",
    "Clear next step: corrected letter will be uploaded to Documents and Nathalie will be emailed."
   ],
   "fix": [
    "Give an expected timeframe for the corrected letter instead of an open ended promise, and keep the ticket open until it arrives."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note is only a Slack link with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "51058930520",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-11",
   "ranked": true,
   "subject": "Renewal price differs from discounted price on dashboard",
   "s": [
    3,
    4,
    4,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered all six numbered questions point by point, including the $1,999 renewal amount.",
    "Follow up owned the confusing dashboard and attached the original invoice as proof."
   ],
   "fix": [
    "First reply blamed a system delay, then the second explained the $1,499.25 was this year's paid price; give the correct explanation the first time."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes on the ticket for either update."
   }
  },
  {
   "id": "50970471453",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Paid invoicing add-on missing, refund and invoice export",
   "s": [
    5,
    5,
    5,
    4,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Admitted the add-on should not have renewed, refunded the $50 and removed it from future renewals.",
    "Clear final answer on invoice export, explaining it now lives only in doola Books."
   ],
   "fix": [
    "Holding replies said he would come back without a committed date."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only one Slack link note for three updates, with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "51158095393",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "W-9 vs W-8BEN-E for foreign-owned LLC and Form 8832 election",
   "s": [
    3,
    4,
    4,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Set clear expectations that the consultation is live only and advised putting key questions in the booking questionnaire.",
    "Confirmed the tax consultation is included in the plan and quoted the $149 fee for filing Form 8832."
   ],
   "fix": [
    "Five detailed questions were all routed to a consultation; answer the factual ones, such as annual filing fees after an 8832 election, in writing."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes on the ticket for either update."
   }
  },
  {
   "id": "50951798689",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-14",
   "ranked": true,
   "subject": "Worried about overdue 1099 filing task on dashboard",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Corrected the earlier AI replies with a precise answer: payments to corporations like LinkedIn, Meta and doola need no 1099.",
    "Told Jorge exactly what to do next: mark the task complete, nothing is late."
   ],
   "fix": [
    "Acknowledge the frustration about paying for support directly rather than a mid sentence greeting."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes on the ticket for the agent's update."
   }
  },
  {
   "id": "50474810410",
   "agent": "Dennis Piffen",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Update shareholder, officers and responsible party",
   "s": [
    2,
    3,
    3,
    2,
    2
   ],
   "category": "Policy & Process",
   "keep": [
    "Asked for Form 8822-B before changing the responsible party, which protects record accuracy."
   ],
   "fix": [
    "The same reply, including the e-meet greeting, was sent three times while Dmytro wrote back \"Still no answer\".",
    "The question on whether Delaware or the IRS must be told was never answered.",
    "Ticket closed with the latest resend of the request unanswered in the thread."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Early updates have no notes; later notes are screenshots without Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50604844093",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-03",
   "ranked": true,
   "subject": "Refund auto renewal and move to Starter plan",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Cancelled the Tax and Compliance plan and issued a full refund in a single reply, with a clear 5 to 10 business day timeline."
   ],
   "fix": [
    "Olga asked to keep the registered agent and business address on Starter; the reply never confirmed both are included.",
    "Document access was answered as just \"dashboard access\" without confirming her formation documents, EIN letter and past filings stay available.",
    "The reply with the refund and plan details went only to the CC address rather than the person who wrote in."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged for the refund and plan change."
   }
  },
  {
   "id": "50718625897",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Cancel subscription before December renewal",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Confirmed the exact cancellation date of December 29 and that no further charge will be made, answering the core worry directly.",
    "Preempted confusion by flagging that renewal reminder emails may still arrive and can be ignored, plus the compliance duties after cancelling."
   ],
   "fix": [
    "Add a short acknowledgement that the business has been inactive since mid 2025 so the reply feels less like a template."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged for the cancellation."
   }
  },
  {
   "id": "50615158947",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "2026 tax filing requirements and 2027 compliance costs",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "First reply answered all seven numbered questions with due dates (April 15, 2027 federal, July 1, 2027 Wyoming) and itemised fees.",
    "Clearly separated federal tax filing from the state annual report, which set up the rest of the thread well."
   ],
   "fix": [
    "Final reply skipped two direct questions: whether the renewed plan covers the 2027 return and whether the $1,999 price is guaranteed.",
    "The discount request got only \"check Services > My plan for promotions\" instead of a clear yes or no.",
    "The ticket was closed after that final reply while the 2027 coverage and renewal price questions were still open; resolve them before closing."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for any of the five replies."
   }
  },
  {
   "id": "50799265313",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Request to delay renewal payment until January",
   "s": [
    3,
    4,
    3,
    5,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Gave a concrete next charge date of November 7 and an invoice link when asked for the deadline."
   ],
   "fix": [
    "When the customer asked \"What do you suggest?\" the reply repeated the policy instead of offering options such as a cheaper plan or what happens to the company if services lapse.",
    "Replies read as firm refusals; acknowledge the cash flow situation before restating the policy."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for any of the three replies."
   }
  },
  {
   "id": "50968763148",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Downgrade to Starter at April renewal",
   "s": [
    3,
    4,
    4,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Scheduled the downgrade for April 16, 2027 and confirmed the $297 Starter renewal in one clear reply."
   ],
   "fix": [
    "Syb asked directly whether the FY2026 federal return and 2027 Wyoming annual report are still handled under the current plan; \"continue using all services\" does not confirm either filing.",
    "Spell out that no Business-in-a-Box renewal will be charged, since that was question one."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has an admin link and \"downgrade scheduled\" but no summary of the request or next step with an owner."
   }
  },
  {
   "id": "51031413120",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Confused by payment request after formation",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Turned a one line confused message into a full picture: formation done on October 7, the invoice is for Pulse at $300 after the trial, and EIN status with timeline.",
    "Gave clear if/then options to keep or cancel Pulse and pointed to where the documents live in the dashboard."
   ],
   "fix": [
    "Open with a short acknowledgement of the frustration about being asked to pay again before explaining the invoice."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged for the reply."
   }
  },
  {
   "id": "51058614141",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-11",
   "ranked": true,
   "subject": "Add existing LLC and get an EIN",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave a short, clear next step to start onboarding from the dashboard."
   ],
   "fix": [
    "The request was to create an EIN for the LLC; the reply never mentioned the EIN, the service or its cost.",
    "The reply went to a different email address than the one the customer gave as their best contact.",
    "Close with the open EIN question addressed rather than leaving the customer to write back."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged for the reply."
   }
  },
  {
   "id": "51024335737",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-11",
   "ranked": true,
   "subject": "Cancel Starter and Pulse subscriptions",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Explained exactly what ends with cancellation (registered agent, mail scanning, reminders) and asked for confirmation before acting.",
    "Cancelled both subscriptions as soon as Shaylinn confirmed and restated the ongoing compliance duties."
   ],
   "fix": [
    "Confirm whether any refund applies or that no further charge is pending, since cancellation was effective immediately."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only the first update has a note; the completed cancellation has none."
   }
  },
  {
   "id": "50961419884",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Membership change and updated ownership records",
   "s": [
    5,
    4,
    5,
    5,
    5
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Answered all six numbered asks in one reply: no 8822-B needed, no Wyoming amendment, BOI exempt, Operating Agreement path, legal referral and tax consult.",
    "Followed through with sample Article IV language and updated the members on the dashboard once documents arrived."
   ],
   "fix": [
    "The first reply is long; short headings per topic would make the action items easier to spot.",
    "The clause email told Yash to file any ownership update the state requires, which blurs the earlier clear answer that Wyoming needs no amendment; keep the advice consistent across replies."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only the first reply has a note; the clause, document review and member update have none."
   }
  },
  {
   "id": "51165509412",
   "agent": "Doris R",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Cancel Starter before November 20 renewal",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Gave the written confirmation Alec asked for: set to cancel on November 20 with no further charges.",
    "Preempted follow ups by flagging automated reminder emails and that cancelling does not dissolve the company."
   ],
   "fix": [
    "Add a brief acknowledgement that Alec no longer uses the service so the confirmation feels less like a template."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note says \"SP canceled upon request\" with no summary of the ask or next step with an owner."
   }
  },
  {
   "id": "50485482832",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-06",
   "ranked": true,
   "subject": "Reopen LLC ownership transfer and get US bank account help",
   "s": [
    4,
    5,
    5,
    4,
    4
   ],
   "category": "Policy & Process",
   "keep": [
    "Answered every one of the five questions in a labelled list (documents, who manages it, fees, EIN, responsible party) after explaining the Operating Agreement route.",
    "Owned the reopened case and offered to be the single contact, which directly addressed the client's frustration about the earlier closure."
   ],
   "fix": [
    "Ticket was closed two days later while still waiting on the signed Operating Agreement and the promised banking help, so the case the client asked to keep open was closed again.",
    "Banking guidance was deferred entirely; share at least the likely bank options for a Chilean owner now so the client can prepare."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50952543521",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Confirm failed renewal payment was received",
   "s": [
    5,
    4,
    5,
    5,
    5
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Confirmed the payment was received for the yearly Business Plan and that services were active again, with nothing else needed from the client."
   ],
   "fix": [
    "Trim the generic closing paragraph; it adds length to what should be a two line confirmation."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50959045007",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Dissolve Wyoming LLC before year end with final tax filing",
   "s": [
    3,
    3,
    4,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Second reply clearly answered both follow up questions, with a practical order for the final payment, distribution, account closure and downloading statements."
   ],
   "fix": [
    "First reply was a generic dissolution macro: it mentioned a full 2025 return for a company formed in March 2026, did not answer whether the final Form 5472 and pro forma 1120 are included, and gave no total including the $60 state fee.",
    "The client's December 31 goal was not addressed directly; state whether submitting now meets it given the 15 to 20 business day timeline.",
    "\"For more details, click here\" was sent with no working link; add the real link or remove the line before sending."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50613130399",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "EIN application delayed past promised timeline, urgent escalation",
   "s": [
    4,
    5,
    5,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Handled an escalating client threatening chargebacks calmly, explained honestly why no guaranteed IRS date could be given, and committed to an update within 48 hours, which was kept when the EIN was issued about 24 hours later.",
    "Talked the client out of cancelling by explaining that a new application would restart the IRS queue."
   ],
   "fix": [
    "The \"approximately 2 weeks\" estimate was given without a source, which the client immediately challenged; share what the IRS specialist actually confirmed instead of a soft estimate.",
    "Several replies opened with a stray backslash before \"Hi\" and reintroduced yourself mid thread; proofread before sending.",
    "When the client asked for proof behind the two week estimate, the reply offered apologies but no next step or update date, and the client escalated to chargeback and legal threats; give a committed update date in every holding reply, as the later 48 hour commitment did."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only one note, a bare Slack link with no Summary, Resolution or Next Step, across five agent updates."
   }
  },
  {
   "id": "50485652135",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Cancel Starter plan before November 8 renewal",
   "s": [
    2,
    3,
    2,
    1,
    1
   ],
   "category": "Effort Reduction",
   "keep": [
    "Acknowledged the client's new registered agent and thanked them for the clear instructions."
   ],
   "fix": [
    "The client gave a clear cancellation instruction and reason and asked for confirmation; the reply asked why they were cancelling and pitched registered agent service they already said they had replaced.",
    "Cancellation was never confirmed before the November 8 renewal date, and the ticket was closed on November 10 with the request still open, risking an unwanted charge.",
    "When a client states the reason and confirms, process the cancellation, confirm no renewal will occur, and close only after that confirmation is sent."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50659614102",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Explain what the $297 renewal charge covers",
   "s": [
    5,
    5,
    5,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Gave the itemised breakdown the client asked for and clearly separated doola's $297 from the Wyoming annual report fee they had already paid.",
    "Laid out keep or cancel options with the consequence of each, including the need for a new registered agent."
   ],
   "fix": [
    "Add a direct link to update the card in the dashboard so the client can act in one click."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50476425359",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Dissolve two Wyoming LLCs before the December 1 report date",
   "s": [
    2,
    2,
    3,
    2,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Flagged that each LLC is filed and invoiced separately, which the client needed to know for two companies."
   ],
   "fix": [
    "Four direct questions went unanswered: whether filings can be in before December 1, whether an EIN was obtained for either company, whether any 2025 Form 5472 was filed, and confirmation of no renewals.",
    "The reply was a pasted macro with a VIP plan caveat and \"click here\" with no link; tailor it to the two companies and their deadline.",
    "Ticket was closed without the client's open questions resolved, and the request not to renew the registered agent or annual filing plan was never confirmed."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "51040199785",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "California bizfile access and Statement of Information copy",
   "s": [
    5,
    5,
    5,
    5,
    5
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered all three requests in one reply: step by step bizfile access instructions, the filing date of the initial Statement of Information, and all requested documents attached.",
    "Followed through by approving the access request and giving a fallback if it did not appear, which the client praised as thorough."
   ],
   "fix": [],
   "notes": {
    "status": "Missing",
    "issue": "Only one note, a bare Slack link with no Summary, Resolution or Next Step, across two agent updates."
   }
  },
  {
   "id": "51159267508",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Client switching registered agent instead of dissolving",
   "s": [
    4,
    4,
    4,
    5,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Acknowledged the decision clearly and told the client to reply once the state approves the change."
   ],
   "fix": [
    "\"We'll take care of the next steps on our end\" is vague; say what happens next, for example that the doola subscription and registered agent service will be cancelled so there is no renewal.",
    "Reply opened with a stray backslash before \"Hi\"; proofread before sending."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "51208963740",
   "agent": "Harman Singh",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Dedicated business address after Mercury bank denial",
   "s": [
    4,
    5,
    4,
    5,
    5
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered all five numbered questions under clear headings, with the $149 plus $50 state fee, a step by step process and timelines for the state and IRS updates.",
    "Gave practical tips to strengthen the next Mercury application and set expectations that approval is the bank's decision."
   ],
   "fix": [
    "Confirm internally that the Form 8822-B update is really included at no extra cost before promising it in writing.",
    "Address the two named members, Sigui and Franck, by name rather than \"Team TeKoTeK\"."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No HubSpot notes logged on the ticket."
   }
  },
  {
   "id": "50474662995",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Tax and Compliance upgrade questions before discount deadline",
   "s": [
    3,
    4,
    4,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered all 11 questions under clear headings and confirmed the $1,599.20 first year price, $1,999 renewal and the November 4 offer deadline.",
    "Raised the follow up questions with the Tax team and returned with answers before the customer's November 4 deadline."
   ],
   "fix": [
    "First reply said the Delaware conversion was covered, then the Tax team confirmed a second return in the conversion year costs extra; confirm coverage before saying yes.",
    "Questions on the CPA or EA signer and the Starter credit were deflected in the first reply, which created the second round of questions.",
    "The holding reply promised an answer 'first thing next week' but it came Tuesday evening; keep the return date you commit to, or update the customer before it passes."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "None of the three notes has a Next Step with an owner, and the holding update note is only a Slack link."
   }
  },
  {
   "id": "50702147760",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Non customer needs Letter 147C and US bank account options",
   "s": [
    3,
    4,
    4,
    4,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave two practical routes to the EIN letter (check Stripe Atlas, call the IRS international line using a US online fax number).",
    "Shared Slash, Mercury and Payoneer links and listed the documents banks usually ask for."
   ],
   "fix": [
    "The vendor check question (preparer credentials and doola's legal entity) was dismissed as 'your 3rd concern' instead of being answered or explained.",
    "The customer asked about Relay by name; say whether it is an option for a non resident owner instead of leaving it out."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Concern and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "50953039925",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Backup US bank options while Mercury reviews account",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Answered all five questions in order with clear headings, recommended Slash first with Wise as backup and explained why Relay is a poor fit.",
    "Preempted the next issue: payout account must match the LLC's exact legal name in Stripe, plus application tips and the eligibility page link."
   ],
   "fix": [
    "Opened without introducing yourself; add a line acknowledging Julien's worry about Stripe payouts stopping before moving into the options."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Concern and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "50364435740",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Authorize partner, renewal terms, then cancel before renewal",
   "s": [
    3,
    4,
    3,
    4,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Logged the owner's written authorization for the operations partner before sharing account details.",
    "Answered all five renewal questions point by point, including that no filings were in progress."
   ],
   "fix": [
    "Cancellation confirmation gave the end date as 10/10/2026, a date already in the past, when the renewal was November 10.",
    "Cancellation reply was addressed to Priyesh although the request came from the Lucia team inbox.",
    "The cancellation deadline answer only said 'before the renewal date'; give the exact last day and how to cancel, since the team later could not find a cancel button in the dashboard."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "First two notes have no Next Step and the third says 'Next step: na' with no owner."
   }
  },
  {
   "id": "51045507114",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "IRS balance notice due November 23, books correction status",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Identified the existing bookkeeping conversation so the customer was not asked to repeat context."
   ],
   "fix": [
    "None of the questions (corrections done, effect on the 2025 return, pay or amend) were answered; the customer was told to reply on another thread.",
    "With a $4,490.48 IRS balance due November 23, acknowledge the deadline and confirm someone will respond by a set date instead of leaving the customer to chase."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Only note is a related ticket link with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50875644773",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Reactivate LLC subscription and transfer 85% ownership",
   "s": [
    3,
    3,
    4,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Asked the outgoing owner to confirm authorization before transferring account access.",
    "Explained the Operating Agreement update and offered Form 8822-B filing at $149 with the 60 business day IRS estimate."
   ],
   "fix": [
    "First reply misread the request as 100% ownership by the member LLC, and the second still wrote 'Sword LLC' after the customer flagged the name as SWORLD LLC.",
    "Reactivation cost and the outstanding Delaware franchise tax were not answered; a pricing page link was given instead of the price for this case.",
    "Guide links for single and multi member Operating Agreements appear as plain labels, so the customer cannot open them."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes on the ticket for either of the agent's two updates."
   }
  },
  {
   "id": "50871629702",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Form 5472 pricing and Tax and Compliance coverage questions",
   "s": [
    4,
    5,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered every question under its own heading, including the $1,500 IRS filing option versus the $1,999 plan, and gave the $150 CPA consultation with booking steps.",
    "Told the customer to keep receipts and convert baht to dollars, preempting what the tax team will need."
   ],
   "fix": [
    "Second reply answered three questions with a bare 'Yes!' each; add what the prorated credit looks like and where to see it before upgrading.",
    "Explained capital contribution treatment while declining the business code question as tax advice; keep the boundary consistent."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Both notes have Concern and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "51152271016",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Physical business address needed for Chase account",
   "s": [
    4,
    2,
    3,
    4,
    3
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Clearly explained why the registered agent address will not meet Chase's physical address requirement.",
    "Flagged Chase's in person and SSN or ITIN requirements and offered online banking partners as an alternative."
   ],
   "fix": [
    "Reply contains a broken pasted fragment ('confirming with ChaHi Take,') mid sentence; proofread before sending.",
    "Opened with 'Hi,' and no name, and listed eight plan items then said 'Neither of these', which reads as a macro.",
    "Recommended Virtual Post Mail TruLease without a link or price, so the customer has to search for it."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Concern and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "50423800072",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-14",
   "ranked": true,
   "subject": "ITIN passport scan receipt and documents for signature",
   "s": [
    3,
    4,
    3,
    3,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Kept the 'first thing tomorrow' promise and came back the next day with confirmation that the ITIN team would proceed.",
    "Confirmed the partnership tax classification from the filed SS-4 when asked."
   ],
   "fix": [
    "Told the customer the Filing team had the updated passport, then three days later asked them to resend it; the customer had already attached it twice.",
    "Closed the ticket by redirecting the customer to another person's email without confirming receipt or a date for the signature documents.",
    "The customer had chased the signature documents several times before you joined; acknowledge that and apologize before asking for anything again."
   ],
   "notes": {
    "status": "Missing",
    "issue": "The two November 9 updates have no notes; later notes are a Slack link and a note with 'Next step: na'."
   }
  },
  {
   "id": "51215851525",
   "agent": "Maricar Joyce Deocampo",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Quote for final partnership return after foreign partner exit",
   "s": [
    3,
    2,
    4,
    4,
    3
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Summarized the customer's multi step plan accurately and listed the documents to prepare for the consultation."
   ],
   "fix": [
    "Sent with an unfilled template placeholder in brackets for the non customer booking steps, so the customer has no way to book.",
    "Fee and filing scope questions were not answered; give at least the known service prices for Form 1065, 8822-B and the Massachusetts registration."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note is a one line Concern and Resolution with no Next Step or owner."
   }
  },
  {
   "id": "50416178532",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-02",
   "ranked": true,
   "subject": "Cancel all renewals and close an inactive LLC",
   "s": [
    3,
    4,
    4,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "First reply offered a clear choice between dissolution help and cancelling the subscription only."
   ],
   "fix": [
    "Arwa asked to confirm no future charges and what steps she needed to take; the first reply answered neither and only asked which option she wanted.",
    "Her follow up asking for the dissolution fee and state fees got a redirect to another ticket instead of the figures.",
    "When moving a customer to another ticket, restate the answer or the key next step so she does not have to go hunting."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only one note for two updates, and it just links the other ticket with no Summary, Resolution or Next Step."
   }
  },
  {
   "id": "50318330490",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-03",
   "ranked": true,
   "subject": "Clarify what the Starter renewal covers and annual report costs",
   "s": [
    3,
    4,
    4,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Cleanly corrected the earlier mixed message by confirming the annual report filing is an extra cost on top of the Starter plan.",
    "Gave the written confirmation the customer wanted that nothing beyond the Starter plan would be charged without opting in."
   ],
   "fix": [
    "Question 3 asked whether the $297 renewal includes next year's Registered Agent and any state fees at renewal; it was not answered.",
    "Pointing to Dashboard then Services for the filing cost left the customer to look up a figure ($199 plus the $62 state fee) already quoted in the thread.",
    "Confirm the customer can self file the Wyoming report without affecting the Registered Agent service, since he asked directly."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for either of the agent's updates."
   }
  },
  {
   "id": "50399491768",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-03",
   "ranked": true,
   "subject": "Confirm Delaware annual report was filed after payment",
   "s": [
    4,
    5,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Gave a clear yes that the report was filed and pointed to exactly where to find it (dashboard, Documents)."
   ],
   "fix": [
    "State plainly that nothing else is needed from their side, since that was their second question."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note only says Ops query with a Slack link; no Summary, Resolution or Next Step with owner."
   }
  },
  {
   "id": "50412536323",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Are 1099-NEC filings included in the plan, and the cost",
   "s": [
    5,
    5,
    4,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Answered all three questions in a numbered list: not included, $30 per form ($60 for two), and the January 31, 2027 deadline.",
    "Told the customer to collect the W-9s herself and when to send details to the tax team."
   ],
   "fix": [
    "Add how to actually order the 1099 service (dashboard path or link) so the customer is not left to ask again in January."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged for the agent's reply."
   }
  },
  {
   "id": "50940944444",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Add the $99 Registered Agent service",
   "s": [
    5,
    5,
    4,
    5,
    5
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Sent the payment link with the 24 hour expiry noted and explained what happens once paid.",
    "Confirmed activation for the right company and gave the renewal date of November 9, 2027 without being asked."
   ],
   "fix": [
    "Trim the closing to one short sign off; three stacked offers to reach out make a warm reply read like a template."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for either of the agent's updates."
   }
  },
  {
   "id": "50955667048",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Next steps after signing sales tax document, federal filing",
   "s": [
    4,
    4,
    3,
    5,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Gave a direct answer that doola files the federal return under the Tax and Compliance plan, with the dashboard path to start it."
   ],
   "fix": [
    "The Kintsugi reply was a pasted macro with a bare HERE link; for a self described first timer, add one line on what to do first.",
    "Acknowledge that he is new to this before the product list so the reply does not read as a canned block."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for either of the agent's updates."
   }
  },
  {
   "id": "50485912139",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-12",
   "ranked": true,
   "subject": "Downgrade from Business in a Box to Tax and Compliance",
   "s": [
    2,
    4,
    3,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Mentioned the bookkeeping value of Business in a Box before actioning the downgrade, a fair save attempt."
   ],
   "fix": [
    "Christian said that if no refund applied he wanted to downgrade at the next billing cycle; the reply told him to keep the plan and change his mind later, ignoring that instruction.",
    "Confirm the downgrade is scheduled for renewal and give the renewal date, then close."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for either of the agent's updates."
   }
  },
  {
   "id": "51157492495",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "LLC formation steps for a customer who already has an ITIN",
   "s": [
    5,
    5,
    5,
    5,
    4
   ],
   "category": "Effort Reduction",
   "keep": [
    "Confirmed nothing more was needed because the ITIN was already on file.",
    "Laid out the two next steps (state filing, then online EIN with the ITIN) in plain language."
   ],
   "fix": [
    "Give rough timelines for state approval and the EIN instead of only pointing to the dashboard."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No note logged for the agent's reply."
   }
  },
  {
   "id": "50614360428",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "ITIN service details, eligibility and booking a tax consult",
   "s": [
    3,
    4,
    4,
    5,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "First reply covered the fee, documents and the 16 to 24 week processing time in one message.",
    "Honestly flagged that filing Form 5472 alone does not mean a 1040-NR is needed and suggested a consult before paying $499."
   ],
   "fix": [
    "The last message asked for available slots in a UAE friendly window and whether to buy first or wait for a link; the reply repeated the consult macro and answered neither directly.",
    "The customer asked if any other supporting documents were needed; the reply restated the same list instead of a clear yes or no.",
    "Drop the ITIN renewal section for a first time applicant to keep the reply focused."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for any of the agent's four updates."
   }
  },
  {
   "id": "51213027203",
   "agent": "Minakshi Banik",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Submit three alternate business names for filing",
   "s": [
    4,
    5,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Read back all three names in priority order and explained how the state works through them, so no further input was needed."
   ],
   "fix": [
    "Add an expected timeframe for the state decision and when documents will appear on the dashboard."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged for any of the agent's updates."
   }
  },
  {
   "id": "50472817975",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-02",
   "ranked": true,
   "subject": "Needs a US phone number for Mercury, tired of bank reminders",
   "s": [
    4,
    4,
    3,
    5,
    4
   ],
   "category": "Empathy & Tone",
   "keep": [
    "Recommended Quo with the doola discount and explained how VoIP works for a non-US founder.",
    "Follow-up gave a concrete EIN timeline: submitted October 28, 6 to 8 weeks, letter uploaded to the dashboard."
   ],
   "fix": [
    "Customer asked to stop the reminders every second day; the reply never acknowledged or addressed that frustration.",
    "Use one name consistently; the first reply said Rale and the second Radoljub."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Both notes have Concern and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "50485651791",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-03",
   "ranked": true,
   "subject": "Hardship: asks one week extension or payment plan on renewal",
   "s": [
    2,
    3,
    2,
    3,
    2
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Sent a working payment link for the renewal so the customer could pay as soon as funds allowed."
   ],
   "fix": [
    "Customer asked for a one week extension, protection from dissolution meanwhile, and a payment plan; none of the three was answered.",
    "Customer described financial hardship; the reply only urged paying as soon as possible with no acknowledgement.",
    "Explain what happens to the registered agent and standing if payment lands next week, so the customer is not left guessing."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Concern and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "50299906659",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-04",
   "ranked": true,
   "subject": "Asks for a bigger discount on expedited EIN",
   "s": [
    3,
    4,
    3,
    3,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Offered a goodwill 10% discount up front and listed EIN timelines with and without an SSN.",
    "Once the customer accepted, sent the invoice and payment link and confirmed payment receipt with clear next steps from the filing team."
   ],
   "fix": [
    "Holding reply said he would check with the team but gave no return date and no proactive update followed, so the customer had to chase twice.",
    "Customer asked whether the REVIEWSGUIDE10 code could be applied to the Starter purchase; that question was never answered.",
    "When a holding reply is sent, commit to a specific update date and keep it."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Only one summary note plus a Slack link for five agent updates."
   }
  },
  {
   "id": "50088740180",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-05",
   "ranked": true,
   "subject": "Forward a held Mercury check to Argentina",
   "s": [
    4,
    4,
    4,
    4,
    3
   ],
   "category": "Effort Reduction",
   "keep": [
    "Gave a clear forwarding quote of $332.81 and explained the 50 day claim window.",
    "Sent the invoice and payment link right after approval and confirmed payment receipt."
   ],
   "fix": [
    "Customer had already given the address; the template then asked again for name, company, email and full address fields.",
    "The name format check came only after payment; checking the name against the dashboard when the details arrived would have avoided an extra round trip.",
    "Ticket closed before the tracking ID was shared, leaving the customer to chase it."
   ],
   "notes": {
    "status": "Missing",
    "issue": "One note covers six agent updates."
   }
  },
  {
   "id": "50935818412",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-09",
   "ranked": true,
   "subject": "Charged twice for Starter Plan renewal, wants refund",
   "s": [
    5,
    3,
    4,
    5,
    4
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Refunded the duplicate $297, gave a 5 to 10 business day window, and confirmed the plan renews November 7, 2027 without a double charge."
   ],
   "fix": [
    "The refund sentence is repeated twice word for word; proofread before sending.",
    "Say which of the two charges was refunded so the customer can match it on their card statement."
   ],
   "notes": {
    "status": "Incomplete",
    "issue": "Note has Concern and Resolution but no Next Step with an owner."
   }
  },
  {
   "id": "50493605266",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-10",
   "ranked": true,
   "subject": "Urgent SS-4 vs EIN name check and company documents for bank",
   "s": [
    3,
    4,
    3,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Attached the formation documents and pointed to the dashboard documents section.",
    "Quoted the Certificate of Good Standing at $125 with a 4 to 5 day state timeline."
   ],
   "fix": [
    "Stated the SS-4 and EIN names cannot differ instead of actually comparing them, after sales had flagged a possible mismatch.",
    "Customer flagged the request as urgent with a Mercury application pending; the reply did not acknowledge that urgency.",
    "Quote the Wyoming filing ID and formation date directly since the customer asked for them."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket."
   }
  },
  {
   "id": "50829838187",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-11",
   "ranked": true,
   "subject": "Transfer 100% ownership of Wyoming LLC to new owner",
   "s": [
    3,
    2,
    3,
    3,
    3
   ],
   "category": "Clarity & Structure",
   "keep": [
    "Correctly explained Wyoming does not record members, so only the Operating Agreement changes, and offered the $149 IRS responsible party update."
   ],
   "fix": [
    "Numbering 1 to 8 does not match the customer's sections and repeats points; typos such as teh, ti and ot hurt credibility.",
    "The guides line appears without working links, leaving a placeholder feel.",
    "Did not answer which IDs and signatures are needed, the processing timeline, or cross-border compliance questions."
   ],
   "notes": {
    "status": "Missing",
    "issue": "No notes logged on the ticket."
   }
  },
  {
   "id": "50937228144",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Urgent cancellation and stop today's payment, keep LLC",
   "s": [
    3,
    4,
    3,
    3,
    3
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Cancellation confirmation clearly listed the customer's ongoing compliance duties: registered agent, annual reports and IRS filings."
   ],
   "fix": [
    "Customer asked to stop that day's payment; neither reply said whether it was blocked or would be refunded.",
    "When a customer asks to stop a same-day payment, confirm the charge is paused first, then make the save attempt.",
    "Final reply should confirm the LLC itself stays active, which was the customer's explicit concern."
   ],
   "notes": {
    "status": "Missing",
    "issue": "One note for two agent updates, and it has no Next Step."
   }
  },
  {
   "id": "50975915888",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-13",
   "ranked": true,
   "subject": "Reactivating Starter plan: agent continuity, mail, price match",
   "s": [
    4,
    4,
    4,
    5,
    4
   ],
   "category": "Accuracy & Completeness",
   "keep": [
    "Answered registered agent continuity, mail status and full Starter inclusions in one structured reply.",
    "Handled the price match ask with a $50 goodwill discount and sent a discounted payment link."
   ],
   "fix": [
    "State contact email question got a vague answer; say plainly whether notices sent to the doola filings address are forwarded.",
    "Customer asked to clear the annual report reminder after filing; that was not acknowledged."
   ],
   "notes": {
    "status": "Missing",
    "issue": "One note for three agent updates, and it has no Next Step."
   }
  },
  {
   "id": "51036814110",
   "agent": "Shubham Bajaj",
   "pipeline": "Customer Care",
   "date": "2026-11-16",
   "ranked": true,
   "subject": "Cannot log in, reset email never arrives, needs taxes filed",
   "s": [
    2,
    4,
    2,
    4,
    2
   ],
   "category": "Effort Reduction",
   "keep": [
    "Escalated to the tech team and relayed each fix update until the customer confirmed she could log in."
   ],
   "fix": [
    "First human reply repeated the reset and spam checks the customer said they had already tried.",
    "Twice told the customer the issue was resolved and asked her to reset again, when the reset email was the very thing failing; confirm the fix with the tech team before asking the customer to retry.",
    "Asked for a screenshot of an error the customer had already described in words."
   ],
   "notes": {
    "status": "Missing",
    "issue": "Three agent updates but only a Slack link and one note, with no Next Step."
   }
  }
 ]
};
