import './ProductsList.css';
import { ProductDisplay } from '..';

function ProductsList({ products = [] }) {
  const productsMap = products.map((product) => {
    return (
      <ProductDisplay key={product.id} product={product} />
    );
  });

  return (
    <div className="products-list-wrapper">
      {productsMap}
    </div>
  );
}

export default ProductsList;

