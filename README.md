# Rhine Media Clone

A pixel-faithful clone of [rhine-media.com](https://rhine-media.com) — a performance media buying agency site. Built as a test task for Orion Digital Group.

## Stack

- **React 19** + **Vite 8**
- **CSS Modules** for component-scoped styles; global utilities in `src/styles/globals.css`
- **React Router DOM 7** — two routes: `/` (Home) and `/contact`
- **clsx** for conditional class composition
- No UI library dependencies — all components hand-crafted

## Features

- Fixed navbar with scroll-aware backdrop-blur transition
- Scroll-reveal animations via `IntersectionObserver` (`data-a` / `data-d` attributes)
- Infinite marquee partners band
- Responsive layout: Mobile First, breakpoints at 560 / 768 / 1024 / 1440px
- Contact page with multi-field form and success state
- Full-width section backgrounds with content constrained via CSS `max()` (no extra container divs)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/
    Header/         # Fixed navbar with mobile menu
    Hero/           # Full-viewport hero + stats band
    Niches/         # Vertical niches grid
    Channels/       # Traffic sources grid
    Partners/       # Infinite marquee
    Benefits/       # Two-column feature section
    CTA/            # Call-to-action banner
    Footer/         # Multi-column footer
    ContactForm/    # Reusable contact form
  pages/
    Home/           # Assembles all sections
    Contact/        # Contact hero + form layout
  hooks/
    useScrollReveal.js  # IntersectionObserver for scroll animations
  styles/
    globals.css     # CSS variables, typography, layout utils, buttons, animations
```

## Live Demo

Vercel deployment link will be added after project completion.

## Author

**Vitalii Shchukin**
