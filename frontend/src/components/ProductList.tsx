import type { Product } from "../types/Product";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard"

const ProductList = () => {
    return (
        <div>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default ProductList