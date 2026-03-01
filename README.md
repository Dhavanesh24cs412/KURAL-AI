# KURAL-AI

This is the primary landing page of the KURAL-AI project - a modern React-based web application built with Vite, Tailwind CSS, and Base44 SDK.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhavanesh24cs412/KURAL-AI.git
   cd KURAL-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the `.env` file and configure the required environment variables
   ```bash
   cp .env .env.local
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
KURAL-AI/
├── public/                 # Static assets
├── src/                    # Source files
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── styles/             # CSS/Tailwind styles
│   └── App.jsx             # Main application component
├── .env                    # Environment variables
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── jsconfig.json           # JavaScript configuration
├── package.json            # Project dependencies & scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run typecheck` | Run TypeScript type checking |

## 🧰 Tech Stack

### Frontend Framework
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Class Variance Authority** - Component variant management

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **shadcn/ui** inspired components

### State Management & Data Fetching
- **TanStack Query (React Query)** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Additional Libraries
- **Base44 SDK** - Backend integration
- **Stripe** - Payment processing
- **Recharts** - Data visualization
- **React Markdown** - Markdown rendering
- **Date-fns** - Date utilities
- **Lodash** - Utility functions

## ⚙️ Configuration

### Tailwind CSS
Customize your design system in `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Vite
Configure build options in `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 🔧 Development Guidelines

### Code Style
- Follow ESLint rules (configured in `eslint.config.js`)
- Use meaningful component and variable names
- Keep components small and focused
- Write comments for complex logic

### Component Structure
```jsx
import React from 'react'
import PropTypes from 'prop-types'

export const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div className="container">
      {/* JSX */}
    </div>
  )
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
}
```

### Git Workflow
1. Create a new branch for features/fixes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
3. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

## 🚢 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change port in vite.config.js or use:
npm run dev -- --port 3000
```

**Dependency issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Check for TypeScript errors
npm run typecheck

# Fix linting issues
npm run lint:fix
```

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Base44 SDK](https://docs.base44.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Dhavanesh V** - *Initial work* - [@Dhavanesh24cs412](https://github.com/Dhavanesh24cs412)

## 🙏 Acknowledgments

- Base44 team for the SDK
- Open source community for amazing libraries
- All contributors

---

**Happy Coding! 🎉**
