# Bethsy Falcon — Frontend Portfolio

Modern frontend portfolio built with Next.js to showcase my projects, blog, and technical growth as a developer.

Designed with a focus on clean architecture, scalability, and real-world frontend practices.

---

## Live Demo

Primary deploy:  
https://portfolio-bfb.vercel.app

Alternative deploy (GitHub Pages):  
https://bethsyf.github.io/portfolio/

---

## Preview

![Portfolio Preview](./public/blog/blog1.JPG)

---

## Features

- Dark / Light mode toggle with custom React Hook
- Fully responsive design (mobile, tablet, desktop)
- Blog section with centralized data
- Projects showcase
- Glass-style navbar with theme support
- Modular and scalable architecture
- SCSS Modules styling system

---

## Tech Stack

- Next.js
- React
- TypeScript
- SCSS Modules
- Vercel
- GitHub Pages

---

## Architecture

This project follows production-level frontend architecture principles:

- Component-based structure
- Custom Theme System using React Hook
- Global theme variables with SCSS
- Centralized blog data management
- Separation between views, hooks, styles, and data
- Scalable and maintainable folder structure

---

## Theme System

The theme system was built from scratch using:

- Custom `useTheme` hook
- CSS variables
- SCSS theme files
- Persistent theme state

This allows seamless switching between light and dark mode across the entire application.

---

## Getting Started

Run locally:

```bash
npm install
npm run dev
