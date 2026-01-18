# Frontend - MENGA MAGZUNA

A beautiful landing page for MENGA MAGZUNA consulting services built with Tailwind CSS and GSAP animations.

## Features

✨ **Modern Design**

- Responsive layout with Tailwind CSS
- Beautiful animations with GSAP and ScrollTrigger
- AOS (Animate On Scroll) library integration
- Font Awesome icons

📱 **Sections**

- Hero section with compelling headline
- Services showcase
- Portfolio/Projects gallery
- Testimonials section
- Contact information
- Social media links

🎨 **Animations**

- Smooth scroll animations
- On-scroll reveal effects
- Interactive hover states
- Smooth navigation

## Running Locally

1. Open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 3001

# Using Node.js http-server
npx http-server -p 3001

# Using VS Code Live Server extension
Right-click on index.html → Open with Live Server
```

2. The frontend will be available at `http://localhost:3001`

## Backend Connection

The frontend is configured to connect to the backend API at `http://localhost:3000/api`.

Make sure the backend is running:

```bash
cd backend
npm run dev
```

## Project Structure

```
joncarter/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── mobile.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── README.md
```

## Technologies Used

- **HTML5** - Markup
- **Tailwind CSS** - Styling
- **GSAP** - Advanced animations
- **AOS** - Scroll animations
- **Font Awesome** - Icons
- **Vanilla JavaScript** - Interactivity

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Newsletter subscription form
- [ ] Contact form with backend integration
- [ ] Blog section
- [ ] Client testimonials with ratings
- [ ] Team members showcase
- [ ] Multi-language support

## License

MIT
