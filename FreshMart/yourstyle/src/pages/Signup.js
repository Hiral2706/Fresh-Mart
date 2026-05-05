import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const signup = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <div style={box}>
      <input placeholder="Name" onChange={(e)=>setUser({...user,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;

const box = { padding: "50px" };