# SP Lartey Consulting

Official website for **SP Lartey Consulting**, an independent consultancy serving the international development sector.

<p align="center">
  <img src="./public/images/og-image.avif" alt="Screenshot of SP Lartey Consulting Website" width="800">
</p>

---
## Overview

This project is built with **Next.js (App Router)** and provides a modern, responsive, and accessible website for SP Lartey Consulting.  
It includes a contact form with **server-side email handling using Resend**, privacy-compliant form validation, and reusable UI components.

---

## Installation

Follow the steps below to get a local copy of the project running for development or testing.

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm** or **yarn** (npm used in examples)
- **Git**
- A **Resend API key** (for contact form email functionality)

---

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/splartey/splartey-consulting.git
   cd splartey-consulting
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory and add:

   ```bash
   NEXT_RESEND_API=re_xxxxxxxxxxxxxxxxx
   RESEND_FROM_EMAIL=contact@mail.example.com
   RESEND_OWNER_EMAIL=info@example.com
   ```

   `RESEND_FROM_EMAIL`must use a domain that has been verified in Resend.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open the app in your browser**

   http://localhost:3000

## Email Functionality

Emails are sent using Resend via secure Next.js Server Actions

- Two emails are triggered on form submission:
  - Notification email to the site owner
  - Confirmation email to the user
- Privacy consent is enforced server-side before emails are sent

## Deployment Notes

- This project requires a Node.js-compatible hosting environment
- Static exports (`next export`) are not supported due to server actions
- Ensure environment variables are set correctly in production

## Project Structure

The project follows the Next.js App Router pattern with clear separation of concerns.

```bash
├── app
│   ├── about
│   ├── action-gallery
│   ├── actions
│   ├── contact
│   ├── privacy-policy
│   └── services
├── components
│   ├── about
│   ├── home
│   └── ui
├── constants
├── emails
├── hooks
├── lib
├── public
│   ├── favicons
│   ├── fonts
│   └── images
│       ├── decors
│       ├── gallery
│       └── icons
└── types
```
## License
This project is proprietary and confidential.
All rights are reserved by SP Lartey Consulting.
Unauthorized copying, modification, or distribution of this project is not permitted.