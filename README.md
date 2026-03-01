# Krishank Shah - Portfolio

A modern, minimal, and highly performant portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Minimal & Elegant Design** - Clean, professional interface with smooth animations
- **Interactive Algorithm Visualizer** - Live sorting algorithm demonstrations (Bubble, Quick, Merge Sort)
- **Fully Responsive** - Seamless experience across all devices
- **Dark Mode** - Automatic system preference detection
- **Performance Optimized** - Fast load times with Next.js 14 and static generation
- **SEO Ready** - Complete meta tags and Open Graph configuration
- **Type-Safe** - Built with TypeScript for reliability
- **Smooth Animations** - Powered by Framer Motion

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Customization

### Personal Information

Update your details in `lib/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  // ... other social links
};
```

### Projects

Add your projects in `components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["Next.js", "TypeScript"],
    github: "#",
    live: "#",
  },
  // ... more projects
];
```

### Skills

Update your skills in `lib/constants.ts`:

```typescript
export const SKILLS = {
  languages: ["JavaScript", "TypeScript"],
  frontend: ["React", "Next.js"],
  // ... more skills
};
```

### Colors

Customize the color scheme in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #09090b;
  --accent: #3b82f6;
  /* ... other colors */
}
```

## 📧 Contact Form

The contact form API is at `app/api/contact/route.ts`. To enable email notifications:

1. Install an email service (Resend, SendGrid, etc.)
2. Add your API keys to `.env.local`
3. Update the API route to send emails

Example with Resend:

```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ... send email logic
```

## 🎨 Sections

1. **Hero** - Introduction with availability status
2. **Projects** - Showcase your work with live demos
3. **Algorithm Visualizer** - Interactive algorithm demonstrations
4. **Skills** - Your tech stack and statistics
5. **Contact** - Get in touch form

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

### Other Platforms

The portfolio is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any platform supporting Node.js

## 📄 License

MIT License - Feel free to use this portfolio as a template for your own!

## 🙏 Credits

Built by Krishank Shah with ❤️

---

**Note:** Remember to update the resume PDF at `public/files/KrishankShahResume.pdf` and replace project placeholder images in the Projects section.
