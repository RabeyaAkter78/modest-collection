# Modest Collection

A modern, elegant e-commerce website focused on modest wear, built with Next.js, Tailwind CSS, and React.

## 🌐 Live Demo

[https://modest-collection.vercel.app/](https://modest-collection.vercel.app/)

## ✨ Features

- **Modern UI/UX**: Clean, minimal, and visually appealing design
- **Responsive Design**: Fully responsive across all devices
- **Product Categories**: Browse by category (Borkha, Abaya, Hijab, Inner Cap)
- **Product Details**: Detailed product pages with image galleries
- **Shopping Cart**: Add to cart with quantity management
- **Checkout**: Complete checkout with multiple payment methods (bKash, Cash on Delivery)
- **Wishlist**: Save favorite products
- **Animations**: Smooth scroll animations with AOS
- **Sliders**: Interactive carousels with Swiper.js

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Lucide React
- **Animations**: AOS (Animate On Scroll)
- **Sliders**: Swiper.js
- **Icons**: Lucide React

## 📁 Project Structure

```
modest-collection/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (site)/            # Site routes
│   │   ├── about/             # About page
│   │   ├── abaya/             # Abaya category page
│   │   ├── borkha/            # Borkha category page
│   │   ├── cart/              # Shopping cart page
│   │   ├── checkout/          # Checkout page
│   │   ├── contact/           # Contact page
│   │   ├── hijab/             # Hijab category page
│   │   ├── inner-cap/         # Inner Cap category page
│   │   ├── product/[id]/      # Product details page (dynamic)
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── providers.tsx      # Context providers
│   ├── components/            # Reusable components
│   │   ├── AOSInit.tsx        # AOS initialization
│   │   ├── BackButton.tsx     # Back navigation button
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Gallery.tsx        # Image gallery
│   │   ├── HeroBanner.tsx     # Hero section
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── ProductGrid.tsx    # Product grid layout
│   │   ├── Testimonials.tsx   # Testimonials section
│   │   └── WhyChooseUs.tsx    # Features section
│   ├── context/               # React contexts
│   │   ├── CartContext.tsx    # Shopping cart state
│   │   └── WishlistContext.tsx # Wishlist state
│   ├── data/                  # Static data
│   │   └── products.ts        # Product data
│   ├── images/                # Image assets
│   ├── server/                # API routes
│   └── types/                 # TypeScript types
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modest-collection.git
cd modest-collection
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📦 Key Dependencies

- `next`: React framework for production
- `react`: React library
- `tailwindcss`: Utility-first CSS framework
- `aos`: Animate on scroll library
- `swiper`: Touch slider library
- `lucide-react`: Icon library
- `bcryptjs`: Password hashing
- `jsonwebtoken`: JWT authentication
- `zod`: Schema validation

## 🎨 Design Features

- **Color Palette**: Stone/Neutral tones for a clean, elegant look
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent spacing throughout
- **Animations**: Subtle, smooth animations for better UX
- **Accessibility**: Keyboard navigation and screen reader friendly

## 📄 Pages

- **Home**: Hero banner, featured collections, testimonials
- **Categories**: 
  - Borkha (Plain, Regular, Party)
  - Abaya (Casual, Party, Premium)
  - Hijab (Silk, Cotton)
  - Inner Cap (Basic, Premium)
- **Product Details**: Images, size selection, quantity, add to cart
- **Cart**: View and manage cart items
- **Checkout**: Shipping details, payment methods
- **About**: Company information
- **Contact**: Contact form

## 🔧 Configuration

### Image Optimization

The project uses `next/image` for optimized image loading. Local images are imported from the `src/images` directory.

### Environment Variables

Add environment variables to `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_api_url
JWT_SECRET=your_jwt_secret
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For inquiries, please visit [https://modest-collection.vercel.app/contact](https://modest-collection.vercel.app/contact)

---

Built with ❤️ using Next.js and Tailwind CSS
