// app/page.tsx
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

async function fetchProducts(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products?limit=12');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default async function ProductListingPage() {
    const products = await fetchProducts();

    return (
        <div className="plp-container">
            <h1 className="page-title">Featured Electronics & Apparel</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
