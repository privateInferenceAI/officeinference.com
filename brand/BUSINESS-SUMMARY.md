# Office Inference — canonical business summary

Owner-corrected 2026-10-06. This is the source of truth for how the business describes
itself. Update it when the business changes, and prefer it over older chat summaries.

## What we are

An AI systems shop in Colebrook, Connecticut. We design and build the system a client needs,
from the ground up: hardware, software, the document pipeline, the chat interface, the
install, and the training.

## Who we serve

Small businesses, including medical practices, law firms, accounting firms, financial
advisors, and any business that needs AI. We do **not** specialize in regulated systems for
any particular industry. Compliance is one thing we can build for, not the identity of the
company. The specialty is building what the client wants from the ground up.

## The three products

| Product | Where it runs | Models | Who it is for |
|---|---|---|---|
| **In-Office** | Dedicated hardware in the client's building | Open weight / open source | Anyone who wants to own it. Compliance optional |
| **Dedicated Cloud** | A cloud account the client owns, on compliance-grade services | Commercial (Bedrock) | Regulated work |
| **Cloud** | AWS, standard services | Frontier models | Non-regulated work. Cheapest and fastest to start |

## Commercial shape

- **Cloud and Dedicated Cloud:** monthly cloud usage plus per-token.
- **In-Office:** built on dedicated hardware at the client's building.

## The path between them

Cloud is where people start. Dedicated Cloud is where regulated work usually lands. In-Office
is where people end up when they want data physically incapable of leaving, or when the
monthly bills start to add up. One system, so moving is a deployment change.

## The core stack

LiteLLM gateway, document pipeline with vector search, chat interface, workflow automation.
Models are configuration rather than architecture, which is what allows the same stack to
deploy three ways.

## Brand position

"Private" means dedicated to one client, not necessarily on-premises. The site presents all
three options honestly, and includes a line that admits when someone does not need us. That
anti-pitch is the trust play, and it is what single-tier competitors cannot copy.

## State of things (2026-10-06)

- Pre-revenue and self-funded.
- Website and LinkedIn live. Domain email working.
- **LLC and EIN done** (required for Mercury).
- Pursuing AWS Activate credits through the Mercury perk, with a three-account AWS
  Organization so credits pool while building in the account that already has GPU quota.
- Working builds: `ai-stack` (in-office product), `reserve-bank-demo` (compliant cloud path
  on AWS with Terraform, deliberately torn down to rebuild by hand), `ai-home-stack`
  (voice-first R&D, a medical advocate for a friend, doubling as the voice capability test).
- The rebuilds are deliberate: hands-on learning and résumé value alongside the business.
