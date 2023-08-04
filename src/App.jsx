import { Router } from './components';
import { AppProvider } from './context';
import './styles/Globals.css';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
