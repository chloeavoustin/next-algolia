# Next.js Algolia E-commerce

[![CI](https://github.com/chloeavoustin/next-algolia/actions/workflows/ci.yml/badge.svg)](https://github.com/chloeavoustin/next-algolia/actions/workflows/ci.yml)

PLP & PDP built with Next.js 15, React InstantSearch, and Algolia.

## Features

- Instant search functionality with Algolia
- Responsive design with Tailwind CSS
- Advanced filtering and sorting
- Product detailed page
- Server-side rendering
- Unit tests

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Search**: Algolia Search, React InstantSearch
- **Testing**: Vitest, React Testing Library
- **Package Manager**: npm
- **Linting**: ESLint, Prettier

## Quick Start

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

# Complete CI Pipeline
npm run ci            # Run all checks (type-check, lint, format, test, build)
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

[**Live Demo**](https://next-algolia-git-main-chloe-jardins-projects.vercel.app/)

## Testing

The project includes comprehensive testing:

```bash
# Run all tests
npm test

# Run specific test file
npm test src/__tests__/product.test.ts
```

## To improuve

- [ ] Improve SEO with structured data
- [ ] Add internationalization (i18n)
- [ ] Implement advanced analytics
- [ ] Optimize for Core Web Vitals
- [ ] Add a Design System with Storybook
- [ ] Securize api endpoints
- [ ] Add lazy load and infinit scroll on product grid
- [ ] Protect Algolia key
- [ ] Manage error page
- [ ] ...
