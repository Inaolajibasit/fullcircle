# FullCircle Global - Production Company Portfolio

A modern, cinematic portfolio website for FullCircle Global built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Cinematic Animations**: Framer Motion page transitions & scroll animations
- **Fully Responsive**: Mobile-first design with smooth breakpoints
- **Performance Optimized**: Server components, lazy loading, optimized images
- **Production Ready**: Clean architecture, reusable components, type-safe

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fullcircle-global/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── team/              # Team page
│   ├── work/              # Portfolio page
│   └── contact/           # Contact page
├── components/
│   ├── navigation/        # Navbar, Mobile menu
│   ├── ui/                # Reusable UI components
│   ├── animations/        # Animation components
│   └── home/              # Home page sections
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🎨 Pages

- **Home**: Hero section with CTA
- **About**: Partners and collaborations showcase
- **Team**: Team members with featured founder
- **Work**: Portfolio sections (Brand Campaigns, Music Videos, Experiential)
- **Contact**: Contact information and CTA

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📝 Customization

### Adding Images

Replace placeholder images in `/public/images/` directory:
- Team photos
- Hero background
- Portfolio work samples

### Updating Content

Edit page files in `/app/` directory to update:
- Text content
- Portfolio items
- Contact information
- Team members

### Styling

Customize colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#ef4444', // Red accent color
}
```

## 🎬 Animations

All animations use Framer Motion for smooth, performant transitions:
- **Page transitions**: Horizontal slide on navigation
- **Scroll animations**: Fade-in and slide-up effects
- **Hover effects**: Button and card interactions

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

## 📄 License

Created for FullCircle Global Production Company

## 🙏 Credits

Built with modern frontend best practices following Apple/Stripe design patterns.

---

**Need Help?** Check the Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs)
