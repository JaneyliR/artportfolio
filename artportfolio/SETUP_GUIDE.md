# Art Portfolio - Setup Guide

## 🎨 Your Beautiful Art Portfolio is Ready!

This is a stunning, fully-responsive portfolio website built with React, TypeScript, and Vite.

### ✨ Features Included:

1. **Navigation Bar** - Your name displayed in top-right corner with beautiful blue/purple/lavender gradient
2. **Hero Section** - Dramatic landing page with animated gradient orbs
3. **Character Design Gallery** - Grid layout with filters, lightbox view, and hover effects
4. **Books Section** - Showcase your authored & illustrated books
5. **Contact Form** - Professional contact section with your email
6. **Image Watermarking** - Every image download includes your name and email embedded

### 🚀 Getting Started

The dev server is already running at **http://localhost:5173/**

### 📝 Customize Your Portfolio

Open `/workspaces/artportfolio/artportfolio/src/App.tsx` and update:

```typescript
const artistName = "Your Name";  // Replace with your actual name
const artistEmail = "your.email@example.com";  // Replace with your email
```

### 🖼️ Add Your Artwork

1. Open `/workspaces/artportfolio/artportfolio/src/components/Gallery.tsx`
2. Replace the placeholder images in the `galleryItems` array with your actual artwork URLs
3. Update titles, descriptions, and tags for each piece

Example:
```typescript
{
  id: 1,
  src: '/path/to/your/artwork.jpg',  // Your image path
  title: 'Your Character Name',
  description: 'Your character description',
  tags: ['fantasy', 'warrior', 'character']
}
```

### 📚 Update Your Books

1. Open `/workspaces/artportfolio/artportfolio/src/components/Books.tsx`
2. Update the `books` array with your actual book information:

```typescript
{
  id: 1,
  title: 'Your Book Title',
  coverImage: '/path/to/book-cover.jpg',
  description: 'Your book description',
  role: 'Illustrated & Authored',
  year: '2024'
}
```

### 🎨 UI/UX Highlights

- **Gradient Color Scheme**: Blue (#4A90E2), Purple (#9B6BE8), Lavender (#C8A5E8)
- **Fonts**: Sora (headings) & Space Grotesk (body)
- **Animations**: Smooth transitions, hover effects, floating orbs
- **Responsive**: Works beautifully on mobile, tablet, and desktop
- **Dark Theme**: Professional dark background with gradient accents

### 🖼️ Image Watermarking Feature

When visitors click "Download with Watermark" on any gallery image:
- Your name and email are embedded at the bottom right
- A subtle watermark is added to the center
- The image is downloaded as PNG with all watermarks included

### 📱 Mobile Responsive

The portfolio automatically adapts to all screen sizes with a mobile-friendly hamburger menu.

### 🎯 Next Steps

1. Replace placeholder images with your actual artwork
2. Update your name and email in App.tsx
3. Customize book information
4. Add more gallery items as needed
5. Deploy to your favorite hosting service (Vercel, Netlify, etc.)

### 🚢 To Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

Enjoy your new portfolio! 🎨✨
