# 🎨 Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with vanilla HTML, CSS, and JavaScript featuring dynamic animations, dark mode, and interactive elements.

![Portfolio Preview](images/preview.png)

## ✨ Features

- **🌓 Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **⌨️ Dynamic Typing Animation** - Rotating phrases that showcase interests and skills
- **🎯 Interactive Particles** - Mouse-responsive floating background elements
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎭 3D Hover Effects** - Tilt effects on project cards and smooth animations
- **📬 Contact Form** - Integrated with Formspree for direct messaging
- **🎨 Modern Design** - Gradient accents, smooth transitions, and polished UI

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom properties, animations, flexbox, and grid
- **JavaScript (ES6+)** - DOM manipulation, event handling, and animations
- **Font Awesome** - Icon library
- **Google Fonts** - JetBrains Mono & Quicksand typography
- **Formspree** - Form backend service

## 📂 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with animations and responsive design
├── script.js           # JavaScript for interactions and animations
├── images/             # Image assets
│   ├── image1.jpg      # Profile photo
│   └── ...
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your machine
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rqin0113/portfolio.git
   cd portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js with http-server
   npx http-server
   ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (or whichever port your server uses)

## 🎨 Customization

### Update Personal Information

1. **Profile Photo**: Replace `images/image1.jpg` with your photo
2. **Contact Info**: Update email and LinkedIn URL in `index.html`
3. **Projects**: Modify the projects section with your own projects
4. **Skills**: Add or remove skills in the skills section

### Change Color Scheme

Edit the CSS variables in `styles.css`:

```css
:root {
  --accent-primary: #ff6b6b;      /* Main accent color */
  --accent-secondary: #4ecdc4;    /* Secondary accent */
  --accent-tertiary: #ffe66d;     /* Tertiary accent */
  /* ... */
}
```

### Modify Typing Animation

Update the phrases in `script.js`:

```javascript
const phrases = [
  'building cool stuff 💻',
  'data science 📊',
  // Add your own phrases here
];
```

## 📤 Deployment

### Deploy to GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select `main` branch as source
   - Your site will be live at `https://rqin0113.github.io/portfolio/`

### Deploy to Netlify

1. Create account at [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Deploy!

### Deploy to Vercel

1. Create account at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## 🔄 Updating Your Portfolio

### Making Changes

```bash
# 1. Make your changes to the files
# 2. Stage the changes
git add .

# 3. Commit with a descriptive message
git commit -m "Update projects section with new work"

# 4. Push to GitHub
git push origin main
```

### Common Updates

**Adding a New Project:**
```html
<div class="project-card">
  <div class="project-icon">
    <i class="fa-solid fa-your-icon"></i>
  </div>
  <h3 class="project-title">Project Name</h3>
  <p class="project-description">Description here...</p>
  <div class="project-tags">
    <span class="project-tag">Tech1</span>
    <span class="project-tag">Tech2</span>
  </div>
  <div class="project-links">
    <a href="your-github-url" class="project-link">
      <i class="fa-brands fa-github"></i>
      View Code
    </a>
  </div>
</div>
```

**Adding a New Skill:**
```html
<div class="skill-tag">New Skill</div>
```

## 📝 Contact Form Setup

The contact form uses Formspree. To set up your own:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace the form action URL in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🐛 Troubleshooting

**Images not loading:**
- Check that image paths are correct
- Ensure images are in the `images/` directory

**Animations not working:**
- Clear browser cache
- Check browser console for JavaScript errors

**Form not submitting:**
- Verify Formspree endpoint is correct
- Check network tab in browser DevTools

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Riza Qin**
- GitHub: [@rqin0113](https://github.com/rqin0113)
- LinkedIn: [Riza Qin](https://www.linkedin.com/in/riza-qin-99990a28a/)
- Email: riza2022sz@outlook.com

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Formspree for form handling
- Inspiration from modern portfolio designs

## 🔮 Future Enhancements

- [ ] Add blog section
- [ ] Implement project filtering by technology
- [ ] Add more animations and micro-interactions
- [ ] Include testimonials section
- [ ] Add downloadable resume

---

⭐ If you found this helpful, please consider giving it a star!

Built with ❤️ by Riza Qin