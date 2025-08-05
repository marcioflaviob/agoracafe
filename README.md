# Agora Café - Professional Single Page Website

A modern, minimalist, and professional single-page website for a café in Groningen, Netherlands. Built with React, Vite, Tailwind CSS, and Sanity CMS for easy content management.

## 🎨 Design Features

- **Professional & Minimalist Design**: Clean, modern layout with careful attention to typography and spacing
- **Custom Color Palette**: Carefully selected colors that reflect the café's warm and welcoming atmosphere
  - Almond (#d6bd98) - Primary accent color
  - Matcha (#677d6a) - Secondary color
  - Forest (#40534c) - Tertiary color  
  - Eclipse (#1a3636) - Dark accent color
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Subtle transitions and hover effects for enhanced user experience
- **Accessibility**: Proper contrast ratios and semantic HTML structure

## 🌟 Key Sections

- **Hero Section**: Eye-catching introduction with café name and call-to-action
- **About Section**: Story and values with feature highlights
- **Specialties**: Showcase of signature drinks and food items
- **Gallery**: Interactive image gallery with lightbox functionality
- **Contact**: Location, hours, and contact information
- **Footer**: Additional navigation and social media links

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 7, Tailwind CSS 4
- **CMS**: Sanity.io for content management
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Build Tool**: Vite with optimized production builds

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/agoracafe.git
   cd agoracafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Sanity dependencies**
   ```bash
   cd sanity
   npm install
   cd ..
   ```

### Development

1. **Start the website development server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173/agoracafe/`

2. **Start the Sanity Studio (in a new terminal)**
   ```bash
   cd sanity
   npm run dev
   ```
   Sanity Studio will be available at `http://localhost:3333/`

## 📝 Content Management

### Adding Content via Sanity Studio

1. Open Sanity Studio at `http://localhost:3333/`
2. Add content using the following document types:

#### Café Information
- Basic information about the café (name, tagline, description)
- Contact details (address, phone, email)
- Social media links
- Menu URL
- Hero image

#### Opening Hours
- Set opening and closing times for each day
- Mark days as closed if needed

#### Specialties
- Add signature drinks and food items
- Include descriptions, prices, and images
- Set display order

#### Gallery
- Upload high-quality images
- Add titles and alt text for accessibility
- Set display order

### Sample Data
Check `SAMPLE_DATA.md` for example content to get started quickly.

## 🌍 Deployment

### Deploy to GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Custom Domain (Optional)
To use a custom domain, add a `CNAME` file to the `public` directory with your domain name.

### Environment Variables
For production, you may want to set:
- `VITE_SANITY_PROJECT_ID`: Your Sanity project ID
- `VITE_SANITY_DATASET`: Your Sanity dataset name

## 🎨 Customization

### Colors
The color palette is defined in `src/index.css` using CSS custom properties. You can easily modify:
- `--color-almond`: Primary accent color
- `--color-matcha`: Secondary color
- `--color-forest`: Tertiary color
- `--color-eclipse`: Dark accent color

### Typography
The website uses Inter font family. You can change this in the CSS or add Google Fonts for different typography.

### Layout
Components are modular and easy to customize:
- `src/components/Header.jsx` - Navigation
- `src/components/Hero.jsx` - Main hero section
- `src/components/About.jsx` - About section
- `src/components/Specialties.jsx` - Menu highlights
- `src/components/Gallery.jsx` - Image gallery
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer

## 📱 Features

- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Fast loading times
- ✅ Progressive Web App ready
- ✅ Content management via Sanity
- ✅ Image optimization
- ✅ Smooth scrolling navigation
- ✅ Interactive gallery with lightbox
- ✅ Social media integration
- ✅ Contact information display
- ✅ Opening hours management
- ✅ Professional animations and transitions

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support or questions about this project, please contact:
- Email: [your-email@example.com]
- GitHub Issues: [Repository Issues](https://github.com/yourusername/agoracafe/issues)

---

Made with ❤️ for the coffee community in Groningen, Netherlands+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
