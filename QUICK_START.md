# 🚀 FULLCIRCLE GLOBAL - QUICK START GUIDE

## ⚡ Installation (2 Minutes)

### Step 1: Navigate to Project
```bash
cd fullcircle-global
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open Browser
Visit: **http://localhost:3000**

---

## 🎯 What You Get

✅ **5 Complete Pages**:
- Home (Hero + CTA)
- About (Partners showcase)
- Team (Member profiles)
- Work (Portfolio with 3 sections)
- Contact (Contact info)

✅ **Premium Features**:
- Side-to-side page transitions
- Smooth scroll animations
- Mobile hamburger menu
- Hover effects on all interactive elements
- Fully responsive design

✅ **Production Ready**:
- TypeScript for type safety
- Optimized performance
- Clean component architecture
- SEO-friendly structure

---

## 📸 Adding Your Images

### Replace these placeholder images:

1. **Team Photos** → `/public/images/team/`
   - wale.jpg
   - eniola.jpg
   - quam.jpg

2. **Hero Background** → Update HeroSection.tsx
   - Replace gradient with actual image

3. **Portfolio Work** → `/public/images/work/`
   - Add campaign videos/thumbnails
   - Add music video thumbnails
   - Add experiential event photos

---

## 🎨 Customization Tips

### Change Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#ef4444', // Change red to your brand color
}
```

### Update Content
All text content is in the page files:
- `/app/page.tsx` - Home
- `/app/about/page.tsx` - About
- `/app/team/page.tsx` - Team
- `/app/work/page.tsx` - Work
- `/app/contact/page.tsx` - Contact

### Add More Animations
Use the FadeIn component:
```typescript
<FadeIn delay={0.3}>
  <YourContent />
</FadeIn>
```

---

## 🚢 Deployment

### Deploy to Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

---

## 💡 Pro Tips

1. **Images**: Use Next.js Image component for optimization
2. **Performance**: Keep animations subtle for better UX
3. **Mobile**: Test on actual devices, not just browser resize
4. **SEO**: Update metadata in each page.tsx file
5. **Analytics**: Add Google Analytics in layout.tsx

---

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run lint
```

---

## 📞 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

**Created with ❤️ for FullCircle Global**

🎬 Now go create some FOMO-worthy content!
