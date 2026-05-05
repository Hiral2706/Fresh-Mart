import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img src={product.thumbnail} style={styles.img} />

      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Wishlist</button>
    </div>
  );
}

export default ProductCard;

const styles = {
  card: {
    background: "#fff",
    padding: "10px",
    borderRadius: "10px"
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  }
};