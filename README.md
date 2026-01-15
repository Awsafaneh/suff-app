# SuffixSec - Premium Cybersecurity Landing Page

A modern, award-winning landing page for SuffixSec built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark theme with animated gradients and red accents
- 11 premium components with smooth animations
- Glassmorphism effects and modern UI/UX
- Fully responsive design for all devices
- Optimized performance and accessibility
- Scroll-reveal animations with staggered timing

## Tech Stack

- **Next.js 14+** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React** - UI library

## Project Structure

```
suffix-sec-web-app/
├── app/
│   ├── layout.tsx          # Root layout with theme
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & animations
├── components/
│   ├── navbar.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── social-proof.tsx    # Stats/social proof
│   ├── features.tsx        # Features grid
│   ├── solutions.tsx       # Solutions tabs
│   ├── timeline.tsx        # How it works
│   ├── pricing.tsx         # Pricing plans
│   ├── testimonials.tsx    # Customer reviews
│   ├── faq.tsx             # FAQ accordion
│   ├── contact.tsx         # Contact form
│   └── footer.tsx          # Footer
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
├── postcss.config.js       # PostCSS config
├── tailwind.config.ts      # Tailwind config
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/suffix-sec-web-app.git
cd suffix-sec-web-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Components

### Navbar
Navigation header with smooth transitions and theme toggle

### Hero
Main hero section with animated gradients and CTA buttons

### Social Proof
Statistics and key metrics displaying platform credibility

### Features
Grid of core features with icons and descriptions

### Solutions
Tabbed solutions section showing use cases

### Timeline
5-step process timeline explaining how it works

### Pricing
Three-tier pricing plans with comparison features

### Testimonials
Customer testimonials with auto-playing carousel

### FAQ
Expandable FAQ accordion with smooth animations

### Contact
Contact form with validation and messaging

### Footer
Footer with links, social media, and company info

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Or use the one-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/suffix-sec-web-app)

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

## Environment Variables

Create a `.env.local` file (not committed to git):

```
# Add any environment variables needed here
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Code splitting and lazy loading
- CSS-in-JS with Tailwind
- Animations respect `prefers-reduced-motion`

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

Built with attention to detail and modern best practices.

## Support

For issues or questions, please open an issue on GitHub.
