# WorldChem Website

A modern, responsive website for WorldChem Sp. z o.o. - a leading chemical raw materials supplier based in Gdańsk, Poland.

[![Live Site](https://img.shields.io/badge/Live-worldchem.pl-blue)](https://worldchem.pl)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Live Demo

Visit the website at: **[worldchem.pl](https://worldchem.pl)**

## Key Features

- **Dynamic Product Search** - Real-time search across all product categories
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Gradient designs, smooth animations, and glass-morphism effects
- **Contact Form** - Integrated form with validation and submission handling
- **Cookie Consent** - GDPR-compliant cookie banner
- **Interactive Elements** - Hover effects, animations, and transitions

## Technologies

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup and structure |
| CSS3 | Custom styling with modern features (Grid, Flexbox, Animations) |
| JavaScript (ES6+) | Product search, form handling, interactive features |
| SVG | Scalable vector graphics for logo and decorative elements |

## Project Structure

```
worldchem/
│
├── index.html                    # Homepage with hero section and featured products
├── oferta.html                   # Main offer page with all categories
├── kontakt.html                  # Contact page with form and company details
├── o-nas.html                    # About us page with company information
│
├── styles.css                    # Main stylesheet with responsive design
├── cookies.css                   # Cookie banner specific styles
├── script.js                     # Core JavaScript functionality
├── cookies.js                    # Cookie consent handling
│
├── LOGO.svg                      # Main company logo
├── LOGO2.svg                     # Alternative logo version
│
├── odtluszczacze.html           # Degreasers category page
├── rozpuszczalniki.html         # Solvents category page
├── profesjonalna-chemia.html    # Professional chemistry page
├── dom-i-ogrod.html             # Home & garden products page
├── surowce-chemiczne.html       # Chemical raw materials page
│
├── polityka.html                # Privacy policy
└── regulamin.html               # Terms and conditions
```

## Design Highlights

### Color Palette
- Primary: Blues (`#4299e1`, `#3182ce`, `#2973cc`)
- Secondary: Grays (`#2d3748`, `#4a5568`, `#718096`)
- Backgrounds: Light gradients (`#f7fafc`, `#edf2f7`, `#e2e8f0`)

### Visual Features
- Gradient overlays and backgrounds
- Backdrop blur effects for depth
- Smooth CSS animations and transitions
- Custom SVG patterns for decorative elements
- Glass-morphism effects on cards and modals
- Hover state interactions throughout

## Responsive Breakpoints

```css
/* Desktop First Approach */
Desktop:  1200px and above
Tablet:   768px - 1199px
Mobile:   Below 768px
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository

2. Open index.html

## Product Search Implementation

The website features a dynamic product search system that:
- Searches across multiple product categories
- Provides instant results as you type
- Links directly to relevant category pages
- Handles Polish language characters correctly

```javascript
// Example from script.js
const products = {
    "odtłuszczacze": [...],
    "rozpuszczalniki": [...],
    // More categories...
};

function searchProducts() {
    // Real-time search implementation
}
```


## Contributing

This is a commercial project for WorldChem Sp. z o.o. Contributions are not currently accepted.

## License

© 2025 WorldChem Sp. z o.o. All rights reserved.
