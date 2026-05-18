import { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
    addToCart?: () => void;
}

const ProductCard = ({ product }: ProductCardProps) => {

    return (
        <div className="">
            <h1 >ProductCard</h1>
            <p>{product.name}</p>
        </div>
    )
}

export default ProductCard;