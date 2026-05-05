import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email) {
      navigate("/");
      window.location.reload();
    } else {
      alert("Signup first");
    }
  };

  return (
    <div style={box}>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;

const box = { padding: "50px" };