# Digital Greeting & Gifting Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green)](https://supabase.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Web-based platform that changes digital greetings into emotion-first moments. Create personalized cards, schedule delivery, and give recipients an animated gift-opening experience that feels special and memorable.

## Overview

**Core Value Proposition:** "I didn't forget, and I made this special."

### Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS
- **Backend:** Supabase (Auth, Database, Storage)
- **Messaging:** Twilio (SMS), Resend/Postmark (Email)
- **Future Payments:** Stripe Connect (Phase 2)

## Features

### Current MVP Features

- **Card Creation:** Personalize cards with messages, photos, and short videos
- **Occasion Selection:** Birthday, Anniversary, Holiday, or "Just Because"
- **Scheduled Delivery:** Send now or schedule for a future date/time
- **Shareable Links:** Distribute via SMS, WhatsApp, email, or any messaging platform
- **Animated Experience:** Recipient sees a beautiful animation when opening the card
- **Keepsake Page:** Cards remain accessible as lasting memories
- **Collaborative Cards:** Multiple people can sign the same card
- **Gift Link Integration:** Include Venmo, PayPal, Cash App, or Amazon wishlist links (no money handling in MVP)

### Coming Soon 

- In-app payment processing via Stripe Connect
- Gift claiming and payout system
- Mobile native apps (iOS/Android)
- Advanced customization options

## Prerequisites

Before running project, ensure:

- **Node.js:** v18.17 or higher
- **npm, yarn, pnpm, or bun:** Latest stable version
- **Supabase Account:** [Sign up here](https://supabase.com/)
- **Twilio Account:** [Sign up here](https://www.twilio.com/) (for SMS functionality)
- **Email Service:** Resend or Postmark account (for email delivery)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/greeting-gift-platform.git
cd greeting-gift-platform
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# Email Service (Resend or Postmark)
EMAIL_API_KEY=your_email_service_api_key
EMAIL_FROM_ADDRESS=noreply@yourdomain.com

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Database Setup

Run the Supabase migrations to set up your database schema:

```bash
# Initialize Supabase locally (optional)
npx supabase init

# Apply migrations
npx supabase db push

# Or use the Supabase dashboard to create tables manually
```

**Required Tables:**
- `users` - User authentication and profiles
- `cards` - Card content and metadata
- `recipients` - Card delivery information
- `opens` - Track when cards are opened
- `schedules` - Scheduled delivery times
- `collaborators` - Multi-person card signing

### 5. Storage Buckets

Create the following storage buckets in your Supabase dashboard:
- `card-photos` - For uploaded photos
- `card-videos` - For short video clips

Configure appropriate access policies for each bucket.

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build and start the production server:

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) | Yes |
| `TWILIO_ACCOUNT_SID` | Twilio account identifier | Yes |
| `TWILIO_AUTH_TOKEN` | Twilio authentication token | Yes |
| `TWILIO_PHONE_NUMBER` | Your Twilio phone number | Yes |
| `EMAIL_API_KEY` | Email service API key | Yes |
| `EMAIL_FROM_ADDRESS` | Sender email address | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL (for link generation) | Yes |

## Contributing

We welcome contributions!

### Development Guidelines

- Follow the existing code style (ESLint + Prettier configuration)
- Write tests for new features
- Update documentation as needed
- Keep commits atomic and well-described
- Ensure all tests pass before submitting PR

## Success Metrics

The MVP is considered successful when:
- Users complete card creation flow
- Recipients consistently open shared cards
- Senders return to create cards the following month
- Collaborative cards are shared organically
- Repeat usage indicates genuine product value

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
