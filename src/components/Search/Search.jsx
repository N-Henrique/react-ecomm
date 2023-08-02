import './Search.css';
import { BsSearch } from 'react-icons/bs';

function Search() {
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="O que você procura hoje?"
      />
      <button className="search-button">
        <BsSearch color="#0286FF" size="20" />
      </button>
    </div>
  );
}

export default Search;
