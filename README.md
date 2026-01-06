# Fliplug Premium Website

A premium, content-rich website for Fliplug's identity verification, fraud detection, and payment gateway services.

## Features

- **Customer Portal**: Comprehensive dashboard with transaction management, verification services, and account settings
- **Fraud Detection**: AI-powered fraud detection with real-time analysis and risk scoring
- **Payment Gateway**: Secure payment processing with support for multiple payment methods
- **Identity Verification**: Complete verification services for:
  - Email addresses
  - Phone numbers
  - Physical addresses
  - Social Security Numbers (SSN)

## File Structure

```
website_v3/
├── index.html                  # Main landing page
├── customer-portal.html        # Customer dashboard and portal
├── fraud-detection.html        # Fraud detection service page
├── payment-gateway.html        # Payment gateway service page
├── identity-verification.html  # Identity verification services page
├── styles.css                  # Main stylesheet
├── script.js                   # JavaScript functionality
└── README.md                   # This file
```

## Getting Started

1. Open `index.html` in a web browser
2. Navigate through the different pages using the navigation menu
3. All pages are fully functional with interactive demos

## Pages Overview

### Home Page (index.html)
- Hero section with company overview
- Feature highlights
- How it works section
- Call-to-action sections

### Customer Portal (customer-portal.html)
- Dashboard with statistics and recent activity
- Transaction management
- Identity verification services overview
- Payment method management
- Account settings
- API key management

### Fraud Detection (fraud-detection.html)
- Service overview and features
- Interactive fraud detection demo
- Integration examples
- Statistics and performance metrics

### Payment Gateway (payment-gateway.html)
- Supported payment methods
- Payment processing demo
- Pricing information
- Integration examples

### Identity Verification (identity-verification.html)
- Tabbed interface for different verification types
- Interactive verification demos for:
  - Email verification
  - Phone verification
  - Address verification
  - SSN verification
- Integration examples

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: Interactive functionality and form validation
- **Font Awesome**: Icons library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Features

### Interactive Demos
All service pages include interactive demo forms that simulate API responses:
- Email verification with format and domain checking
- Phone verification with SMS/voice options
- Address verification with standardization
- SSN verification with secure validation
- Fraud detection with risk scoring
- Payment processing with card validation

### Modern UI/UX
- Gradient backgrounds and modern color schemes
- Smooth animations and transitions
- Card-based layouts
- Professional typography
- Intuitive navigation

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Content
All content is in the HTML files and can be easily modified.

## Notes

- This is a frontend-only implementation (HTML, CSS, JavaScript)
- Form submissions are simulated for demonstration purposes
- For production use, integrate with actual backend APIs
- All validation logic is client-side for demo purposes

## License

© 2024 Fliplug. All rights reserved.

