import { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
    addToCart?: () => void;
}

const ProductCard = () => {

    return (
        <div className="">
            <h1 >ProductCard</h1>
            
        </div>
    )
}

export default ProductCard;