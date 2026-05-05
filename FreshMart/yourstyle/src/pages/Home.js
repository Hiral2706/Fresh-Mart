import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ search = "" }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  const nonVeg = ["chicken", "meat", "fish", "egg"];

  const filtered = products.filter((p) => {
    const title = p.title.toLowerCase();

    if (search === "veg") {
      return !nonVeg.some((i) => title.includes(i));
    }

    if (search === "nonveg") {
      return nonVeg.some((i) => title.includes(i));
    }

    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Groceries</h2>

      <div style={grid}>
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

export default Home;

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))",
  gap: "20px",
};