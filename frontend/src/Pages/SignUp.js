import { useState, useEffect } from "react";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Log({ navActive, setNavActive, basketList, cookie }) {
  let nav = useNavigate();
  if (cookie !== "") {
    nav("../");
  }
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  function handleErr(e) {
    e.preventDefault();

    if (
      userName === "" ||
      !userName ||
      pass === "" ||
      !pass ||
      email === "" ||
      !email
    ) {
      alert("Check field! Error empty!");
      return;
    }

    for (let index = 0; index < user.length; index++) {
      if (user[index].userName === userName || user[index].email === email) {
        alert("User or email already exsist");
        setEmail("");
        setPass("");
        setUserName("");
        //add navigation and change layout of navbar component
        return;
      }
    }

    axios
      .post("http://localhost:8081/create", { userName, pass, email })
      .then((res) => {
        console.log(res);
        navigate("../login");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Nav
        cookie={cookie}
        navActive={navActive}
        setNavActive={setNavActive}
        basketList={basketList}
      />
      <div className="allMain">
        <form className="form" onSubmit={(e) => handleErr(e)}>
          <label>Your userName: </label>
          <input
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Your password: </label>
          <input
            value={pass}
            type="text"
            onChange={(e) => setPass(e.target.value)}
          />
          <label>Your email:</label>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="btn">
            <Button>Register</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
