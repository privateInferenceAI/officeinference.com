# Copy review queue

Batch list for site copy changes. We collect items here and apply them in one pass
instead of editing the live site piecemeal.

## Applied

### 2026-10-02 batch pass (commit c2c6bbd)
- **H1:** "AI from the ground up. Built for your business."
- **Lede:** "Document security is important. Our systems are built with just that mind."
- **Meta + og descriptions** updated to match the new lede.
- **Cloud card:** "Everything you are used to, chat, search, and automation. This model
  lives in the cloud and you can choose any current model or models. You pay as you go,
  the way most people are used to. For businesses <strong>without</strong> strict data
  rules." (the word "without" carries a semantic strong tag)
- **Dedicated card:** "The same system, deployed into a cloud account you own. Your
  documents stay inside your own tenancy, under the compliance agreements your cloud
  provider offers. Regulated work is legally satisfied but your documents still reside on
  the cloud. This is also a pay as you go arrangement with any model."
- **In-Office card:** "The same system except everything runs on hardware you own. You can
  build compliance unique to your situation. Built for businesses where a leaked document
  isn't an embarrassment, it's just not an option. You own this outright. There are no
  monthly fees."

### Earlier
- 2026-10-02: "Which one fits" trade-off line rewritten to drop a rule-of-three list.

## Open

### Comparison table, "Best for" row, Cloud cell
Current: "No data rules at all"
Problem: reads as "for people who don't care".
Option: "Everyday business documents"
Status: PENDING

### Lower priority, owner may ignore
- The Cloud card contains a three-item list ("chat, search, and automation"), left as
  owner-written.
- Cloud and Dedicated both describe pay-as-you-go pricing. Accurate; check later whether
  the reader needs the distinction (per-question vs cloud usage).
- Possible future line: self-hosting a model on rented cloud GPUs is not economical, which
  is part of why the In-Office tier exists on owned hardware.
