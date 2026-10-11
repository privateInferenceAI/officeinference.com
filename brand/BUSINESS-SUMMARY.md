# Office Inference — canonical business summary

Owner-corrected 2026-10-06. Naming and product definitions updated 2026-10-09. This is the
source of truth for how the business describes itself. Update it when the business changes, and
prefer it over older chat summaries.

Naming note: the cloud tiers were called **Cloud** and **Dedicated Cloud** until 2026-10-09.
They are now **Standard Cloud** and **Compliant Cloud**. The AWS Activate application was
submitted on 2026-10-06 under the old names.

## What we are

An AI systems shop in Colebrook, Connecticut. We design and build the system a client needs,
from the ground up: hardware, software, the document pipeline, the chat interface, the
install, and the training.

## Who we serve

Small businesses, including medical practices, law firms, accounting firms, financial
advisors, and any business that needs AI. We do **not** specialize in regulated systems for
any particular industry. Compliance is one thing we can build for, not the identity of the
company. The specialty is building what the client wants from the ground up.

## The four offerings

| Offering | Where it runs | Models | Who it is for |
|---|---|---|---|
| **Standard Cloud** | The client's own cloud account | Frontier commercial models | Non-regulated work. Cheapest and fastest to start |
| **Compliant Cloud** | The client's own cloud account, on compliance-grade services and agreements | Commercial, including Bedrock | Work that has to satisfy compliance rules |
| **Standard Cloud Hosted** | Our cloud account, prepaid | Frontier commercial models | Clients who want Standard Cloud but will not open their own cloud account |
| **In-Office** | Dedicated hardware in the client's building | Open weight / open source | Anyone who wants to own it. Compliance optional |

**The defining difference between the two cloud tiers is not where they run.** Both run in an
account the client owns, and both are dedicated to that one client. The difference is whether
the services, configuration, and agreements permit confidential documents to be handled
legally. Standard Cloud makes no such claim, and its agreement says so. Compliant Cloud is
built and documented to carry regulated data, and it costs more because of the compliance work,
not because the cloud services cost more.

**Hosted tier, decided 2026-10-09:** hosting is offered for **Standard Cloud only** for now,
prepaid, so we never carry a receivable. A hosted Compliant Cloud is deliberately not offered
until the liability question is reviewed.

## Commercial shape

- **Build fee:** charged up front, or in installments as the build progresses. This applies to
  every offering.
- **Cloud billing:** the client owns the cloud account and pays the cloud provider directly. We
  never pass through cloud costs.
- **Service:** an optional monthly management retainer, and an optional setup service for
  clients who want us to create and configure the account for them.
- **In-Office:** hardware purchased by the client, installed at their building. No per-token
  cost. Service contracts optional.
- **Regulated work is priced separately** from standard work, because the labor is different.
  The compliance workstream (questionnaires, agreements, evidence, stricter configuration and
  testing) is quoted as its own line item.

## The path between them

Standard Cloud is where people start. Compliant Cloud is where regulated work usually lands.
In-Office is where people end up when they want data physically incapable of leaving, or when
the monthly bills start to add up. One system, so moving is a deployment change.

## The core stack

LiteLLM gateway, document pipeline with vector search, chat interface, workflow automation.
Models are configuration rather than architecture, which is what allows the same stack to
deploy four ways. One Terraform codebase serves both cloud tiers, with a compliance profile
switch rather than two separate builds.

## Brand position

"Private" means dedicated to one client, not necessarily on-premises. The site presents every
option honestly, and includes a line that admits when someone does not need us. That anti-pitch
is the trust play, and it is what single-tier competitors cannot copy.

## State of things (2026-10-09)

- Pre-revenue and self-funded.
- Website and LinkedIn live. Domain email working.
- LLC and EIN done. AWS Activate credits awarded, 5,000 USD, through the Mercury Portfolio tier.
- Working builds: `ai-stack` (in-office product), `reserve-bank-demo` (compliant cloud path on
  AWS with Terraform, deliberately torn down to rebuild by hand), `ai-home-stack` (voice-first
  R&D, a medical advocate for a friend, doubling as the voice capability test).
- The rebuilds are deliberate: hands-on learning and résumé value alongside the business.
- Open: pricing for every offering, the hosted-tier liability review, and the first client
  agreement.
