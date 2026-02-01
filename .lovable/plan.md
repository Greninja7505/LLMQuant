

# LLMQuant - Complete Landing Page & Site Structure

## Overview
A modern, minimalist dark-themed website for LLMQuant, a platform providing pre-quantized open-source language models. The design will be clean, professional, and enterprise-ready while remaining approachable for individual developers.

---

## Design System

**Color Palette:**
- Background: Deep dark (#0a0a0a / #111827)
- Surface/Cards: Subtle dark (#1a1a1a / #1f2937)  
- Primary text: White (#ffffff)
- Secondary text: Muted gray (#9ca3af)
- Accent/CTA: Blue-purple gradient (#3b82f6 → #8b5cf6)
- Success badges: Green (#10b981)

**Typography:** Inter font family with clear hierarchy

**Style:** Clean lines, generous whitespace, subtle borders, no heavy shadows

---

## Pages to Build

### 1. Landing Page (Home)
All 9 sections as specified:
- **Sticky Navigation** - Logo, menu items, Login/Get Started buttons with blur effect
- **Hero Section** - Headline, subheadline, dual CTAs, subtle gradient background, trust indicators
- **Benefits Grid** - 3 columns: Privacy, Ready to Deploy, Cut Costs
- **How It Works** - 3-step process with visual mockups
- **Featured Models** - 4 model cards with specs and download badges
- **Use Cases** - Healthcare, Dev Teams, Research cards
- **Comparison Table** - LLMQuant vs API providers
- **CTA Section** - Gradient background with "Browse Models" and "Talk to Sales"
- **Footer** - Full footer with links, social icons, copyright

### 2. Models Catalog Page
- Search and filter functionality
- Grid of all available models
- Filter by: model family, size, quantization level, use case
- Sort by: popularity, size, date added
- Each card links to model details

### 3. Pricing Page
- Clear pricing tiers (Free tier + paid options)
- Feature comparison table
- FAQ section
- Enterprise contact option

### 4. Documentation Page
- Clean documentation layout
- Quick start guide placeholder
- Installation instructions
- API reference placeholder
- Code examples

### 5. About Page
- Company mission/story
- Team section (placeholder)
- Contact information
- Trust/security certifications

---

## Authentication System

**Features:**
- Full Supabase authentication
- Email/password signup and login
- Email verification flow
- Password reset functionality
- User dashboard showing:
  - Download history
  - Saved/favorite models
  - Account settings

**UI:**
- Clean modal-based auth forms
- Login/Signup pages
- Protected routes for dashboard

---

## Navigation & User Flow

- Smooth scroll navigation on landing page
- Consistent header across all pages
- Mobile-responsive hamburger menu
- User menu dropdown when logged in (showing avatar, dashboard link, logout)

---

## Key Interactive Elements

- Sticky nav with scroll-triggered background
- Subtle fade-in animations on scroll
- Hover states on cards and buttons
- Mobile-first responsive design
- Dark/light mode toggle (optional, dark by default)

---

## Model Data Structure

Static/hardcoded data for models including:
- Model name, family, description
- Available quantization formats (GGUF, GPTQ)
- Size options (Q4, Q5, Q8)
- Download counts
- Use case tags
- Compatibility info

