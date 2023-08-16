import { Router } from "./components";
import { AppProvider } from "./context";
import "./styles/Defauts.css";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
