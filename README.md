# Modern Portfolio Website

A professional, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Beautiful scroll animations and transitions using Framer Motion
- 💅 **Tailwind CSS** - Utility-first CSS for rapid styling
- 📝 **TypeScript** - Type-safe code for better development experience
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or download this project**
   ```bash
   cd portfolio-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy!

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following files to add your information:

**`src/components/Hero.tsx`**
- Change "Your Name" to your actual name
- Update the description and call-to-action
- Update social media links (GitHub, LinkedIn, Email)

**`src/components/Navigation.tsx`**
- Update your name in the navigation logo

**`src/components/Footer.tsx`**
- Update footer information and social links

**`index.html`**
- Change the page title
- Update meta description

### 2. Projects

Edit **`src/components/Projects.tsx`** and replace the projects array with your own projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Description of what you built',
    image: 'your-image-url.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  // Add more projects...
];
```

**Pro tip:** Use free image hosting services like:
- [Unsplash](https://unsplash.com) for project screenshots
- [Imgur](https://imgur.com) for your own images
- Your deployed project's screenshots

### 3. Skills

Edit **`src/components/Skills.tsx`** and update the skills array:

```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      // Add your skills with proficiency levels (0-100)
    ],
  },
  // Add more categories...
];
```

### 4. Services

Edit **`src/components/Services.tsx`** to customize what services you offer.

### 5. About Section

Edit **`src/components/About.tsx`**:
- Replace the profile image URL
- Update your bio and story
- Change "Currently Learning", "Interests", and "Fun Fact" sections

### 6. Contact Information

Edit **`src/components/Contact.tsx`**:
- Update email, phone, and location
- Replace social media URLs

### 7. Color Scheme

To change colors, edit **`src/index.css`** in the `:root` section:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* Change these values to customize colors */
}
```

Or use the gradient-text class which you can modify:

```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change these colors */
}
```

### 8. Images

Replace these images with your own:

**Profile Image** (in About section):
```typescript
// In src/components/About.tsx
<img src="your-image-url.jpg" alt="Profile" />
```

**Project Images**:
- Add your project screenshots to the projects array
- Use high-quality images (800x600px or similar)

## 📁 Project Structure

```
portfolio-project/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/          # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── lib/            # Utility functions
│   │   └── utils.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📝 Making it Your Own

### Quick Checklist

- [ ] Change "Your Name" throughout the project
- [ ] Update social media links (GitHub, LinkedIn, Email)
- [ ] Add your projects with descriptions and links
- [ ] Update skills and proficiency levels
- [ ] Write your personal bio in About section
- [ ] Add your profile photo
- [ ] Update contact information
- [ ] Customize colors to match your brand
- [ ] Add your resume/CV link (optional)
- [ ] Test on mobile devices
- [ ] Deploy to your preferred hosting platform

## 💡 Tips for MERN Stack Students

1. **Understand Each Component**: Take time to read through each component and understand how it works
2. **Experiment**: Try changing colors, layouts, and animations to make it unique
3. **Add More Features**: Consider adding:
   - Blog section
   - Dark mode toggle
   - Resume download button
   - Testimonials section
   - Case studies for projects
4. **Backend Integration**: You can connect a backend for the contact form using Node.js + Express
5. **Learn by Building**: The best way to learn is by building and customizing!

## 🐛 Common Issues

### Port already in use?
```bash
# Kill the process on port 5173
npx kill-port 5173
# Or change the port in vite.config.ts
```

### Dependencies not installing?
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🤝 Contributing

Feel free to modify, enhance, and make it completely your own.

## 📄 License

Free to use for your personal portfolio. Attribution appreciated but not required!

## 🎉 Good Luck!

Remember: This portfolio is a reflection of YOU. Take the time to customize it, add your projects, and make it truly represent your skills and personality. Good luck with your learning journey! 🚀
