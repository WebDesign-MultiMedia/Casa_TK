# Casa TK

**Live site:** [https://casa-tk.vercel.app/](https://casa-tk.vercel.app/)

Casa TK is a women-owned coffee shop and bakery in Soundview, The Bronx (1497 Westchester Ave), serving Mexican pan dulce, specialty coffee, and dessert cups from 6am to midnight most days. This repo is the source for its marketing site — a bilingual, multi-page React app built to give the shop a real online presence: real menu items, real Google-listing photos, real hours and contact info, and a 3D animated storefront on the homepage.

## What's on the site

- **Home** — hero section with a rotating 3D model of the actual storefront (built from primitives, textured with the real logo and a photo of the shop's interior through its window)
- **Menu** — drink and dessert categories pulled from the shop's own chalkboard menu (Mazapán/Duvalín/Tiramisu iced lattes, aguas frescas, dessert cups, etc.)
- **About** — the shop's story, hours, rating, and neighborhood
- **Gallery** — real photos from Casa TK's Google Business listing, grouped into labeled categories (Storefront, Our Menu, Coffee & Drinks, Desserts & Bakery Case), with a click-to-expand lightbox
- **Reviews** — a mix of real and representative 5-star reviews, including a few rendered as standalone image cards
- **Contact** — address, hours, phone, Instagram/TikTok, an embedded map, and a validated contact form

## Features

- Fully bilingual (English / Spanish) via a language toggle in the nav
- Client-side routing (React Router) — each section is its own page
- 3D animated hero built with react-three-fiber / three.js, lazy-loaded so other pages don't pay for it
- Responsive across mobile/tablet/desktop
- Contact form with client-side validation

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- react-three-fiber / drei / three.js (3D storefront)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build locally
```
