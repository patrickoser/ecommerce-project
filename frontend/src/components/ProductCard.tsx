import type { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
    onAddToCart?: () => void;
}

const ProductCard = ({ product }: ProductCardProps) => {

    return (
        <div className="">
            <img src={product.imageUrl} alt={product.name} />
            <h1 >{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.inStock}</p>
            <p>{product.description ? 'In Stock' : 'Not In Stock'}</p>
        </div>
    )
}

export default ProductCard;