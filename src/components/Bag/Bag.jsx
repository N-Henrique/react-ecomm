import './Bag.css';

function Bag({ isOpen = true, onClose }) {
  return (
    <div className='bag-wrapper'>
      <span
        className={`bag-overlay${isOpen ? ' bag-overlay-open' : ''}`}
        onClick={onClose}
      >
      </span>
      <div className={`bag-container${isOpen ? ' bag-container-open' : ''}`}>
        <button onClick={onClose}>X</button>
        <h1>Bag</h1>
      </div>
    </div>
  );
}

export default Bag;
