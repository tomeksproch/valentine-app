# 💖 Valentine App 2026

An interactive, high-performance web application designed as a personalized Valentine's Day invitation. This project demonstrates modern React patterns, clean TypeScript architecture, and a focus on delightful User Experience (UX).

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Email Service**: Resend
- **Deployment**: Vercel

## ✨ Key Features

- **Interactive "Yes" Logic**: A dynamic state-driven "Yes" button that grows in size as the user attempts to decline, ensuring a playful and inevitable "Yes" outcome.
- **Automated Email Confirmation**: Integration with **Resend API** to trigger real-time email notifications upon acceptance.
- **Optimized Background Animations**: High-performance floating heart particles implemented with `next/dynamic` to ensure zero hydration mismatches.
- **Mobile-First Responsive Design**: Specifically optimized for seamless viewing on mobile devices and tablets.
- **Clean Code Standards**: Modular component structure and rigorous TypeScript typing.

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: 18.x or later
- **API Key**: A [Resend](https://resend.com/) account and API key.

### Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/tomeksproch/valentine-app.git](https://github.com/tomeksproch/valentine-app.git)
   cd valentine-app
Install dependencies:

Bash

npm install
Environment Setup: Create a .env.local file in the root directory and add your credentials:

Fragment kodu

RESEND_API_KEY=re_your_api_key_here
Run the development server:

Bash

npm run dev

## 📁 Project Structure
app/api/send/route.ts — Server-side API endpoint for secure email handling.

app/components/floating-hearts.tsx — Client-side only animation component.

app/page.tsx — Main application logic and state management.

public/ — Optimized assets and GIFs.

