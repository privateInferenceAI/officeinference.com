# Copy review queue

Batch list for site copy changes. We collect items here and apply them in one pass
instead of editing the live site piecemeal.

## Applied

### 2026-10-04 (commit b0dd455)
- Dedicated Cloud card body rewritten by owner: dropped the "inside your own tenancy" clause,
  so the compliance agreements carry the claim. Verbatim except for nothing; applied as
  written. Optional alternative noted: "stay covered by the compliance agreements".

### 2026-10-04 (commit eb4dd0d)
- **Tier model corrected by owner:** both cloud tiers run in a cloud account the client owns.
  The difference is that Dedicated Cloud runs on specific cloud services that satisfy
  regulated and compliance rules. This invalidated three table rows written under the old
  assumption (documents live / who can reach them / compliance paperwork) and they were
  rewritten.
- Tags: Cloud now "Your own cloud account." Dedicated Cloud now "Compliance-grade services."
  (chosen to keep the tiers distinguishable; owner may prefer them identical).
- RESOLVED 2026-10-04: owner confirmed the Dedicated Cloud card body is correct. The clause
  that carries the legal weight is "under the compliance agreements your cloud provider
  offers". Note for the record: "tenancy" is cloud architecture vocabulary, not a legal
  term of art, and every cloud account is already its own isolated tenancy. If Dedicated
  Cloud ever uses single-tenant hardware (AWS Dedicated Hosts or Instances), that is a
  stronger claim worth stating explicitly.

### 2026-10-04 (commit 4c14f62)
- **Card headers now align by structure, not by reserved space.** Every card title is
  deliberately two lines ("Office Inference" / tier name), every tag is one line, so the
  bodies line up with no artificial gap under the titles. Both min-height reservations were
  removed.
- The Dedicated Cloud tag was shortened from "Your cloud account, under your contracts." to
  "Your own cloud account." so it fits one line. Owner may want different words.
- Stylesheet version bumped to ?v=3 (see the caching note above).
- LinkedIn tagline stored in brand/LINKEDIN.md from the owner's live version.

### 2026-10-04 (commit 23f072c)
- Stylesheet link is now versioned (`styles.css?v=2`) on all four pages. Reason: the HTML
  was cache-busted by hand but the CSS URL never changed, so browsers and the CDN kept
  serving stale CSS for up to 10 minutes after a stylesheet edit. Bump the `?v=` number
  whenever styles.css changes.
- Verified alignment at 900px, 1000px, 1100px, 1200px and 1400px. Below roughly 1000px the
  cards reflow to two columns, and bodies still align within each row.

### 2026-10-04 (commit 6b794be)
- Card titles now reserve two lines of height as well as tags, so all three card bodies and
  all three tags align in clean horizontal bands. Cards are taller as a result.
- Owner fixed the LinkedIn tagline himself; that item is closed.

### 2026-10-04 (commit e0cdacd)
- Card tags now reserve two lines of height, so all three card bodies start at the same
  height even when a card name or tag wraps (the Dedicated Cloud card wraps on both). Cards
  are slightly taller as a result. Revert path: drop min-height from .card .tag.

### 2026-10-04 (commit bbca0c0)
- About page main paragraph: "At Office Inference we build private AI systems for small
  businesses, in the cloud or in your office, and we do the whole job: the hardware, the
  software, the install, the training." (owner chose option A)

### 2026-10-04 (commit c53c29f)
- **About page, "Where we work" rewritten by owner.** Cloud and Dedicated Cloud builds
  come first now, then In-Office installs. The joined "- If you've got" became a period.

### 2026-10-04 (commit 75b6d93)
- **Upgrade path rewritten by owner.** Names AWS as the online provider, and gives two
  reasons clients move to In-Office: data control, or the monthly bill.
- Owner's first sentence arrived as "You can start in any with any service" (garbled); agent
  rendered it "You can start with any service." Confirm wording with owner.
- Optional: heading is still "Start where you are. Move when the rules change." but the body
  now names budget as a trigger too. Candidate: "Move when the rules or the bill change."

### 2026-10-04 (commit c5661d7)
- **"How it works" rewritten by owner.** Cake metaphor kept, "slice" became "layer", and
  each tier is now described the same way: where it lives, what models it runs, and whether
  it satisfies compliance.
  Grammar fixes applied: "lives in on" to "lives on"; "in a online" to "on an online";
  "runs are" to "runs"; "also can satisfies" to "can also satisfy".

### 2026-10-04 (commit a74bf18)
- **"Which one fits" rewritten by owner.** The old opening paragraph (documents with
  rules) is removed. The section is now Cloud, Dedicated Cloud, In-Office, then the
  closing line. Owner's wording, with three small grammar fixes (you want / It's also very
  good / company's technical expertise).
- **"Dedicated" renamed to "Dedicated Cloud" site-wide**: card title, comparison table
  header, aria-label, "How it works," upgrade path, and the About page.
- Open cosmetic note: the Dedicated Cloud card title wraps to two lines, which pushes its
  body text below the other two cards. Options: shorten the card tag to "Your cloud
  account, your contracts." or shorten the title.

### 2026-10-04 (commit f563772)
- Comparison table updated per owner:
  - Row renamed "Where the AI runs" to "Model type": Proprietary models / Proprietary models /
    Open weight / open source.
  - Upfront cost: Cloud setup / Cloud setup / Hardware purchase and setup.
  - Ongoing cost: Cloud usage, per token (both cloud tiers) / Power and maintenance.
  - Largest model available: Frontier, always current / Frontier, same as Cloud / Whatever
    your hardware will hold. (Open weight dropped here because "Model type" already says it.)
- Note: Dedicated Cloud can also reach open-weight models via Bedrock, so "Proprietary models"
  there is the default, not a limit.

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
- **Dedicated Cloud card:** owner's text, "any model" intentional.
- **In-Office card:** owner's text, ends "There are no monthly fees."

### Earlier
- 2026-10-02: "Which one fits" trade-off line rewritten to drop a rule-of-three list.

## Open

### About page main paragraph (resolved, optional tweak open)
Current: "At Office Inference we build private AI systems for small businesses, and we do
the whole job: the hardware, the software, the install, the training."
Resolution 2026-10-04: owner confirmed the wording is correct. "Private" means dedicated to
the client, not on-premises: a Dedicated Cloud deployment is private infrastructure in the
client's own cloud account, and In-Office is private hardware on their floor. Keeping the
word is also the better marketing choice, since it is what buyers search for.
Optional tweak (owner to decide, not applied): name both places so "private" cannot be read
as on-prem only.
  - A. "...private AI systems for small businesses, in the cloud or in your office, and we
    do the whole job: the hardware, the software, the install, the training."
  - B. "...private AI systems for small businesses. Some run in the cloud, some run on
    hardware in your office. We do the whole job either way: the hardware, the software,
    the install, the training."

### LinkedIn profile copy (not site copy)
The About text was rewritten tier-neutral (see chat 2026-10-02). Tagline still two-tier:
"Private AI for your business documents. In your building when privacy demands it, in the
cloud when it doesn't." Suggested: "AI for your business documents, run your way: your
office, your cloud account, or a frontier model."

### Lower priority
- Cloud card contains a three-item list ("chat, search, and automation"), left as
  owner-written.
- Cloud and Dedicated Cloud both mention pay-as-you-go; check later whether the distinction
  (per-question vs cloud usage) needs spelling out.
- Possible future line: self-hosting a model on rented cloud GPUs is not economical, which
  is part of why the In-Office tier exists on owned hardware.
