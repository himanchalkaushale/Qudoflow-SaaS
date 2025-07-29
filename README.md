# Qudoflow - Team Collaboration Platform

A modern, single-page React landing page for Qudoflow SaaS platform featuring advanced dark theme implementation, interactive UI components, and responsive design.

![Qudoflow Landing Page](https://via.placeholder.com/800x400/000000/FFFFFF?text=Qudoflow+Landing+Page)

## 🚀 Features

- **Modern Dark Theme**: Sleek black design with gradient accents and smooth animations
- **Interactive 3D Icon Cloud**: Rotating tech stack visualization using react-icon-cloud
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Hover effects, transitions, and scroll-based animations
- **Pricing Components**: Enhanced pricing cards with gradient styling and hover effects
- **Hero Section**: Retro grid background with compelling call-to-action
- **Testimonials**: Marquee-style customer testimonials
- **Modern Navigation**: Fixed navigation with smooth scrolling

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern functional components with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **Framer Motion** - Animation library
- **React Icon Cloud** - 3D interactive icon visualization

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Server-side type safety
- **ESM Modules** - Modern JavaScript features

### Styling & UI
- **Radix UI** - Accessible component primitives
- **Lucide React** - Modern icon library
- **Class Variance Authority** - Component variant system
- **Tailwind Animate** - CSS animations

## 📁 Project Structure

```
qudoflow/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/            # Reusable UI components
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── badge.tsx
│   │   │       ├── hero-section-dark.tsx
│   │   │       ├── feature-section-with-hover-effects.tsx
│   │   │       ├── dark-gradient-pricing.tsx
│   │   │       ├── interactive-icon-cloud.tsx
│   │   │       ├── testimonials-with-marquee.tsx
│   │   │       ├── call-to-action.tsx
│   │   │       ├── footer.tsx
│   │   │       └── sparkles.tsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/               # Utility functions
│   │   │   ├── utils.ts
│   │   │   └── queryClient.ts
│   │   ├── pages/             # Page components
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx            # Main app component
│   │   ├── main.tsx           # App entry point
│   │   └── index.css          # Global styles
│   └── index.html             # HTML template
├── server/                     # Backend Express server
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Data storage interface
│   └── vite.ts               # Vite integration
├── shared/                     # Shared types and schemas
│   └── schema.ts             # Data models and validation
├── components.json            # shadcn/ui configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎨 Key Components

### Hero Section
- **File**: `client/src/components/ui/hero-section-dark.tsx`
- Dark theme with retro grid background
- Animated gradient text and call-to-action buttons
- Dashboard preview mockup

### Interactive Icon Cloud
- **File**: `client/src/components/ui/interactive-icon-cloud.tsx`
- 3D rotating visualization of tech stack
- Built with react-icon-cloud and next-themes
- Displays popular development tools and frameworks

### Pricing Section
- **File**: `client/src/components/ui/dark-gradient-pricing.tsx`
- Dark gradient cards with hover animations
- Enhanced buttons with gradient styling
- Smooth motion effects and transitions

### Features Section
- **File**: `client/src/components/ui/feature-section-with-hover-effects.tsx`
- Interactive cards with hover effects
- Icon-based feature showcase
- Responsive grid layout

### Testimonials
- **File**: `client/src/components/ui/testimonials-with-marquee.tsx`
- Marquee-style scrolling testimonials
- Star ratings and customer photos
- Continuous animation loop

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/himanchalkaushale/Qudoflow-SaaS
cd qudoflow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment on Vercel

### Prerequisites
- Vercel account
- GitHub repository (recommended)

### Deployment Steps

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your repository

2. **Configure Build Settings**:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard
   - Ensure they are prefixed with `VITE_` for frontend access

4. **Deploy**:
   - Click "Deploy" and Vercel will automatically build and deploy your application
   - Your app will be available at `https://your-project-name.vercel.app`

### Vercel Configuration (Optional)

Create a `vercel.json` file in the root directory for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Automatic image and font optimization
- **CSS Purging**: Unused CSS removal with Tailwind

## 🔧 Customization

### Styling
- Edit `tailwind.config.ts` for theme customization
- Modify CSS variables in `client/src/index.css`
- Update component styles in respective files

### Content
- Update text content in `client/src/pages/home.tsx`
- Modify pricing plans in `dark-gradient-pricing.tsx`
- Change testimonials in the home page

### Components
- All components are in `client/src/components/ui/`
- Follow the existing pattern for new components
- Use TypeScript interfaces for props

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**:
   ```bash
   Error: listen EADDRINUSE: address already in use 0.0.0.0:5000
   ```
   - Solution: Kill the process using port 5000 or change the port in server configuration

2. **Build Errors**:
   - Ensure all dependencies are installed: `npm install`
   - Check TypeScript errors: `npm run build`

3. **Styling Issues**:
   - Verify Tailwind CSS is properly configured
   - Check for conflicting CSS classes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For support, email support@qudoflow.com or create an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
