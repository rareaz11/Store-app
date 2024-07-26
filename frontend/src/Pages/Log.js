import { useState, useEffect } from "react";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function Log({ navActive, setNavActive }) {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  function handleErr(e) {
    e.preventDefault();

    if (userName === "" || !userName) {
      alert("User name empty!");
      return;
    }
    if (pass === "" || !pass) {
      alert("Password empty!");
      return;
    }
    for (let index = 0; index < user.length; index++) {
      if (user[index].userName === userName && user[index].pass == pass) {
        alert("Successfully logged in");
        //add navigation and change layout of navbar component
        return;
      }
    }

    alert("Error");
  }
  return (
    <div>
      <Nav navActive={navActive} setNavActive={setNavActive} />
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
          <div className="btn">
            <Button>Log in</Button>
          </div>
          <h2>
            Create account... <Button>Sign up</Button>
          </h2>
        </form>
      </div>
      <Footer />
    </div>
  );
}
