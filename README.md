# E-Commerce (Real Estate Portfolio)

A small React + Vite frontend showcasing a real-estate portfolio. Built with React, Tailwind CSS, Motion for animations, and React Toastify for contact feedback.

This repository contains the client-side app and demo content (projects, testimonials and a contact form wired to Web3Forms).

## Features

- Responsive UI with Tailwind CSS
- Motion-powered section animations
- Projects carousel with responsive layout
- Customer testimonials
- Contact form that submits to Web3Forms with toast feedback

## Tech stack

- React 19
- Vite
- Tailwind CSS
- Motion (motion/react)
- React Toastify

## Getting started

Prerequisites

- Node.js 16+ (LTS recommended)
- npm (or yarn)

Install dependencies

```powershell
npm install
```

Start development server

```powershell
npm run dev
```

Build for production

```powershell
npm run build
```

Preview production build locally

```powershell
npm run preview
```

Run linter

```powershell
npm run lint
```

## Important files & structure

- `index.html` — Vite entry
- `src/main.jsx` — Application bootstrap
- `src/App.jsx` — Main layout (imports Header, About, Projects, Testimonials, Contact, Footer)
- `src/components/` — React components (Header, About, Projects, Testimonials, Contact, Footer)
- `src/assets/assets.js` — exported asset paths and demo data (projects, testimonials)

## Contact form and secrets (security note)

The contact form is implemented in `src/components/Contact.jsx` and currently appends an access key directly in the source:

```js
formData.append("access_key", "1964f056-3100-468e-8b29-ba34a2443526");
```

Recommendation: Move this key into an environment variable to avoid committing secrets.

With Vite, do the following:

1. Create a `.env` file in the project root (do NOT commit this file):

```env
VITE_WEB3FORMS_ACCESS_KEY=your_real_key_here
```

2. Read it in `Contact.jsx` using `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`:

```js
formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
```

3. Add `.env` to `.gitignore`.

This keeps your key out of source control.

## Notes & troubleshooting

- If the contact form fails, inspect the browser console and the network request to Web3Forms. Ensure your access key is valid.
- If images don't display, verify the paths in `src/assets/assets.js` and ensure referenced files are available in `public` or imported correctly.
- Motion animations rely on `motion/react` being installed. If you see import errors, ensure `motion` exists in `package.json` and ran `npm install`.

## Scripts (from package.json)

- `npm run dev` — start Vite development server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Contribution

Contributions are welcome. Please open issues for bugs or feature requests and submit small, focused pull requests.
