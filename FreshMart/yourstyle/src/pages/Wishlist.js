import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Wishlist</h2>

      {wishlist.map((item, i) => (
        <div key={i}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;