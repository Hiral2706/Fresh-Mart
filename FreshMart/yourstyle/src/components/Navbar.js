import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar({ setSearch, dark, setDark }) {
  const { cart, wishlist } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <div style={styles.nav}>
        <h2>Fresh<span style={{ color: "green" }}>Mart</span></h2>

        <input
          placeholder="Search groceries..."
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <div style={styles.right}>
          <Link to="/" style={styles.btn}>Home</Link>
          <Link to="/cart" style={styles.btn}>Cart ({cart.length})</Link>
          <Link to="/wishlist" style={styles.btn}>❤️ ({wishlist.length})</Link>

          {!user ? (
            <>
              <Link to="/login" style={styles.btn}>Login</Link>
              <Link to="/signup" style={styles.btn}>Signup</Link>
            </>
          ) : (
            <div style={{ position: "relative" }}>
              <div style={styles.user} onClick={() => setOpen(!open)}>
                👤
              </div>

              {open && (
                <div style={styles.dropdown}>
                  <p>{user.name}</p>
                  <p style={{ fontSize: "12px" }}>{user.email}</p>

                  <button onClick={() => setDark(!dark)}>
                    {dark ? "☀️ Light" : "🌙 Dark"}
                  </button>

                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* VEG / NON-VEG FILTER */}
      <div style={styles.categories}>
        <button onClick={() => setSearch("veg")}>🥦 Veg</button>
        <button onClick={() => setSearch("nonveg")}>🍗 Non-Veg</button>
        <button onClick={() => setSearch("")}>All</button>
      </div>
    </>
  );
}

export default Navbar;

const styles = {
  nav: {
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#e6ffe6"
  },
  search: {
    padding: "6px",
    borderRadius: "8px"
  },
  right: {
    display: "flex",
    gap: "10px"
  },
  btn: {
    padding: "6px 12px",
    background: "#90ee90",
    borderRadius: "20px",
    textDecoration: "none",
    color: "#000"
  },
  user: {
    background: "#90ee90",
    padding: "8px",
    borderRadius: "50%",
    cursor: "pointer"
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    right: 0,
    background: "#fff",
    padding: "10px"
  },
  categories: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    padding: "10px"
  }
};