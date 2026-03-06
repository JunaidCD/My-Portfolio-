# Portfolio Website

A modern, interactive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a full-stack backend for dynamic content management.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible component primitives
- **React Query** - Data fetching
- **wouter** - Routing

### Backend
- **Express.js** - Web server
- **Drizzle ORM** - Database ORM
- **SQLite (better-sqlite3)** - Database
- **Express Session** - Session management

## 📁 Project Structure

```
portfolio/
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── sections/      # Page sections (Hero, About, Skills, etc.)
│   │   │   ├── ui/            # Reusable UI components
│   │   │   ├── Navbar.tsx     # Navigation component
│   │   │   ├── Footer.tsx     # Footer component
│   │   │   └── ...
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   ├── App.tsx            # Main app component
│   │   └── index.css          # Global styles
│   └── public/                # Static assets
├── server/                    # Backend server
│   ├── index.ts               # Server entry point
│   ├── routes.ts              # API routes
│   ├── db.ts                  # Database configuration
│   ├── storage.ts             # Storage utilities
│   └── vite.ts                # Vite configuration
├── shared/                    # Shared code
│   ├── routes.ts              # Shared route definitions
│   └── schema.ts              # Database schema
├── script/                    # Build scripts
├── package.json               # Root package.json
├── tailwind.config.ts         # Tailwind configuration
├── vite.config.ts             # Vite configuration
└── tsconfig.json              # TypeScript configuration
```

## ✨ Features

- **Interactive Hero Section** - Animated introduction with terminal-style effects
- **About Section** - Personal bio with reveal animations
- **Skills Display** - Technical skills with visual representations
- **Projects Gallery** - Showcase of projects with details
- **Achievements** - Certificates and achievements display
- **Contact Form** - Functional contact form with EmailJS integration
- **Stats Section** - Animated statistics display
- **Responsive Design** - Fully responsive across all devices
- **Dark/Light Theme** - Theme support with next-themes
- **Smooth Animations** - Framer Motion powered animations
- **Interactive Background** - Animated background effects

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🚴 Running the Project

### Development Mode
```bash
npm run dev
```
This starts the development server at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run start
```

### Type Checking
```bash
npm run check
```

## 📝 Configuration

### Database
The project uses SQLite with Drizzle ORM. Database migrations are handled via Drizzle Kit:
```bash
npm run db:push
```

### Environment Variables
Create a `.env` file in the root directory if needed for custom configuration.

## 🎨 Customization

### Adding New Sections
1. Create a new component in `client/src/components/sections/`
2. Import and add to the relevant page in `client/src/pages/`
3. Add navigation link in `Navbar.tsx`

### Modifying Styles
- Global styles: `client/src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles are in their respective files

### Adding Projects
Update the projects data in `client/src/components/sections/Projects.tsx`

### Adding Skills
Update the skills data in `client/src/components/sections/Skills.tsx`

## 🚀 Deployment to Vercel

Deploy your portfolio to Vercel with ease. Vercel provides free hosting and CDN for static sites.

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? **Your Vercel account**
   - Link to existing project? **No**
   - Project name: **your-portfolio-name**
   - Directory? **.**
   - Want to modify settings? **No** (build command and output dir are already configured)

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure settings:
   - Framework Preset: **Vite**
   - Build Command: **npm run build**
   - Output Directory: **dist/public**
6. Click "Deploy"

### Option 3: Deploy via Drag and Drop

1. Build your project:
```bash
npm run build
```
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New..." → "Project"
4. Select "From Drag & Drop"
5. Drag the `dist/public` folder to the drop area
6. Your site will be deployed instantly

### Environment Variables

If your portfolio uses environment variables, configure them in Vercel:
1. Go to your project settings in Vercel Dashboard
2. Navigate to "Environment Variables"
3. Add your variables (e.g., EmailJS public key, database credentials)

### Custom Domain

To add a custom domain:
1. Go to project Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Follow the instructions to configure DNS records

## 📄 License

MIT License - feel free to use this project for your own portfolio.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
