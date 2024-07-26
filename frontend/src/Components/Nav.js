import { Link } from "react-router-dom";

export default function Nav({ navActive, setNavActive }) {
  console.log(navActive);
  return (
    <div>
      <ul className="nav">
        <h1
          onClick={() => setNavActive("Home")}
          className={navActive === "Home" ? "activeNav" : ""}
        >
          <Link to="/">Home</Link>
        </h1>
        <h1
          className={navActive === "About" ? "activeNav" : ""}
          onClick={() => setNavActive("About")}
        >
          <Link to="/about">About</Link>
        </h1>
        <h1
          className={navActive === "Contact" ? "activeNav" : ""}
          onClick={() => setNavActive("Contact")}
        >
          <Link to="/contactUs">Contact</Link>
        </h1>
        <h1
          className={navActive === "Log" ? "activeNav" : ""}
          onClick={() => setNavActive("Log")}
        >
          <Link to="/login">Log in</Link>
        </h1>
        <h1
          className={navActive === "check" ? "activeNav" : ""}
          onClick={() => setNavActive("check")}
        >
          👜
        </h1>
      </ul>
    </div>
  );
}
