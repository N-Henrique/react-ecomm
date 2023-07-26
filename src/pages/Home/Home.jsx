import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
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
    )
}

export default Home;