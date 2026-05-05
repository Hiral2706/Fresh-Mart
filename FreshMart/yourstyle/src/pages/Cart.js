import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.thumbnail} style={styles.img} />

          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            {/* ✅ QUANTITY */}
            <div style={styles.qty}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            {/* REMOVE */}
            <button onClick={() => removeItem(item.id)} style={styles.remove}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>

          <button
            style={styles.buy}
            onClick={() => {
              alert("Order Placed Successfully 🎉");
            }}
          >
            Buy Now 🛍️
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

const styles = {
  card: {
    display: "flex",
    gap: "20px",
    background: "#fff",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
  },

  img: {
    width: "100px",
  },

  qty: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "5px",
  },

  remove: {
    marginTop: "5px",
    background: "#ddd",
    border: "none",
    padding: "5px",
  },

  buy: {
    marginTop: "10px",
    background: "#6366f1",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
  },
};