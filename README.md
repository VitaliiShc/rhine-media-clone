# Rhine Media Clone

A pixel-faithful clone of [rhine-media.com](https://rhine-media.com) — a performance media buying agency site. Built as a test task for **Orion Digital Group**.

## Live Demo

> [https://vitalishc-rhine-media-clone.vercel.app/](https://vitalishc-rhine-media-clone.vercel.app/) — deployed on Vercel

## Stack

| Layer             | Technology                     |
| ----------------- | ------------------------------ |
| UI                | React 19                       |
| Bundler           | Vite 8                         |
| Routing           | React Router DOM 7             |
| Styling           | CSS Modules + global utilities |
| Class composition | clsx 2                         |
| Deployment        | Vercel                         |

No UI library dependencies — all components hand-crafted.

## Features

- Fixed navbar with scroll-aware backdrop-blur transition and mobile hamburger menu
- Scroll-reveal animations via `IntersectionObserver` — elements animate in once on first viewport entry
- Infinite auto-scrolling marquee for the partners band
- Contact form with client-side validation: required fields, email format check, consent checkbox, real-time error feedback
- Custom-styled checkbox with inline SVG checkmark and `:has()` state styling
- Responsive layout, breakpoints at 560 / 768 / 960 / 1024 / 1440 px
- Terms of Service and Privacy Policy pages

## Pages

| Route             | Component | Description                                          |
| ----------------- | --------- | ---------------------------------------------------- |
| `/`               | `Home`    | Hero, Niches, Channels, Partners, Benefits, FAQ, CTA |
| `/contact`        | `Contact` | Contact hero + two-column form layout                |
| `/terms`          | `Terms`   | Terms of Service                                     |
| `/privacy-policy` | `Privacy` | Privacy Policy                                       |

## Project Structure

```text
src/
  components/
    Benefits/         # Two-column feature grid
    Channels/         # Traffic sources grid
    ContactBody/      # Two-column contact layout (info + form card)
    ContactForm/      # Multi-field form with validation
    ContactHero/      # Contact page hero section
    CTA/              # Call-to-action banner
    FAQ/              # Accordion FAQ section
    Footer/           # Multi-column footer
    Header/           # Fixed navbar with mobile menu
    Hero/             # Full-viewport hero + KPI stats band
    Niches/           # Vertical niches grid
    Partners/         # Infinite marquee band
    PrivacyBody/      # Privacy Policy content
    PrivacyHero/      # Privacy Policy page hero
    TermsBody/        # Terms of Service content
    TermsHero/        # Terms of Service page hero
    index.js          # Barrel export for all components
  pages/
    Contact/          # /contact route
    Home/             # / route
    Privacy/          # /privacy-policy route
    Terms/            # /terms route
    index.js          # Barrel export for all pages
  assets/
    icons/            # SVG icons (arrow, checkmark)
  hooks/
    useScrollReveal.js  # IntersectionObserver hook for scroll animations
  styles/
    globals.css       # CSS custom properties, typography, layout, buttons, animations
  App.jsx             # BrowserRouter + route definitions
  main.jsx            # React entry point
```

## Design System

All design tokens are CSS custom properties defined in `src/styles/globals.css`.

| Group       | Key variables                                                                |
| ----------- | ---------------------------------------------------------------------------- |
| Backgrounds | `--color-bg`, `--color-bg-1`, `--color-bg-2`, `--color-bg-card`              |
| Text        | `--color-text`, `--color-text-muted`, `--color-text-dim`                     |
| Gold accent | `--color-gold`, `--color-gold-lt`, `--color-gold-dim`, `--color-gold-border` |
| Blue accent | `--color-blue`, `--color-blue-lt`, `--color-blue-dim`                        |
| Error       | `--color-error`                                                              |
| Borders     | `--border-subtle` (4% white), `--border-subtle-8` (8% white)                 |
| Gradients   | `--g-gold`, `--g-blue`, `--g-card`                                           |
| Animation   | `--ease`, `--transition` (0.2s), `--transition-md` (0.45s)                   |
| Layout      | `--container-max` (1240px), `--container-px` (24px)                          |
| Radius      | `--radius-s` / `--radius-m` / `--radius-l` / `--radius-xl` / `--radius-pill` |

## Animation System

Scroll-reveal is driven by `useScrollReveal()` hook + CSS attribute selectors in `globals.css`.

**Usage in JSX:**

```jsx
<div data-a="up">Slides up on enter</div>
<div data-a="left" data-d="1">Slides from left, 80ms delay</div>
<div data-a="right" data-d="2">Slides from right, 160ms delay</div>
<div data-a="scale" data-d="3">Scales in, 240ms delay</div>
```

**Attributes:**

| Attribute | Values                            | Effect                          |
| --------- | --------------------------------- | ------------------------------- |
| `data-a`  | `up` / `left` / `right` / `scale` | Enter direction                 |
| `data-d`  | `1` – `8`                         | Stagger delay (80ms increments) |

The hook uses `IntersectionObserver` with `threshold: 0.1` and `rootMargin: 0px 0px -48px 0px`. Once an element enters the viewport, `data-vis="1"` is set and the observer stops watching it — the animation fires exactly once.

## Getting Started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serves dist/ locally to verify the build
```

## Deploy to Vercel

This project uses **React Router with `BrowserRouter`**, so direct URL access to any route other than `/` requires a rewrite rule. Create `vercel.json` in the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Then deploy:

```bash
# Via Vercel CLI
npm i -g vercel
vercel

# Or connect the GitHub repo to vercel.com — build settings are auto-detected by Vite preset:
# Build command:  npm run build
# Output dir:     dist
# Install command: npm install
```

## Author

**Vitalii Shchukin** — [vitalii.shchukin.dev@gmail.com](mailto:vitalii.shchukin.dev@gmail.com)
