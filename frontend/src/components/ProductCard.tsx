import type { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
    onAddToCart?: () => void;
}

const ProductCard = ({ product }: ProductCardProps) => {

    return (
        <div id="product-card" className="">
            <img src={product.imageUrl} alt={product.name} />
            <h1 >{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.inStock ? 'In Stock' : 'Not In Stock'}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductCard;