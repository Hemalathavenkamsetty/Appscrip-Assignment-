// components/ProductCard.tsx
import React from 'react';
import { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={Image of ${product.title}}
                className="product-image"
                loading="lazy"
            />
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart-btn">View Details</button>
            </div>
        </div>
    );
};

export default ProductCard;
