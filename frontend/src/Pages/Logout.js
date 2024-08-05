import { useState, useEffect } from "react";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Logout({
  setUserID,
  setCookie,
  navActive,
  setNavActive,
  basketList,
  cookie,
}) {
  const navigate = useNavigate();

  console.log(cookie);
  if (cookie === "") {
    navigate("../");
  }

  return (
    <div>
      <Nav
        navActive={navActive}
        setNavActive={setNavActive}
        basketList={basketList}
        cookie={cookie}
      />
      <div className="form">
        <Main setCookie={setCookie} setUserID={setUserID} />
      </div>
      <Footer />
    </div>
  );
}

function Main({ setCookie, setUserID }) {
  return (
    <h1>
      Odjava{" "}
      <Button onClick={() => [setCookie(""), setUserID(0)]}>Log Out</Button>
    </h1>
  );
}
