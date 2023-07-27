import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" autoComplete="username" />
          <input type="password" placeholder="Password" autoComplete="current-password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;