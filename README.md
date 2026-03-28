# PrimeStore - Digital Products Marketplace

A modern, fully-featured storefront for hosting and selling digital products including courses, templates, plugins, and e-books.

## 🌟 Features

### Pages & Sections
- **Welcome Page (Home)** - Hero section with featured products and key features
- **Product Listing** - Browse all products with filtering and sorting
- **Product Details** - Comprehensive product information with specifications
- **Shopping Cart** - Manage items with quantity controls
- **Checkout** - Multi-step checkout with customer information and payment options
- **Order Confirmation** - Order summary and download links
- **About Page** - Company story, mission, values, and team information
- **FAQ Page** - Searchable frequently asked questions
- **Contact Page** - Contact information and inquiry form
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### E-commerce Features
- ✨ Instant product downloads
- 🛒 Shopping cart with persistent storage
- 💳 Multiple payment options (Card, PayPal, Apple Pay, Google Pay)
- 🔒 Secure checkout process
- ⭐ Product ratings and reviews
- 🔍 Advanced filtering and search
- 📊 Sortable product listings
- 💾 Wishlist functionality
- 📧 Order confirmation emails
- 🎯 Category-based browsing

## 📋 Tech Stack

- **Frontend**: React 17, React Router DOM, Styled Components
- **Backend**: Node.js, Express.js
- **Payment Integration**: Stripe, PayPal (ready for integration)
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Styling**: Styled Components with responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PrimeStoreUI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

### Running Both Frontend and Backend

1. **Using concurrently (both at once)**
   ```bash
   npm run dev
   ```

2. **Or separately:**
   - **Frontend**: `npm start` (runs on port 3000)
   - **Backend**: `npm run server` (runs on port 5000)

## 📁 Project Structure

```
PrimeStoreUI/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   └── ProductCard.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ProductsPage.js
│   │   ├── ProductDetailPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── OrderConfirmationPage.js
│   │   ├── AboutPage.js
│   │   ├── FAQPage.js
│   │   └── ContactPage.js
│   ├── utils/
│   │   └── CartContext.js (State management)
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── data/
│   │   └── products.js (Product data & FAQ)
│   ├── App.js
│   └── index.js
├── server/
│   └── index.js (Express backend)
├── package.json
└── README.md
```

## 🎨 Customization

### Change Brand Colors
Edit `GlobalStyles.js` to modify the primary color (#6C5CE7) and other theme colors.

### Update Products
Edit `src/data/products.js` to add, modify, or remove products:
```javascript
{
  id: 1,
  name: "Product Name",
  category: "Courses",
  price: 49.99,
  image: "image-url",
  description: "Short description",
  longDescription: "Detailed description",
  rating: 4.8,
  reviews: 234,
  downloadSize: "2.5 GB",
  format: "Video Course + Resources"
}
```

### Update FAQ
Edit the `faqItems` in `src/data/products.js`:
```javascript
{
  id: 1,
  question: "Your question here?",
  answer: "Your answer here."
}
```

## 💳 Payment Integration

The checkout page supports multiple payment methods:
1. **Credit/Debit Card** - Basic form validation ready for Stripe
2. **PayPal** - Integration endpoint ready
3. **Apple Pay** - Ready for integration
4. **Google Pay** - Ready for integration

### To integrate Stripe:
1. Sign up at [Stripe.com](https://stripe.com)
2. Get your API keys
3. Install Stripe React library: `npm install @stripe/react-stripe-js @stripe/js`
4. Update the checkout form with Stripe Elements

## 🔐 Security Features

- Secure form validation
- CORS enabled on backend
- Cart data persisted in localStorage (client-side)
- Payment data ready for PCI compliance
- HTTPS ready for production

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🎯 Future Enhancements

- User authentication and accounts
- Database integration (MongoDB/PostgreSQL)
- Real payment processing with Stripe
- Email notifications with SendGrid/Mailgun
- Admin dashboard for product management
- Reviews and ratings system
- Wishlist persistence
- Coupon/discount codes
- Analytics and reporting
- Multi-language support
- Dark mode theme

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or issues, please contact support@primestore.com or use the contact form on the website.

---

**Happy Selling! 🚀**
- User authentication
- Product management
- Order processing

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Des-dee/PrimeStoreUI.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

### Usage
- Navigate to the homepage to view products.
- Use the admin panel to manage inventory and orders.

### Contributing
To contribute to this project, please fork the repository and create a pull request.