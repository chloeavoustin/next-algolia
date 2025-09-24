# Quick Setup Guide

This guide will help you get the Next.js Algolia E-commerce application running in under 5 minutes.

## ⚡ Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)
- Algolia account (free tier available)

## Step-by-Step Setup

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
   - In your Algolia dashboard, go to **Settings > API Keys**
   - Copy your **Application ID** (starts with a letter, e.g., "AB1C2D3E4F")
   - Copy your **Search-Only API Key** (read-only key for frontend searches)
   - ⚠️ **Important**: Never use your Admin API Key in frontend code

3. **Create Index**
   - Go to **Search > Indices** in your dashboard
   - Click "Create Index"
   - Name it in accordance with `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`
   - The index will be empty initially - we'll populate it in step 5

### 3. Configure Environment Variables

1. **Create Environment File**

```bash
# Copy example environment file
cp .env.example .env.local
```

2. Update `.env.local` with your Algolia credentials:

```env
NEXT_PUBLIC_ALGOLIA_APP_ID=YourAppId
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=YourSearchKey
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=products
```

⚠️ **Security Note**: These variables are prefixed with `NEXT_PUBLIC_` so they're accessible in the browser. Only use search-only keys, never admin keys.

### 4. Algolia Index Structure

Your Algolia index should contain records with the following structure:

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

Your index needs product data to work. Here are several ways to add sample data:

**Method 1: Algolia Dashboard (Easiest)**

1. Go to your index in Algolia dashboard
2. Click "Add records"
3. Upload JSON file or add records manually using the structure above

**Method 2: Sample Data File**
Create a `sample-products.json` file:

```json
[
  {
    "objectID": "nike-air-max-1",
    "name": "Nike Air Max 90",
    "category": "Sneakers",
    "price": 120,
    "image": "https://via.placeholder.com/400x400/000000/FFFFFF?text=Nike+Air+Max",
    "images": [
      "https://via.placeholder.com/400x400/000000/FFFFFF?text=Nike+Air+Max+1",
      "https://via.placeholder.com/400x400/000000/FFFFFF?text=Nike+Air+Max+2"
    ],
    "sizes": ["38", "39", "40", "41", "42", "43"],
    "description": "Classic Nike Air Max sneakers with visible air cushioning",
    "gender": "unisex",
    "availability": "in_stock",
    "sku": "NIKE-AM90-001"
  },
  {
    "objectID": "adidas-ultraboost-1",
    "name": "Adidas Ultraboost 22",
    "category": "Running",
    "price": 180,
    "image": "https://via.placeholder.com/400x400/000000/FFFFFF?text=Adidas+Ultraboost",
    "images": [
      "https://via.placeholder.com/400x400/000000/FFFFFF?text=Adidas+UB+1"
    ],
    "sizes": ["38", "39", "40", "41", "42"],
    "description": "Premium running shoes with responsive Boost cushioning",
    "gender": "unisex",
    "availability": "in_stock",
    "sku": "ADIDAS-UB22-001"
  }
]
```

**Method 3: Algolia CLI**

```bash
# Install Algolia CLI
npm install -g @algolia/cli

# Upload your JSON file
algolia objects import your-sample-products.json -a YOUR_APP_ID -k YOUR_ADMIN_KEY -n products
```

**⚠️ Important**: You need at least 5-10 products for the application to work properly with filters.

### 6. Configure Index Settings

Configure your Algolia index for optimal search performance:

1. **Searchable Attributes** (in order of importance):

   ```
   1. name
   2. category
   3. description
   4. gender
   5. sku
   ```

2. **Attributes for Faceting** (enable filtering):
   ```
   - category (searchable)
   - gender (searchable)
   - sizes (searchable)
   ```

**Note**: The application expects these specific attribute names and configurations to work properly with filters and search.

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
