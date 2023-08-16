import { useParams } from "react-router-dom";
import "../../styles/Pages.css";
import { Header } from "../../components";

function Product() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="page-container">
        <h1>Product {id}</h1>
      </div>
    </>
  );
}

export default Product;
