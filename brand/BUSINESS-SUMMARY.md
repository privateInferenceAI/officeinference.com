# Office Inference — canonical business summary

Owner-corrected 2026-10-06. Naming and product definitions updated 2026-10-09. This is the
source of truth for how the business describes itself. Update it when the business changes, and
prefer it over older chat summaries.

Naming note: the Cloud product has two configurations, **Standard** and **Compliant**. Before
2026-10-09 they were called Cloud and Dedicated Cloud. The AWS Activate application was
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

## The two products

| Product | Configuration | Where it runs | Models | Who it is for |
|---|---|---|---|---|
| **Cloud** | **Standard** | The client's own cloud account | Frontier commercial models | Non-regulated work. Cheapest and fastest to start |
| **Cloud** | **Compliant** | The client's own cloud account, on compliance-grade services and agreements | Commercial, including Bedrock | Work that has to satisfy compliance rules |
| **In-Office** | The private stack | Dedicated hardware in the client's building | Open weight / open source | Anyone who wants to own it. Compliance optional |

**Standard Cloud Hosted is not a third product.** It is a prepaid wrapper on the Standard
configuration, in our account, sold in conversation only until the hosted-tier liability
review is done.

**The defining difference between the two Cloud configurations is not where they run.** Both
run in an account the client owns, and both are dedicated to that one client. The difference is
whether the services, configuration, and agreements permit confidential documents to be handled
legally. The Standard configuration makes no such claim, and its agreement says so. The
Compliant configuration is built and documented to carry regulated data, and it costs more
because of the compliance work, not because the cloud services cost more.

**Hosted tier, decided 2026-10-09:** hosting is offered for the Standard configuration only for
now, prepaid, so we never carry a receivable. Hosting a Compliant deployment is deliberately
not offered until the liability question is reviewed.

## Commercial shape

- **Discovery:** a short paid scope, credited against the build. It qualifies the buyer and pays
  for the scoping work.
- **Build fee:** charged up front, or in installments as the build progresses. Quoted for the
  work: ingestion, connectors, workflow builds, training, cutover, and acceptance testing.
- **Monthly service:** one of three levels. Essential care watches the system, Managed
  operations runs it, and Compliant operations adds the compliance artifacts and evidence. The
  same levels apply to Cloud and In-Office.
- **Cloud billing:** the client owns the cloud account and pays the cloud provider directly. We
  never pass through cloud costs, and we never bill tokens.
- **In-Office:** hardware is passed through at our cost plus procurement and installed at the
  client's building. No per-token cost. Power and maintenance are the client's, and service
  contracts are optional.
- **Scope add-ons:** extra seats, connectors, workflows, and document volume are quoted where
  they vary. Vertical editions are quoted with the build.
- **Regulated work is priced separately** from standard work, because the labor is different.
  The compliance workstream (questionnaires, agreements, evidence, stricter configuration and
  testing) is quoted as its own line item.

## How pricing is built

Discovery, a quoted build, and a monthly service level. The 2026-10-20 pricing model sets bands
from market data and treats them as hypotheses until real quotes and buyer interviews replace
them. The site describes the structure and quotes each engagement. It does not publish the
bands.

## The path between them

Cloud is where people start. Standard handles everyday business documents; Compliant is where
regulated work lands. In-Office is where people end up when they want data physically incapable
of leaving, or when the system has to keep working without an internet connection. It is not the
cheaper option at small-business volume, and the site says so. One system, so moving from Cloud
to In-Office is a deployment change.

## The core stack

LiteLLM gateway, document pipeline with vector search, chat interface, workflow automation.
Models are configuration rather than architecture, which is what allows the same stack to
deploy two ways, Cloud and In-Office, with three configurations. One Terraform codebase serves
both Cloud configurations, with a compliance profile switch rather than two separate builds.

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
- Open: final list pricing, the hosted-tier liability review, our BAA template and insurance,
  and the first client agreement.
