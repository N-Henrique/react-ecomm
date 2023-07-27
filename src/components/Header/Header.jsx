import './Header.css';
import '../../styles/Common.css';
import Search from '../Search/Search';
import { BsFillBagFill, BsPersonCircle } from 'react-icons/bs';

function Header() {
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
          <button type="button" className="header-icon">
            <BsFillBagFill color="white" size="20" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;