# Sreenithi V. — Freelance Web Developer Portfolio

A modern, responsive, and thoughtfully crafted portfolio website built for **Sreenithi V.** to attract freelance clients, showcase real-world projects, and establish a credible personal brand.

---

## Table of Contents
1. [Overview & Tech Stack](#overview--tech-stack)
2. [Project Folder Structure](#project-folder-structure)
3. [How to Run Locally](#how-to-run-locally)
4. [Customization Guide](#customization-guide)
   - [Changing Name, Tagline & Text](#1-changing-name-tagline--text)
   - [Customizing the Color Palette](#2-customizing-the-color-palette)
   - [Adding Project Screenshots](#3-adding-project-screenshots)
   - [Updating Contact & Social Links](#4-updating-contact--social-links)
   - [Connecting an Automatic Contact Form (Formspree)](#5-connecting-an-automatic-contact-form-formspree)
5. [Publishing Free on GitHub Pages](#publishing-free-on-github-pages)
6. [Updating Your Portfolio Later](#updating-your-portfolio-later)
7. [Editable Project List & URLs](#editable-project-list--urls)
8. [Remaining Personal Information Checklist](#remaining-personal-information-checklist)
9. [Pre-Launch Testing Checklist](#pre-launch-testing-checklist)

---

## Overview & Tech Stack

This portfolio uses pure web standards with **zero build-step requirements** or paid runtime dependencies:
- **HTML5:** Semantic page landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), SEO metadata, and Schema.org structured data.
- **CSS3:** Custom property variables, responsive Flexbox, and CSS Grid with a dark theme (#0B0B12) and violet accents (#A78BFA / #8B5CF6).
- **Vanilla JavaScript (ES6+):** Responsive mobile navigation drawer, interactive FAQ accordion, active link scroll spy, and contact form formatting.

---

## Project Folder Structure

```
portfolio/
├── index.html           # Main semantic HTML5 single-page structure
├── css/
│   └── style.css        # Responsive stylesheet & design system
├── js/
│   └── script.js        # Mobile menu, accordion & form interaction
└── README.md            # Complete handover & deployment guide
```

---

## How to Run Locally

You do **not** need Node.js, npm, or any terminal commands to run this static version:
1. Double-click `portfolio/index.html` to open it in your web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, in VS Code, install the free **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

---

## Customization Guide

### 1. Changing Name, Tagline & Text
Open `portfolio/index.html` in any text editor (VS Code, Sublime Text, Notepad):
- **Name:** Search for `Sreenithi V.` and replace with your desired display name.
- **Tagline:** Search for `Modern Websites. Thoughtful Design. Real Solutions.`
- **Bio/About:** Search for `A Little About Me` to adjust your background introduction.

### 2. Customizing the Color Palette
All color values are centralized at the top of `portfolio/css/style.css` under `:root`:
```css
:root {
  --bg-main: #0B0B12;         /* Primary page background */
  --bg-secondary: #12121D;    /* Alternating section background */
  --bg-card: #171725;         /* Card surface background */
  --accent-primary: #A78BFA;  /* Lavender accent */
  --accent-highlight: #8B5CF6;/* Vibrant violet CTA accent */
  --text-main: #F5F3FF;       /* High-contrast body text */
  --text-muted: #AAA7BD;      /* Secondary reading text */
  --border-subtle: #232236;   /* Hairline card borders */
}
```

### 3. Adding Project Screenshots
To replace the CSS browser mockups with real screenshot images:
1. Create an `assets/images/` folder inside `portfolio/`.
2. Save your screenshot as `project-preview.png` (ideal ratio: 16:9 or 4:3).
3. In `index.html`, inside `<div class="project-mockup">`, replace the mockup markup with:
```html
<img src="assets/images/project-preview.png" alt="Screenshot of Cyber Attack Prediction Dashboard" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
```

- **Email:** `sreenithivenkatesan09@gmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/sreenithi-v-7a24692a4/`
- **GitHub:** `https://github.com/Sreenithi-V09`

### 5. Connecting an Automatic Contact Form (Formspree)
Currently, the form formats an email directly to `sreenithivenkatesan09@gmail.com`. If you want visitors to submit inquiries directly through the website without opening their email application:
1. Go to [https://formspree.io](https://formspree.io) and register for a free account.
2. Click **New Form** and enter your notification email (`sreenithivenkatesan09@gmail.com`).
3. Formspree will provide a URL like `https://formspree.io/f/mqkenvba`.
4. In `portfolio/index.html`, update `<form id="inquiryForm" action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">`.

---

## Publishing Free on GitHub Pages

1. **Create a GitHub Account:** Go to [https://github.com](https://github.com) if you do not have one.
2. **Create a Repository:**
   - Click the **+** icon in the top right &rarr; **New repository**.
   - Name it `portfolio` (or `sreenithi-v.github.io`).
   - Set visibility to **Public** and leave other options unchecked.
   - Click **Create repository**.
3. **Upload Files:**
   - Click **uploading an existing file**.
   - Drag and drop `index.html`, the `css/` folder, and the `js/` folder into GitHub.
   - Commit the changes to the `main` branch.
4. **Enable GitHub Pages:**
   - In your repository, click **Settings** (gear tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment &rarr; Branch**, select `main` and `/(root)`.
   - Click **Save**.
5. In 1–2 minutes, your website is live at:
   `https://<your-username>.github.io/portfolio/`

---

## Updating Your Portfolio Later

When you complete new projects:
1. Open `portfolio/index.html`.
2. Locate the `<section id="projects">` section.
3. Duplicate one of the `<article class="card project-card">` blocks.
4. Fill in the title, category, tech stack, and GitHub repository URL.
5. Push the updated file to GitHub — GitHub Pages updates automatically within 60 seconds!

---

## Editable Project List & URLs

| Project Name | Category | Tech Stack | Status | Repository URL |
| :--- | :--- | :--- | :--- | :--- |
| **Cyber Attack Prediction Application** | Cybersecurity / Web App | HTML, CSS, JavaScript, MySQL | Learning Showcase | `https://github.com/sreenithi-v/cyber-attack-prediction` |
| **Medical Chatbot Interface** | AI / Chatbot Interface | Python, AI Integration, HTML, CSS | Learning Showcase | `https://github.com/sreenithi-v/medical-chatbot` |
| **Personal Portfolio Website** | Frontend Development | HTML5, CSS3, JavaScript | Complete | `https://github.com/sreenithi-v/portfolio` |

---

## Remaining Personal Information Checklist

- [x] Full Name: Sreenithi V.
- [x] Brand Tagline: "Modern Websites. Thoughtful Design. Real Solutions."
- [x] Professional Title: Freelance Web Developer
- [x] Email Address: `sreenithivenkatesan09@gmail.com`
- [x] LinkedIn Profile: `https://www.linkedin.com/in/sreenithi-v-7a24692a4/`
- [x] GitHub Profile: `https://github.com/Sreenithi-V09`
- [ ] Custom domain name (e.g. `sreenithiv.dev` — optional, GitHub Pages `.github.io` is 100% free)

---

## Pre-Launch Testing Checklist

- [x] **Viewport Responsiveness:** Tested on 320px (iPhone SE), 375px (iPhone 13), 768px (iPad portrait), 1024px (iPad landscape), and 1440px desktop.
- [x] **Zero Horizontal Scroll:** Checked for unwanted overflow; body and cards stay strictly contained.
- [x] **Keyboard Accessibility:** All interactive elements (`<button>`, `<a>`, `<input>`) have visible focus rings (`:focus-visible`).
- [x] **Screen Reader Landmarks:** Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) properly structured.
- [x] **Color Contrast:** Main text `#F5F3FF` on `#0B0B12` exceeds WCAG AAA contrast ratio (17.5:1). Secondary text `#AAA7BD` exceeds WCAG AA (6.8:1).
- [x] **Form Validation:** Prevents empty submissions, verifies email regex, and provides clear user notification.
- [x] **Reduced Motion Support:** Respects user's `prefers-reduced-motion` operating system preference.
- [x] **Browser Compatibility:** Works across Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge.
