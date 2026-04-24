# Todd R. Hardeman — Personal Portfolio

A Jekyll-based personal portfolio site matching the dark tech aesthetic of your existing branding (business card, letterhead, and animated logo).

---

## 🎨 Design System

**Color Palette** (matches your card/letterhead)
- `#0a1118` — Deep background
- `#4ecdc4` — Teal accent (primary brand color)
- `#9ea4a9` — Silver (secondary)
- `#0e1a24` — Panel background

**Fonts** (loaded from Google Fonts)
- `Rajdhani` — Display/headings
- `Exo 2` — Body text
- `Share Tech Mono` — Monospace/labels

---

## 🚀 Getting Started

### Prerequisites
- Ruby 3.0+
- Bundler (`gem install bundler`)

### Install & Run Locally

```bash
# 1. Navigate to the portfolio folder
cd hardeman-portfolio

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
# Output in the _site/ folder — deploy this folder
```

---

## 📁 Project Structure

```
hardeman-portfolio/
├── _config.yml              # Site configuration
├── _layouts/
│   ├── default.html         # Main page wrapper (nav, fonts, footer)
│   └── project.html         # Individual project page layout
├── _includes/
│   ├── nav.html             # Fixed navigation bar
│   └── footer.html          # Site footer
├── _projects/               # Project markdown files (P1–P8)
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
│   │   ├── logo.png             # Your hexagon logo (static)
│   │   └── logo-animated.html   # Your animated logo assembly
│   └── docs/
│       ├── Todd_Hardeman_Resume_2026.pdf
│       └── Official_Bio_SSgt_Hardeman.pdf
├── index.html               # Homepage (all sections)
├── Gemfile
└── README.md
```

---

## ✏️ How to Edit Content

### Update Your Bio / About Section
Edit the text directly in `index.html` — find the `#about` section.

### Add or Edit a Project
Each project is a Markdown file in `_projects/`. Front matter controls everything shown on the card and detail page:

```yaml
---
title: "Your Project Title"
number: 9              # Determines sort order (P09)
summary: "..."         # Shown on the project card
concept: "..."         # Header description on detail page
impact: "..."          # Bold impact statement (detail page)
impact_short: "..."    # One-liner shown on project card
software:
  - "Tool Name (Purpose)"
skills:
  - "Skill Name"
tags:
  - "Tag"
---

Your project body text goes here as markdown.
```

### Update Contact Info
Edit the `#contact` section in `index.html`.

### Update Stats
Edit the `.stat-card` blocks in the `#about` section of `index.html`.

---

## 🌐 Deploying

### GitHub Pages (Free)
1. Push to a GitHub repo
2. Go to Settings → Pages → Source: `main` branch / `/(root)`
3. Your site will be live at `https://yourusername.github.io/repo-name`

Note: In `_config.yml`, set `baseurl: "/repo-name"` if deploying to a subfolder.

### Netlify (Free, Recommended)
1. Connect your GitHub repo to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`
4. Deploys automatically on every commit

### Custom Domain
If you have a domain, add a `CNAME` file to the root with your domain:
```
todd.hardeman.io
```

---

## 🔮 Animated Logo — Jekyll Integration

Your animated logo (`logo-animated.html`) is embedded via an `<iframe>` in the hero section. This is the recommended approach for Jekyll because:

- The logo uses complex SVG animations with CSS `@keyframes`
- Embedding directly in Liquid templates can cause parsing conflicts
- An iframe preserves the self-contained animation context perfectly

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

If you want the logo transparent (no background), edit `logo-animated.html` and remove or comment out the `body::before` checkerboard CSS block.

---

## 🎯 Customization Tips

**Change accent color:** Edit `--teal` in `assets/css/main.css` `:root`

**Add a new section:** Copy an existing `<section>` block in `index.html`, update the ID and nav link in `_includes/nav.html`

**Add project images:** Add `image: /assets/images/your-image.jpg` to project front matter and reference in `_layouts/project.html`
