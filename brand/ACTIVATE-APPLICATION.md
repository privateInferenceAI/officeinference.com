# AWS Activate application — draft answers

Reusable copy for the Activate profile and credit application. Update after each submission.

**Status: submitted 2026-10-06** via the Mercury perk (Portfolio tier, OrgID code on file in
the admin handoff). The answers below are the versions that were submitted.

## The three products

| Product | Where it runs | Models | Who it is for |
|---|---|---|---|
| **In-Office** | Hardware in the customer's building | Open weight / open source | Anyone who wants to own the system. Works with or without compliance requirements |
| **Dedicated Cloud** | A cloud account the customer owns, on compliance-grade services | Commercial (Bedrock) | Companies with compliance needs |
| **Cloud** | Standard cloud services | Commercial from a frontier provider | Companies with no compliance needs. Cheapest and fastest to start |

One core stack behind all three: LiteLLM gateway, document pipeline with vector search, chat
interface, workflow automation.

## Short version (one-line field, ~194 chars)

Office Inference builds three AI systems for small businesses: one that runs in their
building on open weight models, and two AWS cloud options, one for regulated work and one for
everyone else.

## "Tell us what you are building" (~200 words)

Office Inference builds AI systems for small businesses such as medical practices, law firms,
and accounting firms. We sell three products that share one core stack and differ in where
the models run and what compliance paperwork is involved.

In-Office runs on hardware in the customer's building, using open weight and open source
models. It suits a business that wants to own the system outright, with or without compliance
requirements.

Dedicated Cloud runs the same system in a cloud account the customer owns, on
compliance-grade AWS services with commercial models on Bedrock, for businesses that have to
satisfy regulated work.

Cloud runs on standard AWS services with commercial frontier models, for businesses with no
compliance needs. It is the cheapest and fastest to start.

The core stack is a LiteLLM gateway in front of the models, a document pipeline with vector
search, a chat interface, and workflow automation. We build and deploy all of it, including
the AWS infrastructure in Terraform. On AWS that means EC2 GPU instances for the self-hosted
builds, Bedrock for the commercial models, plus S3 and Secrets Manager.

The business is self-funded and pre-revenue. I'm based in northwest Connecticut and deploy
remotely or on site.

## "How will your customers interact with your product?"

All three systems are used the same way: through a chat window in a browser, the way staff
already use ChatGPT, except the answers come from the customer's own documents. Staff ask
questions in plain language and get answers with the source documents cited.

Office staff upload documents through the same interface and the system indexes them
automatically, so a new file is searchable within minutes. Automated work runs in the
background, like drafting emails and chasing approvals, and administrators get a dashboard for
users and permissions.

Only where it runs changes. In-Office customers reach the system over their own network.
Dedicated Cloud customers reach it at a web address provisioned in their own AWS account, and
access can be limited to their network. Cloud customers reach it at a web address we provision.

## Notes for the application

- Keep **self-funded** as the funding stage. That is what the Founders tier is for.
- Confirm the AWS account is on the **Paid Tier Plan** before submitting.
- Name real AWS services in the use case (EC2 GPU, Bedrock, S3, Secrets Manager).
- If asked whether the organization previously received Activate credits, answer honestly and
  reference this as a separate business.
