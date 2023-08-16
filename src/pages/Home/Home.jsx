import { Header, ProductsList } from "../../components";
import "../../styles/Pages.css";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const { products } = data;
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="page-container">
        <ProductsList products={products} />
      </div>
    </>
  );
}

export default Home;
