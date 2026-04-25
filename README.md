# My Portfolio

This is my personal portfolio site—a Jekyll-based portfolio built to match my dark tech aesthetic across all my branding (business card, letterhead, and animated logo).

---

## 🎨 Design System

**My Color Palette** (consistent across all materials)
- `#0a1118` — Deep background
- `#4ecdc4` — Teal accent (my primary brand)
- `#9ea4a9` — Silver (secondary)
- `#0e1a24` — Panel background

**Fonts** (from Google Fonts)
- `Rajdhani` — Display & headings
- `Exo 2` — Body text
- `Share Tech Mono` — Monospace & labels

---

## 🚀 Getting Started

### Prerequisites
- Ruby 3.0+
- Bundler (`gem install bundler`)

### Install & Run Locally

```bash
# 1. Navigate to the portfolio folder
cd Portfolio

# 2. Install gems
bundle install

# 3. Start the development server
bundle exec jekyll serve --livereload

# 4. Open in browser
open http://localhost:4000
```

### Build for Production

```bash
bundle exec jekyll build
# Output in the _site/ folder—ready to deploy
```

---

## 📁 Site Structure

```
Portfolio/
├── _config.yml              # Site configuration
├── _layouts/
│   ├── default.html         # Main page wrapper (nav, fonts, footer)
│   └── project.html         # Individual project detail layout
├── _includes/
│   ├── nav.html             # Fixed navigation bar
│   └── footer.html          # Site footer
├── _projects/               # My project files (P1–P8)
│   ├── p1-laircm-plug.md
│   ├── p2-mission-ready.md
│   ├── p3-uas-inspection.md
│   ├── p4-knowledge-platform.md
│   ├── p5-intake-app.md
│   ├── p6-task-tracker.md
│   ├── p7-automated-reporting.md
│   └── p8-counter-terrorism.md
├── assets/
│   ├── css/main.css         # All styles (CSS variables, components)
│   ├── js/main.js           # Nav, scroll reveal, typewriter
│   ├── images/
│   │   ├── logo.png             # My hexagon logo (static)
│   │   └── logo-animated.html   # My animated logo assembly
│   └── docs/
│       ├── Todd_Hardeman_Resume_2026.pdf
│       └── Official_Bio_SSgt_Hardeman.pdf
├── index.html               # Homepage (all sections)
├── Gemfile
└── README.md
```

---

## ✏️ Editing My Content

### Update My Bio & About Section
I can edit the text directly in `index.html` — look for the `#about` section.

### Add or Edit a Project
Each project is a Markdown file in `_projects/`. The front matter controls how it displays on the card and detail page:

```yaml
---
title: "Project Title"
number: 9              # Determines sort order (P09)
summary: "..."         # Shown on the project card
concept: "..."         # Header on detail page
impact: "..."          # Bold impact statement
impact_short: "..."    # One-liner on project card
software:
  - "Tool Name (Purpose)"
skills:
  - "Skill Name"
tags:
  - "Tag"
---

Project description goes here as markdown.
```

### Update My Contact Info
I can edit the `#contact` section in `index.html`.

### Update My Stats
I can edit the `.stat-card` blocks in the `#about` section of `index.html`.

---

## 🌐 Deploying My Site

### GitHub Pages (Free)
1. Push to GitHub
2. Go to Settings → Pages → Source: `main` branch / `/(root)`
3. My site will go live at `https://toddrhardeman.github.io/Portfolio`

Note: In `_config.yml`, I can set `baseurl: "/Portfolio"` if needed for the subfolder.

### Netlify (Free, Recommended)
1. Connect my GitHub repo to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`
4. It deploys automatically on every commit

### Custom Domain
With a custom domain, I can add a `CNAME` file to the root with my domain:
```
todd.hardeman.io
```

---

## 🔮 My Animated Logo — Jekyll Integration

My animated logo (`logo-animated.html`) is embedded via an `<iframe>` in the hero section. This works best for Jekyll because:

- The logo uses complex SVG animations with CSS `@keyframes`
- Embedding directly in Liquid templates can cause parsing conflicts
- An iframe preserves the animation context perfectly

The iframe is already configured in `index.html`:
```html
<iframe
  class="animated-logo-iframe"
  src="{{ '/assets/images/logo-animated.html' | relative_url }}"
  title="Todd Hardeman Animated Logo"
  scrolling="no"
  sandbox="allow-scripts allow-same-origin"
></iframe>
```

If I want the logo transparent (no background), I can edit `logo-animated.html` and remove or comment out the `body::before` checkerboard CSS block.

---

## 🎯 Customization Tips

**Change my accent color:** Edit `--teal` in `assets/css/main.css` `:root`

**Add a new section:** Copy an existing `<section>` block in `index.html`, update the ID, and add a link in `_includes/nav.html`

**Add project images:** Add `image: /assets/images/my-image.jpg` to project front matter and reference it in `_layouts/project.html`
