import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { CartProvider } from "./context/CartContext";

function App() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  return (
    <CartProvider>
      <div style={{
        background: dark ? "#1e1b4b" : "#f8fafc",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh"
      }}>
        <BrowserRouter>
          <Navbar setSearch={setSearch} dark={dark} setDark={setDark} />

          <Routes>
            <Route path="/" element={<Home search={search} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;