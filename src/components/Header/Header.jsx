import "./Header.css";
import "../../styles/Commons.css";
import Search from "../Search/Search";
import { BsFillBagFill, BsPersonCircle } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import Bag from "../Bag";
import { AppContext } from "../../context";

function Header() {
  const appContext = useContext(AppContext);

  const [bagOpen, setBagOpen] = useState(false);

  const handleBagClick = () => {
    setBagOpen(!bagOpen);
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.keyCode === 27) {
        setBagOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="header-logo">
          <h1>Logo</h1>
        </div>
        <div className="header-search">
          <Search />
        </div>
        <div className="header-icons">
          <button type="button" className="header-icon">
            <BsPersonCircle color="white" size="20" />
          </button>
          <button
            type="button"
            className="header-icon"
            onClick={handleBagClick}
          >
            <BsFillBagFill color="white" size="20" />
            <div className="header-bag-length">
              <p>{appContext.bag.length}</p>
            </div>
          </button>
        </div>
      </div>
      <Bag isOpen={bagOpen} onClose={handleBagClick} />
    </header>
  );
}

export default Header;
