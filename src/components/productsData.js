// src/data/productsData.js

// 14 Categories aur unki same image configuration
const categoriesConfig = [
    {
        slug: 'womens-kurta',
        name: "Women's Kurtas",
        prefix: "Women's Embroidered Flared Kurta",
        basePrice: 2490,
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80',
        tags: ['Bestseller', 'Handblock', 'Pure Cotton', 'Festive']
    },
    {
        slug: 'mens-kurtas',
        name: "Men's Kurtas",
        prefix: "Men's Mandarin Collar Silk Kurta",
        basePrice: 1990,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80',
        tags: ['Pure Silk', '100% Linen', 'Khadi', 'Trending']
    },
    {
        slug: 'solid-furniture',
        name: 'Solid Furniture',
        prefix: 'Sheesham Solid Wood Teak Furniture',
        basePrice: 14990,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80',
        tags: ['Sheesham', 'Handcrafted', 'Solid Wood', 'Heirloom']
    },
    {
        slug: 'under-999',
        name: 'Under ₹999 Finds',
        prefix: 'Artisanal Handcrafted Value Decor',
        basePrice: 499,
        image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=500&q=80',
        tags: ['Value Deal', 'Special Offer', 'Handmade', 'Trending']
    },
    {
        slug: 'fantastic-finds',
        name: 'Fantastic Finds',
        prefix: 'Curated Heritage Artisanal Piece',
        basePrice: 3890,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80',
        tags: ['Trending', 'Exclusive', 'Artisan', 'Must Have']
    },
    {
        slug: 'silk-saris',
        name: 'Silk Saris',
        prefix: 'Banarasi Zari Border Pure Silk Saree',
        basePrice: 6990,
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80',
        tags: ['Zari Silk', 'Pure Silk', 'Handloom', 'Wedding Edition']
    },
    {
        slug: 'puja-essentials',
        name: 'Puja Essentials',
        prefix: 'Pure Brass Traditional Sacred Diya',
        basePrice: 890,
        image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=500&q=80',
        tags: ['Pure Brass', 'Temple Craft', 'Sacred', 'Handmade']
    },
    {
        slug: 'lamps',
        name: 'Handcrafted Lamps',
        prefix: 'Hammered Brass Table Accent Lamp',
        basePrice: 3450,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80',
        tags: ['Bestseller', 'Ambient Light', 'Hand Hammered', 'Warm Decor']
    },
    {
        slug: 'kids',
        name: 'Kids Festive',
        prefix: 'Kids Organic Cotton Kurta Pajama',
        basePrice: 1290,
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=500&q=80',
        tags: ['Soft Cotton', 'Kids Ethnic', 'Festive Ready', 'Trending']
    },
    {
        slug: 'cushions',
        name: 'Cushion Covers',
        prefix: 'Hand-Woven Velvet Cushion Cover (Pair)',
        basePrice: 990,
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80',
        tags: ['Handloom', 'Embroidery', 'Set of 2', 'Living Decor']
    },
    {
        slug: 'organics',
        name: 'Fabindia Organics',
        prefix: 'Organic Wild Honey & Herbal Infusion',
        basePrice: 650,
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        tags: ['Pure Organics', 'No Preservatives', 'Farm Fresh', 'Healthy']
    },
    {
        slug: 'jewellery',
        name: 'Silver Jewellery',
        prefix: '92.5 Sterling Silver Tribal Jhumka',
        basePrice: 2890,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80',
        tags: ['Pure 92.5', 'Tribal Handcrafted', 'Oxidised', 'Classic']
    },
    {
        slug: 'dining',
        name: 'Dining & Kitchen',
        prefix: 'Hand-Glazed Ceramic Dinnerware Set',
        basePrice: 2490,
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=500&q=80',
        tags: ['Ceramics', 'Studio Pottery', 'Tableware', 'Microwave Safe']
    },
    {
        slug: 'gifts',
        name: 'Gift Boxes',
        prefix: 'Luxury Festive Diya & Sweets Gift Hamper',
        basePrice: 2990,
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=500&q=80',
        tags: ['Festive Pack', 'Luxury Gift', 'Hamper Box', 'Celebration']
    }
];

// Har category ke liye exact 50 products generate ho rahe hain
// src/data/productsData.js ke bottom ka code:

// 50 ki jagah 100 ya 120 likhein:
export const products = categoriesConfig.flatMap((cat, catIndex) => {
    return Array.from({ length: 100 }, (_, i) => { // 👈 Yahan 50 ki jagah 100 kar diya
        const itemNumber = i + 1;
        const priceVariance = (i % 12) * 110;
        const currentPrice = cat.basePrice + priceVariance;
        const originalPrice = Math.round(currentPrice * 1.35);

        return {
            id: (catIndex + 1) * 10000 + itemNumber, // Unique ID
            category: cat.slug,
            categoryName: cat.name,
            title: `${cat.prefix} - Edition #${itemNumber}`,
            price: currentPrice,
            originalPrice: originalPrice,
            image: cat.image, // Same category ki photo
            tag: cat.tags[i % cat.tags.length]
        };
    });
});

