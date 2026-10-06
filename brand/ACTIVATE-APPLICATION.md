# AWS Activate application — draft answers

Reusable copy for the Activate profile and credit application. Update it after each submission.

## Short version (one-line field, ~200 chars)

Office Inference builds private AI systems for small businesses, so staff can ask questions
and automate work from their own documents without that data leaving their control.

## "Tell us what you are building"

Office Inference builds private AI systems for small businesses whose client documents can't
go into public chatbots. A medical practice or a law firm gets a chat and automation system
that answers questions from its own files.

The same system runs three ways. Cloud uses commercial models from a frontier provider and is
the cheapest and fastest to start. Dedicated Cloud runs the stack in a cloud account the
customer owns, on compliance-grade AWS services that satisfy regulated work. In-Office runs
entirely on hardware in the customer's building with open weight models, so nothing leaves
the premises.

The stack is a LiteLLM gateway in front of the models, a document pipeline with vector search,
a chat interface, and workflow automation. I build and deploy all of it, including the AWS
infrastructure in Terraform. On AWS that means EC2 GPU instances for the self-hosted tier,
Bedrock for commercial models, plus S3 and Secrets Manager.

The business is self-funded and pre-revenue. I'm based in northwest Connecticut and deploy
remotely or on site.

## "How will your customers interact with your product?"

Through a chat window in a browser, the way they already use ChatGPT, except the answers come
from their own documents. Staff ask questions in plain language and get answers with the
source documents cited.

Office staff upload documents through the same interface and the system indexes them
automatically, so a new file is searchable within minutes. Automated work happens in the
background, like drafting emails and chasing approvals. Administrators get a dashboard for
users and permissions.

In-Office customers reach the system over their own network. Cloud and Dedicated Cloud
customers reach it at a web address provisioned in their AWS account.

## Notes for the application

- Keep **self-funded** as the funding stage. That is what the Founders tier is for.
- Confirm the AWS account is on the **Paid Tier Plan** before submitting.
- Name real AWS services in the use case (EC2 GPU, Bedrock, S3, Secrets Manager). Reviewers
  look for that.
- If asked whether the organization previously received Activate credits, answer honestly and
  reference this as a separate business.
