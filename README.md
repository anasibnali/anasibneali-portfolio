# Anas Ibne Ali - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development projects and skills.

## Features

- 🎨 Clean, modern design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Framer Motion for fluid animations
- 🎯 Optimized for performance and SEO
- 🌐 Easy to customize and deploy

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne, Manrope, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be easily deployed to:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## Customization

### Updating Content

Edit `src/app/page.tsx` to update:
- Personal information
- Project details
- Skills and technologies
- Contact information

### Changing Colors

Modify the color scheme in `tailwind.config.js`:
```js
colors: {
  cream: '#fafaf7',
  charcoal: '#1a1a1a',
  accent: '#0ea5e9', // Change this for different accent color
}
```

### Adding New Projects

Add new project objects to the `projects` array in `src/app/page.tsx`:
```js
{
  title: 'Project Name',
  subtitle: 'Project Type',
  description: 'Project description...',
  tech: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  featured: true,
}
```

## License

MIT License - feel free to use this portfolio as a template for your own!

## Contact

- Email: anasmahmud523@gmail.com
- GitHub: [@anasibnali](https://github.com/anasibnali)
- LinkedIn: [Anas Ibne Ali](https://www.linkedin.com/in/anasibnali)
