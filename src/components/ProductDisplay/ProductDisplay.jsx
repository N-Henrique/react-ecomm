import { useContext } from "react";
import "./ProductDisplay.css";
import { AppContext } from "../../context";

function ProductDisplay({ product }) {
  const appContext = useContext(AppContext);

  const handleBuyClick = () => {
    appContext.addToBag(product);
  };

  return (
    <div className="product-display-wrapper">
      <div className="product-display-container">
        <img
          className="product-display-image"
          src={product.thumbnail}
          alt={product.title}
        />
        <div>
          <p>{product.brand}</p>
          <p>{product.title}</p>
          <p>{product.rating}</p>
          <p>{product.discountPercentage}</p>
          <p>{product.price}</p>
        </div>
        <button onClick={handleBuyClick}>Compre agora</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
