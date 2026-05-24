# VIZIBLEX Portfolio Website

**All-in-One Digital Solutions | M Hamza Ali (Finn Archer) | Founder**

A premium, fully responsive React portfolio website for Viziblex — built with a sophisticated Old Money luxury aesthetic.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

The site runs on `http://localhost:3000` by default.

---

## 📁 Project Structure

```
viziblex/
├── public/
│   └── index.html           # HTML shell with fonts & icon CDN links
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navbar with active section highlighting
│   │   ├── Preloader.jsx     # Loading animation
│   │   ├── Hero.jsx          # Hero with animated counters & stats
│   │   ├── About.jsx         # About, timeline, achievements
│   │   ├── Services.jsx      # 12 service cards
│   │   ├── TechMarketClients.jsx  # Tech stack, markets, clients
│   │   ├── Portfolio.jsx     # Social media portfolio grid
│   │   ├── Testimonials.jsx  # Testimonial carousel
│   │   ├── CaseStudies.jsx   # 3 case study cards
│   │   ├── ContentCreation.jsx    # Blogs, newsletters, campaigns
│   │   └── ContactFooter.jsx # Why Us, Video, Contact form, Footer
│   ├── styles/
│   │   ├── globals.css       # CSS variables, base styles, buttons
│   │   ├── Navbar.css        # Navbar styles
│   │   ├── Hero.css          # Hero section styles
│   │   ├── About.css         # About section styles
│   │   ├── Sections.css      # Services, Tech, Markets, Clients styles
│   │   └── Extras.css        # Portfolio, Testimonials, CaseStudies, Contact, Footer
│   ├── App.js                # Root component
│   └── index.js              # React entry point
└── package.json
```

---

## 🎨 Design System

| Variable | Value | Usage |
|---|---|---|
| `--warm-white` | `#F8F6F2` | Page backgrounds, text |
| `--beige` | `#DCC7AA` | Secondary text |
| `--light-brown` | `#B08968` | Accents |
| `--navy` | `#1F3A5F` | Card backgrounds |
| `--gold` | `#C6A664` | Primary accent, CTAs |
| `--dark` | `#0D1B2E` | Main background |

**Fonts:**
- Display: `Cinzel` (headings, labels)
- Heading: `Cormorant Garamond` (section titles, quotes)
- Body: `Jost` (paragraphs, UI text)

---

## ✏️ Customization Guide

### 1. Add Your Photo
Replace the hero placeholder with your actual photo:
```jsx
// In Hero.jsx, replace <div className="hero-image-placeholder">
// with an <img> tag pointing to your photo
<img src="/your-photo.jpg" alt="M Hamza Ali" style={{ width: '100%', borderRadius: 20 }} />
```

### 2. Add Portfolio Images
Replace portfolio placeholders in `Portfolio.jsx` with your actual social media graphics.

### 3. Add Video
In `ContactFooter.jsx` VideoSection, replace the placeholder with:
```jsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Viziblex Onboarding"
  allowFullScreen
  style={{ width: '100%', aspectRatio: '16/9', border: 'none', borderRadius: 20 }}
/>
```

### 4. Update Contact Form
Connect the contact form to a backend or service like Formspree, EmailJS, or Netlify Forms.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | 18.x | UI framework |
| `react-dom` | 18.x | DOM rendering |
| `bootstrap` | 5.3.x | Grid & utilities |
| `aos` | 2.3.x | Scroll animations |

**CDN (via public/index.html):**
- Font Awesome 6.5 — icons
- Google Fonts — Cinzel, Cormorant Garamond, Jost
- AOS CSS — animation styles

---

## 🌐 Sections

1. **Hero** — Name, tagline, animated stats, CTA buttons
2. **About** — Story, timeline, achievements
3. **Services** — 12 service cards with icons
4. **Tech Stack** — 12 platform/tool cards
5. **Markets** — US, Canada, Pakistan
6. **Clients** — 6 featured client cards
7. **Portfolio** — Social media creative grid
8. **Testimonials** — Carousel with 5 reviews
9. **Case Studies** — 3 detailed case cards
10. **Content Creation** — Blogs, newsletters, email campaigns
11. **Why Us** — 4 feature cards
12. **Video** — Onboarding video embed
13. **Contact** — Form + contact info + WhatsApp CTA
14. **Footer** — Links, social icons, copyright

---

## 📞 Contact Details (Viziblex)

- **Website:** viziblex.online.com
- **Email:** muhammadhamzaali54688@gmail.com
- **WhatsApp:** +92 318 5811479

---

*Built with ❤️ for Viziblex — All-in-One Digital Solutions*
