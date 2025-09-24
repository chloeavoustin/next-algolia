# Next.js Algolia E-commerce

[![CI](https://github.com/chloeavoustin/next-algolia/actions/workflows/ci.yml/badge.svg)](https://github.com/chloeavoustin/next-algolia/actions/workflows/ci.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://next-algolia-git-main-chloe-jardins-projects.vercel.app/)

A modern e-commerce application featuring Product Listing Pages (PLP) and Product Detail Pages (PDP) built with Next.js 15, React InstantSearch, and Algolia search.

## Features

- **Instant Search** - Real-time search with Algolia
- **Responsive Design** - Mobile-first with Tailwind CSS
- **Advanced Filtering** - Dynamic faceted search and sorting
- **Product Details** - Comprehensive product pages with image galleries
- **Server-Side Rendering** - Optimized for performance and SEO
- **Tested** - Unit tests with Vitest and React Testing Library
- **CI/CD Ready** - Automated testing and deployment pipeline

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Search**: Algolia Search, React InstantSearch
- **Testing**: Vitest, React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Code Quality**: ESLint

## Quick Start

```bash
# Clone the repository
git clone https://github.com/chloeavoustin/next-algolia.git
cd next-algolia

# Install dependencies
npm install

# Set up environment variables (see SETUP.md)
cp .env.example .env.local

# Start development server
npm run dev
```

For detailed setup instructions, see [SETUP.md](SETUP.md)

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page (redirects to /products)
│   ├── products/         # Products listing and detail pages
│   └── api/              # API routes for revalidation
├── components/           # Reusable React components
│   ├── algolia/          # Algolia-specific components
│   ├── product/          # Product-related components
│   ├── sidebar/          # Search and filter components
│   └── noResults/        # No results handling
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and services
│   ├── services/         # Business logic
│   └── utils/            # Helper functions
├── constants/            # Application constants
├── styles/               # Global styles
└── type/                 # TypeScript type definitions
```

## Available Scripts

```bash
# Development
npm run dev           # Start development server
npm run build         # Build for production
npm start             # Start production server

# Code Quality
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
npm run type-check    # Run TypeScript type checking

# Testing
npm test              # Run tests
```

## Deploy & Hosting

The application is hosted on [Vercel](https://vercel.com), which provides a simple and fast deployment process.

### Deployment process

1. **Connect the repository to Vercel**  
   The GitHub repository is linked to Vercel to enable continuous deployment (CI/CD).
2. **Add environment variables**  
   In the Vercel dashboard, configure the following environment variables:
   - `NEXT_PUBLIC_ALGOLIA_APP_ID`
   - `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY`
   - `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`

3. **Automatic deployments**  
   On every push, Vercel rebuilds and deploys the application automatically.

## Testing

The project includes unit testing with Vitest:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test src/__tests__/product.test.ts

# Check test coverage
npm run test:coverage
```

## Roadmap & Improvements

### High Priority (Production Critical)

- [ ] **Protect Algolia API key** - Move to server-side or implement secure proxy
- [ ] **Enhanced Error Handling** - Add global error boundary with retry mechanisms
- [ ] **API Rate Limiting** - Add rate limiting for revalidation endpoints
- [ ] **Performance Monitoring** - Implement Core Web Vitals tracking and alerts
- [ ] **Comprehensive Error Pages** - 404, 500, offline pages with proper UX

### Medium Priority (User Experience)

- [ ] **End-to-End Testing** - Add tools for critical user flows
- [ ] **Advanced Caching Strategy** - Implement database for product data instead of Algolia-only
- [ ] **Infinite Scroll/Pagination** - Replace current grid with optimized loading
- [ ] **Loading States** - Add skeleton loaders and better loading indicators
- [ ] **Search Analytics** - Track search queries and user behavior patterns
- [ ] **SEO Optimization** - Add structured data (JSON-LD) and meta improvements
- [ ] **Accessibility Audit** - Complete WCAG compliance

### Low Priority (Nice to Have)

- [ ] **Internationalization (i18n)** - Multi-language support with next-intl
- [ ] **Design System** - Implement Storybook with component documentation
- [ ] **Advanced Analytics** - Custom events tracking with GTM
- [ ] **Advanced Search** - Autocomplete, search suggestions, ...
- [ ] **User Preferences** - Persistent filters with breadcrumb navigation

### Technical Debt & Architecture

- [ ] **State Management** - Implement Zustand/Redux for complex state if needed
- [ ] **Monitoring & Alerting** - Implement Sentry, or similar
- [ ] **Code Coverage** - Define testing standards and integrate coverage reports in CI/CD

### Performance & Scalability

- [ ] **Image Optimization** - use CDN to optimize image on all devices
- [ ] **Bundle Analysis** - Code splitting and optimization
- [ ] **Server-Side Optimization** - Edge functions, ISR improvements
- [ ] **Performance Metrics** - Core Web Vitals monitoring and optimization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<div align="center">
  <p>Built with ❤️ using Next.js and Algolia</p>
  <p>
    <a href="https://nextjs.org">Next.js</a> •
    <a href="https://www.algolia.com">Algolia</a> •
    <a href="https://tailwindcss.com">Tailwind CSS</a>
  </p>
</div>
