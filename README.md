# Recover.io 💳

Recover.io is a Micro SaaS dashboard for subscription businesses to track failed payments and reduce churn. It’s designed to connect to Stripe, identify at-risk subscriptions, and trigger recovery workflows.

## Features
- **Failed Payment Tracker:** View payment failures and retry status.
- **Churn Risk Queue:** Prioritize customers likely to churn.
- **Recovery Actions:** (Roadmap) Email/SMS dunning sequences.
- **Metrics Dashboard:** Recovered revenue, failures, and pending churn.

## Tech Stack
- **Frontend:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Hosting:** Vercel-ready

## Getting Started
1. Clone the repo.
2. Run `npm install`.
3. Add Stripe keys to `.env.local`.
4. Run `npm run dev`.

## Roadmap
- Stripe OAuth connect flow
- Automated dunning sequences
- Webhooks + event timeline per customer
