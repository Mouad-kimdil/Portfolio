# Portfolio Website

A modern, responsive portfolio website showcasing my skills as a software developer and systems programming student at 1337 Coding School (42 Network).

## 🚀 Features

- **Modern Design**: Dark theme with blue-green gradient color palette
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Gradient text effects and scroll-triggered animations
- **Interactive Timeline**: Professional experience section with timeline layout
- **Contact Form**: Integrated email contact system
- **Performance Optimized**: Built with React and Vite for fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: SCSS with modern CSS features
- **Build Tool**: Vite
- **Animations**: CSS animations and Intersection Observer API
- **Icons**: Emoji icons for visual elements

## 📱 Sections

### 1. Hero Section
- Personal introduction with animated gradient text
- Professional photo with hover effects
- Call-to-action button linking to work section

### 2. What I Do
- Core development areas displayed as interactive cards
- Technologies and skills with GitHub project links
- Glass-morphism design with hover effects

### 3. Experience Timeline
- Professional timeline layout
- 1337 Coding School and freelance experience
- Technology tags and detailed descriptions
- Scroll-triggered animations

### 4. Contact Section
- Contact information display
- Interactive contact form
- Email integration using mailto links
- Professional styling with form validation

## 🎨 Design Features

- **Color Palette**: Dark backgrounds (#0a0a0a, #1a1a1a) with blue (#3b82f6) and green (#10b981) accents
- **Typography**: Responsive clamp() sizing for optimal readability
- **Animations**: Smooth gradient shifts and hover effects
- **Glass-morphism**: Translucent cards with backdrop blur
- **Mobile-First**: Responsive design starting from mobile breakpoints

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Navigate to frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx/.scss
│   │   │   ├── Home.jsx/.scss
│   │   │   ├── WhatIDo.jsx/.scss
│   │   │   ├── Experience.jsx/.scss
│   │   │   └── Contact.jsx/.scss
│   │   ├── assets/
│   │   │   ├── logo.svg
│   │   │   └── me.png
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎯 Key Components

### Navbar
- Responsive navigation with smooth hover effects
- Logo linking to home section
- Navigation links with gradient hover states

### Home Section
- Hero layout with image and content side-by-side
- Animated gradient text for name highlighting
- Professional introduction and call-to-action

### WhatIDo Section
- Grid layout of development skill cards
- Interactive hover effects and GitHub links
- Technology-focused content organization

### Experience Section
- Vertical timeline with gradient line
- Professional experience cards with animations
- Technology tags and detailed descriptions

### Contact Section
- Contact information display
- Functional contact form with email integration
- Professional styling and validation

## 📧 Contact Integration

The contact form uses `mailto:` links to integrate with the user's default email client. When submitted, it opens the email client with:
- Pre-filled recipient (mouad.kimdil7@gmail.com)
- Subject line from form
- Formatted message body with sender details

## 🎨 Customization

### Colors
Main color variables can be updated in SCSS files:
- Primary Blue: `#3b82f6`
- Primary Green: `#10b981`
- Dark Background: `#0a0a0a`
- Light Background: `#1a1a1a`

### Content
Update personal information in component files:
- `Home.jsx`: Personal introduction
- `WhatIDo.jsx`: Skills and development areas
- `Experience.jsx`: Professional experience
- `Contact.jsx`: Contact information

## 📱 Responsive Design

- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Stacked layout with optimized navigation

## ⚡ Performance

- Vite for fast development and optimized builds
- CSS animations for smooth interactions
- Optimized images and assets
- Minimal JavaScript for better performance

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

### Code Style
- Modern React with hooks
- SCSS for styling with BEM methodology
- ES6+ JavaScript features
- Component-based architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mouad Kimdil**
- Location: Marrakech, Morocco
- GitHub: [Mouad-kimdil](https://github.com/Mouad-kimdil)
- School: 1337 Coding School (42 Network)

---
