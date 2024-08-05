import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import SubNav from "../Components/SubNav";
import { useState, useEffect } from "react";
import Button from "../Components/Button";
export default function Home({
  navActive,
  setNavActive,
  addToBasket,
  setTotalPrice,
  basketList,
  cookie
}) {
  const [country, setCountry] = useState([]);
  const [subMenu, setsubMenu] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/all")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(subMenu);

  let newList = country;
  if (subMenu !== "") {
    newList = country.filter((i) => i.category === subMenu);
  }

  return (
    <div>
    <Nav cookie={cookie} navActive={navActive} setNavActive={setNavActive} basketList={basketList}/>
      <SubNav setsubMenu={setsubMenu} subMenu={subMenu} />

      <div className="allMain home">
        {newList.map((i) => (
          <User
            addToBasket={addToBasket}
            prop={i}
            key={i.artiklId}
            setTotalPrice={setTotalPrice}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

function User({ prop, addToBasket, setTotalPrice}) {
  return (
    <div className="artikl">
      <h1>{prop.artiklName}</h1>
      <img src="/slika.png" alt="slika1"></img>
      <h4> {prop.artiklDescription}</h4>
      <Button onClick={() => [addToBasket(prop), setTotalPrice(prop.price)]}>
        Add
      </Button>
    </div>
  );
}
