import { Link } from "react-router-dom";

export default function Nav({ navActive, setNavActive, basketList, cookie }) {
  console.log(cookie);
  return (
    <div>
      <ul className="nav">
        <Link
          to="/"
          onClick={() => setNavActive("Home")}
          className={navActive === "Home" ? "activeNav headerNav" : "headerNav"}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={
            navActive === "About" ? "activeNav headerNav" : "headerNav"
          }
          onClick={() => setNavActive("About")}
        >
          About
        </Link>

        <Link
          to="/contactUs"
          className={
            navActive === "Contact" ? "activeNav headerNav" : "headerNav"
          }
          onClick={() => setNavActive("Contact")}
        >
          Contact
        </Link>

        {cookie === "" ? (
          <Link
            to="/login"
            className={
              navActive === "Log" ? "activeNav headerNav" : "headerNav"
            }
            onClick={() => setNavActive("Log")}
          >
            Log in
          </Link>
        ) : (
          <>
            <Link
              to="/profile"
              className={
                navActive === "profile" ? "activeNav headerNav" : "headerNav"
              }
              onClick={() => setNavActive("profile")}
            >
              Account
            </Link>
            <Link
              to="/logout"
              className={
                navActive === "Log" ? "activeNav headerNav" : "headerNav"
              }
              onClick={() => setNavActive("Log")}
            >
              Log out
            </Link>
          </>
        )}

        <Link
          to="/basket"
          className={
            navActive === "check" ? "activeNav headerNav1" : "headerNav1"
          }
          onClick={() => setNavActive("check")}
        >
          👜
          <Counter basketList={basketList} />
        </Link>
      </ul>
    </div>
  );
}

function Counter({ basketList }) {
  return <div className="counter">{basketList.length}</div>;
}
