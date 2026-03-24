# 🎬 VIDEO UPLOAD GUIDE - FullCircle Global

## 📺 **FREE Video Hosting Options**

---

## 🏆 **OPTION 1: VIMEO (RECOMMENDED FOR PORTFOLIOS)**

### ✅ **Why Vimeo?**

- ✅ **NO ADS** (cleaner, more professional)
- ✅ **Better quality** encoding
- ✅ **Privacy controls** (password protection)
- ✅ **Clean embedding** (looks premium)
- ✅ **Free tier:** 5GB/week, 25GB total
- ✅ **Perfect for portfolios**

### 📤 **How to Upload to Vimeo**

**Step 1: Create Account**
- Go to **vimeo.com/join** (FREE)

**Step 2: Upload Videos**
1. Click **"New video"**
2. Upload your video file
3. Set privacy to **"Hide from Vimeo"** (unlisted)
4. Optionally: Add password protection
5. Click **"Save"**

**Step 3: Get Video ID**
- From URL: `https://vimeo.com/123456789`
- Video ID is: **123456789**

**Step 4: Add to Website**

Open `/app/work/page.tsx`:

```typescript
const brandCampaigns = [
  { 
    id: '123456789', // ← Your Vimeo ID
    title: 'CROWDR - Every Champion',
    category: 'Commercial',
    platform: 'vimeo' // ← ADD THIS LINE
  },
]
```

**Step 5: Add Custom Thumbnail (Important for Vimeo)**

In Vimeo:
1. Go to video settings
2. Upload custom thumbnail
3. Download that thumbnail
4. Put in `/public/images/thumbnails/`

Then update code:

```typescript
{ 
  id: '123456789',
  title: 'CROWDR',
  category: 'Commercial',
  platform: 'vimeo',
  thumbnail: '/images/thumbnails/crowdr.jpg' // ← Add thumbnail
},
```

---

## 🎥 **OPTION 2: YOUTUBE (EASIEST)**

### ✅ **Why YouTube?**

- ✅ **Unlimited storage** (FREE)
- ✅ **Auto thumbnails** (no manual upload needed)
- ✅ **Global CDN**
- ✅ **Easy to use**
- ✅ **Analytics included**

### 📤 **How to Upload to YouTube**

**Step 1: Upload Videos**
1. Go to **studio.youtube.com**
2. Click **"CREATE"** → **"Upload videos"**
3. Upload your video
4. Set to **"Unlisted"** (only people with link)
5. Publish

**Step 2: Get Video ID**
- From URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID is: **dQw4w9WgXcQ**

**Step 3: Add to Website**

```typescript
const brandCampaigns = [
  { 
    id: 'dQw4w9WgXcQ', // ← Your YouTube ID
    title: 'CROWDR - Every Champion',
    category: 'Commercial'
    // No platform needed - YouTube is default
  },
]
```

---

## 🌐 **OPTION 3: Cloudflare Stream**

**Free Tier:** 1,000 minutes storage

1. Go to **cloudflare.com/products/cloudflare-stream**
2. Sign up (free tier)
3. Upload videos
4. Get embed URL
5. Use full URL as `id`

```typescript
{ 
  id: 'https://customer-xxx.cloudflarestream.com/xxx/manifest/video.m3u8',
  title: 'Your Video',
  platform: 'vimeo' // Works with react-player
}
```

---

## 🚀 **OPTION 4: Bunny.net Stream**

**Pay-as-you-go:** ~$0.005 per GB

1. Go to **bunny.net**
2. Create Stream library
3. Upload videos
4. Get embed URL
5. Add to website

---

## 📊 **Comparison Table**

| Feature | Vimeo | YouTube | Cloudflare | Bunny |
|---------|-------|---------|------------|-------|
| **Free Storage** | 25GB | Unlimited | 1000 min | Pay per GB |
| **Ads** | ❌ No | ✅ Yes | ❌ No | ❌ No |
| **Quality** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Privacy** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Ease** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Portfolio** | ✅ Best | ⚠️ OK | ✅ Great | ✅ Great |

---

## 💡 **My Recommendation**

### **For FullCircle Global:**

**Use VIMEO** for:
- ✅ Main portfolio pieces
- ✅ Client-facing work
- ✅ Premium presentation
- ✅ No ads (professional look)

**Use YOUTUBE** for:
- ✅ Behind-the-scenes
- ✅ Process videos
- ✅ Extra content
- ✅ Unlimited uploads

**Mix both!** You can use different platforms for different videos:

```typescript
const brandCampaigns = [
  { 
    id: '123456789',
    title: 'Premium Campaign',
    platform: 'vimeo' // High-end work
  },
  { 
    id: 'abc123xyz',
    title: 'Behind the Scenes',
    platform: 'youtube' // Extra content
  },
]
```

---

## 🎯 **Quick Start**

### **Vimeo Setup (5 minutes)**

1. **Sign up:** vimeo.com/join
2. **Upload videos** → Set to "Hide from Vimeo"
3. **Upload custom thumbnails** for each
4. **Copy video IDs**
5. **Update `/app/work/page.tsx`:**

```typescript
{ 
  id: 'YOUR_VIMEO_ID',
  title: 'Your Title',
  category: 'Your Category',
  platform: 'vimeo',
  thumbnail: '/images/thumbnails/your-thumb.jpg'
},
```

6. **Put thumbnails in:** `/public/images/thumbnails/`

---

## 🔧 **Performance**

Both solutions are optimized:
- ✅ Videos load ONLY when clicked
- ✅ Thumbnails lazy load
- ✅ Zero impact on page speed
- ✅ Mobile optimized

---

## 📝 **File Structure**

```
/public/images/thumbnails/
  ├── crowdr-campaign.jpg
  ├── powerhorse.jpg
  ├── beautyhut.jpg
  └── ... (your video thumbnails)
```

---

## ✨ **Pro Tips**

### For Vimeo:
1. Use **1920x1080 thumbnails**
2. Set to **"Hide from Vimeo"** (unlisted)
3. Enable **"Allow downloads"** for clients
4. Use **password protection** for sensitive content

### For YouTube:
1. Set to **"Unlisted"** (not private)
2. Upload **custom thumbnail** (1280x720)
3. Add **detailed descriptions**
4. Use **playlists** to organize

---

## 🚀 **Ready?**

1. Choose platform (Vimeo recommended)
2. Upload videos
3. Get IDs
4. Update `/app/work/page.tsx`
5. Add thumbnails (if Vimeo)
6. Test and deploy!

**Need help?** Check the code comments in `VideoCard.tsx`!
