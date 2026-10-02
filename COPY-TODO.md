# Copy review queue

Batch list for site copy changes. We collect items here and apply them in one pass
instead of editing the live site piecemeal. Nothing here is live until we do that pass.

## Ready to apply

### 1. Hero headline (H1)
Current: "AI that answers questions about your business, from your own files."
Replace with: "AI from the ground up. Built for your business."
Status: DECIDED

### 2. Hero lede
Current: "Some businesses need everything to stay in the building. Some don't care.
We build the same system all three ways."
Replace with: "Document security is important. Our systems are built with just that mind."
Note: owner wrote "Are systems", corrected to "Our systems".
Status: DECIDED

### 3. Cloud card body
Current: "You get the same chat, the same document search, the same automation. The only
difference: the model doing the thinking is a commercial one from a frontier provider.
For businesses without strict data rules."
Replace with: "Everything you are used to, chat, search, and automation. This model lives
in the cloud and you can choose any current model or models. You pay as you go, the way
most people are used to. For businesses without strict data rules."
Emphasis: wrap "without" in <strong>.
Status: DECIDED (sentence order switched so the "without" emphasis lands last)

### 4. Dedicated card body
Current: "The same system, deployed into a cloud account you own. Your documents stay
inside your own tenancy, under the compliance agreements your cloud provider offers,
encrypted at rest. Regulated work gets its paperwork satisfied without a server in the
building."
Replace with: "The same system, deployed into a cloud account you own. Your documents
stay inside your own tenancy, under the compliance agreements your cloud provider offers.
Regulated work is legally satisfied but your documents still reside on the cloud. This is
also a pay as you go arrangement with any model."
Status: DECIDED

## Open

### 5. Comparison table, "Best for" row, Cloud cell
Current: "No data rules at all"
Problem: reads as "for people who don't care".
Option: "Everyday business documents"
Status: PENDING

## Applied already

- 2026-10-02: In-Office card stopped listing its own drawbacks. It ends with "You own it
  outright. Nothing is billed per question, and it keeps working when your internet
  doesn't." Trade-offs appear only in the "Which one fits" section now.
- 2026-10-02: "Which one fits" trade-off line rewritten to drop a rule-of-three list.

## Flags for the apply pass

- "Any model" in the Dedicated card may overpromise for the self-hosted option: what fits
  depends on the GPUs in that account. Frontier models are available there through
  Bedrock, which is likely what the line means.
- Cloud and Dedicated both describe pay-as-you-go pricing, which is accurate. Worth a look
  at whether the reader needs the difference spelled out (per-question vs cloud usage).
- The Cloud card still contains a three-item list ("chat, search, and automation"), kept
  as owner-written.
