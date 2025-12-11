# SP Lartey Consulting

An elegant, production-ready website for SP Lartey Consulting, built with the latest Next.js features and optimized for performance and maintainability.

<p align="center">
  <img src="./public/images/og-image.avif" alt='Screenshot of SP Lartey Consulting Website' width='800'>
</p>

## Tech Stack

This project leverages a modern, full-stack approach for speed, reliability, and excellent developer experience.

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,typescript,react,tailwind,nodejs" alt="Tech Stack Icons" />
</p>

## Installation

Follow these steps to get a local copy of the project up and running for development and testing.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn (npm is used in the examples)
- Git
- A Resend API Key for email functionality.

### Steps

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/splartey/splartey-consulting.git
    cd splartey-consulting
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**

    Create a file named `.env.local` in the root directory and add the following variables:

    ```env
    NEXT_RESEND_API="sk_resend_..."
    NEXT_RESEND_TEST_DOMAIN="onboarding@resend.dev"
    NEXT_RESEND_EMAIL_ADDRESS="your_company_email@example.com"
    ```

4.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

5.  **Acces the it in your browser via:**
    ```bash
    http://localhost:3000
    ```

---

## Project Structure

The project follows a standard Next.js App Router pattern, with dedicated folders for components, server actions, and React email templates.

```
├───app
│   ├───about
│   ├───action-gallery
│   ├───actions
│   ├───contact
│   ├───privacy-policy
│   └───services
├───components
│   ├───about
│   ├───home
│   └───ui
├───constants
├───emails
├───hooks
├───lib
├───public
│   ├───favicons
│   ├───fonts
│   └───images
│       ├───decors
│       ├───gallery
│       └───icons
└───types
```
