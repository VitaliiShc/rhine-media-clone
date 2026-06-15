# Rhine Media Clone — Project Summary

## Project Goal

Implement a responsive React-based clone of the Rhine Media website as a frontend technical assessment.

Reference website:
<https://rhine-media.com>

The goal is to demonstrate:

- React development skills
- Component-based architecture
- Responsive (Mobile First) layout
- Clean code organization
- Git workflow
- Deployment process

---

## Technology Stack

### Core

- React
- Vite
- JavaScript (without TypeScript)

### Styling

- CSS Modules
- HTML5
- Mobile First approach

### Routing Technology

- React Router DOM

### Deployment

- Vercel

---

## Repository

Repository name:

```text
rhine-media-clone
```

Description:

```text
Frontend test task: Rhine Media landing page built with React, Vite and CSS Modules.
```

---

## Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── NichesSection/
│   ├── ChannelsSection/
│   ├── PartnersSection/
│   ├── BenefitsSection/
│   ├── ContactForm/
│   └── Footer/
│
├── pages/
│   ├── Home/
│   └── Contact/
│
├── styles/
│   ├── reset.css
│   └── globals.css
│
├── App.jsx
└── main.jsx
```

---

## Routing

Routes:

```text
/
```

Home page

```text
/contact
```

Contact page

Implementation:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

---

## Pages

### Home Page

Sections:

1. Header
2. Hero
3. Niches We Dominate
4. Every Major Channel
5. Partners & Networks
6. Why Choose Rhine Media
7. Contact / CTA Section
8. Footer

---

### Contact Page

Sections:

1. Header
2. Contact information
3. Contact form
4. Footer

The same Header and Footer components should be reused.

---

## Reusable Components

### ContactForm

Single reusable component used on:

- Home page
- Contact page

Purpose:

- Demonstrate React component reusability
- Avoid code duplication

---

## Layout Requirements

### Responsive Design

Mobile First implementation.

Target breakpoints:

```text
375px
768px
1024px
1440px
```

Requirements:

- Responsive layout
- Proper spacing
- Consistent typography
- Cross-browser compatibility

---

## Code Quality Requirements

- Semantic HTML
- Component-based architecture
- CSS Modules for style isolation
- Reusable UI sections
- Clear folder structure
- Meaningful commit history

Avoid:

- Inline styles
- Monolithic CSS files
- Unused code
- Dead assets

---

## Git Workflow

Initial commit:

```text
chore: initialize React Vite project
```

Project structure:

```text
feat: create application structure
```

Routing:

```text
feat: setup application routing
```

Page sections:

```text
feat: implement landing page sections
```

Responsive layout:

```text
feat: add responsive styles
```

Deployment:

```text
chore: deploy project to vercel
```

---

## README Requirements

README should contain:

- Project description
- Tech stack
- Installation instructions
- Run instructions
- Build instructions
- Deployment link
- Author information

---

## Deliverables

## GitHub Repository

Contains:

- Source code
- Commit history
- README documentation

## Live Demo

Deployed on:

- Vercel

## Requirements Checklist

- React
- Vite
- JavaScript
- CSS Modules
- Responsive layout
- Mobile First
- React Router
- GitHub repository
- Vercel deployment
- Clean component architecture
- Reusable ContactForm component
