# Copy review queue

Batch list for site copy changes. We collect items here and apply them in one pass
instead of editing the live site piecemeal.

## Applied

### 2026-10-02 (commit 9e45266)
- **Lede lengthened** so the hero reads as a block: "Document security is important. Our systems
  are built with just that in mind, and we run them wherever your rules say they should live."
  The added clause is agent-written and tier-neutral; the owner can reword it. What matters is
  length: 110 to 140 characters fills two lines at the current measure.

### 2026-10-02 (commit 2262825)
- Comparison table, "Best for" row, Cloud cell: "No data rules at all" became "Everyday
  business documents". The Cloud tier is no longer defined by a negative.
- Hero spacing tightened (padding-top 5rem to 3rem, bottom 5rem to 3.5rem) so the headline
  does not float in empty space.
- Lede wrap balanced so no single word sits alone on its own line.

### 2026-10-02 batch pass (commit c2c6bbd)
- **H1:** "AI from the ground up. Built for your business."
- **Lede:** "Document security is important. Our systems are built with just that mind."
  (superseded later the same day by the longer version above)
- **Meta + og descriptions** updated to match the new lede.
- **Cloud card:** owner's text, with "without" in <strong>.
- **Dedicated card:** owner's text, "any model" intentional.
- **In-Office card:** owner's text, ends "There are no monthly fees."

### Earlier
- 2026-10-02: "Which one fits" trade-off line rewritten to drop a rule-of-three list.

## Open

### About page rewrite (known, not started)
Current main paragraph: "At Office Inference we build private AI systems for small
businesses, and we do the whole job: the hardware, the software, the install, the
training."
Issue: "private AI systems" carries the same in-office bias we removed from the homepage.
Owner has this on the list already.

### LinkedIn profile copy (not site copy)
The About text was rewritten tier-neutral (see chat 2026-10-02). Tagline still two-tier:
"Private AI for your business documents. In your building when privacy demands it, in the
cloud when it doesn't." Suggested: "AI for your business documents, run your way: your
office, your cloud account, or a frontier model."

### Lower priority
- Cloud card contains a three-item list ("chat, search, and automation"), left as
  owner-written.
- Cloud and Dedicated both mention pay-as-you-go; check later whether the distinction
  (per-question vs cloud usage) needs spelling out.
- Possible future line: self-hosting a model on rented cloud GPUs is not economical, which
  is part of why the In-Office tier exists on owned hardware.
