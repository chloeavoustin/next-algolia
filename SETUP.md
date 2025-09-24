# Quick Setup Guide

This guide will help you get the Next.js Algolia E-commerce application running in under 5 minutes.

## ⚡ Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)
- Algolia account (free tier available)

## 🚀 Step-by-Step Setup

### 1. Clone and Install

```bash
git clone https://github.com/chloeavoustin/next-algolia.git
cd next-algolia
npm install
```

### 2. Set Up Algolia

1. **Create Algolia Account**

   - Go to [Algolia.com](https://www.algolia.com/)
   - Sign up for a free account

2. **Get API Keys**

   - In your Algolia dashboard, go to **API Keys**
   - Copy your **Application ID**
   - Copy your **Search-Only API Key**

3. **Create Index**
   - Go to **Indices** in your dashboard
   - Create a new index (e.g., "products")
   - Note the index name

### 3. Configure Environment

```bash
# Copy example environment file
cp .env.example .env.local

# Edit .env.local with your credentials
```

Update `.env.local` with your Algolia credentials:

```env
NEXT_PUBLIC_ALGOLIA_APP_ID=YourAppId
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=YourSearchKey
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=products
```

### 4. Algolia Index Structure

Your Algolia index should contain products with the following structure:

```json
{
  "objectID": "unique-product-id",
  "name": "Product Name",
  "category": "Category Name",
  "price": 99.99,
  "image": "https://example.com/image.jpg",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "sizes": ["S", "M", "L"],
  "description": "Product description",
  "gender": "unisex",
  "availability": "in_stock",
  "sku": "PROD-123"
}
```

### 5. Add Sample Data to Algolia

Upload sample products to your Algolia index using the structure above.

**Quick way to add sample data:**

- Use Algolia dashboard's "Add records" feature
- Or use their API/CLI tools

### 6. Configure Index Settings

In your Algolia index settings:

1. **Searchable Attributes**:

   - `name` (primary searchable)
   - `category`
   - `description`

2. **Facets for Filtering**:

   - `category`
   - `gender`
   - `sizes`
   - `price` (for range filtering)

3. **Custom Ranking** (optional):
   - `price` (ascending for lower prices first)

### 7. Run the Application

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## ✅ Verify Everything Works

1. **Search**: Try searching for products
2. **Filters**: Use category and other filters
3. **Sorting**: Try different sort options
4. **Product Pages**: Click on products to view details
