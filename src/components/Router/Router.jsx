import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error, Home, Login, Product, Register } from '../../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;