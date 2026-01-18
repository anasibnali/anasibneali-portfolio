# Portfolio Setup Guide

## Your Portfolio is Ready! 🎉

Your modern, professional portfolio website is now complete and running at: **http://localhost:3000**

## What's Included

### Sections
1. **Hero Section** - Your name, title, and introduction with animated elements
2. **About & Skills** - Professional bio with tabbed skills showcase (Frontend, Backend, Database, Tools)
3. **Projects** - Your 4 main projects with detailed descriptions:
   - SpeedXpress (Logistics Management)
   - Key Smart (E-commerce Marketplace)
   - Swipy (Digital Service Provider)
   - Selosia Official (Business Website)
4. **Education & Courses** - Your academic background and professional courses
5. **Contact** - Multiple ways to reach you with beautiful cards

### Features
- **Dark/Light Theme Toggle** - Saves user preference in localStorage
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Works perfectly on all devices
- **SEO Optimized** - Proper meta tags and descriptions
- **Fast Performance** - Built with Next.js 14

### Design Highlights
- **Fonts**: Syne (headings), Manrope (body), JetBrains Mono (code)
- **Colors**: Cyan/Teal accent (#06b6d4) - unique and professional
- **Animations**: Floating elements, staggered reveals, smooth transitions
- **Layout**: Clean, asymmetric compositions with generous spacing

## Commands

```bash
# Development server (already running)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Next Steps

### 1. Test Your Portfolio
Open http://localhost:3000 and:
- Try the dark/light theme toggle
- Navigate through all sections
- Test all project links
- Check responsiveness by resizing your browser
- Click on social media links

### 2. Customize (Optional)
- **Update Projects**: Edit `src/app/page.tsx` lines 15-48
- **Change Colors**: Modify `tailwind.config.js` lines 11-26
- **Add More Skills**: Edit `src/app/page.tsx` lines 8-13
- **Update Social Links**: Change URLs in the contact section

### 3. Deploy to Production

#### Option A: Vercel (Recommended - Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd C:\Users\anasm\portfolio
vercel

# Follow the prompts - it will give you a live URL!
```

#### Option B: Netlify
1. Sign up at https://netlify.com
2. Run `npm run build`
3. Drag the `.next` folder to Netlify drop zone

#### Option C: GitHub Pages (requires export)
1. Add to `next.config.js`: `output: 'export'`
2. Run `npm run build`
3. Deploy the `out` folder

### 4. Connect Your Domain (Optional)
Once deployed, you can connect a custom domain like:
- anasali.dev
- anasibnali.com

## Troubleshooting

**Port already in use?**
```bash
# Kill the process on port 3000
npx kill-port 3000
npm run dev
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## File Structure
```
portfolio/
├── src/
│   ├── app/
│   │   ├── context/
│   │   │   └── ThemeContext.tsx  # Theme management
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout with fonts
│   │   └── page.tsx              # Main portfolio content
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## Your Social Links
- GitHub: https://github.com/anasibnali
- LinkedIn: https://www.linkedin.com/in/anasibnali
- Email: anasmahmud523@gmail.com

## Tips
- Keep your GitHub repositories public and well-documented
- Add README files to all your projects
- Regularly update your portfolio with new projects
- Consider adding a blog section in the future
- Add Google Analytics to track visitors

---

**Need Help?**
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
