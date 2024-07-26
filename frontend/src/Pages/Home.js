import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import SubNav from "../Components/SubNav";
import { useState, useEffect } from "react";
import Button from "../Components/Button";
export default function Home({ navActive, setNavActive }) {
  const [country, setCountry] = useState([]);
  const [subMenu, setsubMenu] = useState("");
  useEffect(() => {
    fetch("http://localhost:8081/all")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(subMenu);

  let newList = country;
  if (subMenu !== "") {
    newList = country.filter((i) => i.category === subMenu);
  }

  return (
    <div>
      <Nav navActive={navActive} setNavActive={setNavActive} />
      <SubNav setsubMenu={setsubMenu} subMenu={subMenu} />

      <div className="allMain home">
        {newList.map((i) => (
          <User prop={i} key={i.artiklId} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

function User({ prop }) {
  return (
    <div className="artikl">
      <h1>{prop.artiklName}</h1>
      <img src="/slika.png" alt="slika1"></img>
      <h4> {prop.artiklDescription}</h4>
      <Button>Add</Button>
    </div>
  );
}
