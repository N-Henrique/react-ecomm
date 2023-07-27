import { Link } from 'react-router-dom';
import { Header } from '../../components';
import '../../styles/Page.css';

function Home() {
  return (
    <>
      <Header />
      <div className="page-container">
        <h1>Home</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;