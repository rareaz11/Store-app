import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { useState } from "react";

export default function Contact({ navActive, setNavActive, basketList,cookie }) {
  return (
    <div className="cont">
      <Nav
        navActive={navActive}
        setNavActive={setNavActive}
        basketList={basketList}
        cookie={cookie}
      />
      <h1>This is content of contact us</h1>
      <ContactForm />

      <Footer />
    </div>
  );
}

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleCheck(e) {
    e.preventDefault(e);
    if (!userName || !email) {
      alert("Empty field");
      return;
    }
  }

  return (
    <div className="allMain">
      <form className="form" onSubmit={(e) => handleCheck(e)}>
        <label>Your Name: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Your Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message: </label>
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
        <div className="btn">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}
