import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

import { useState, useEffect } from "react";

export default function Profile({
  userId,
  navActive,
  setNavActive,
  addToBasket,
  setTotalPrice,
  basketList,
  cookie,
}) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/myorders")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(country);

  return (
    <div>
      <Nav
        cookie={cookie}
        navActive={navActive}
        setNavActive={setNavActive}
        basketList={basketList}
      />

      <div className="allMain home">
        <div className="listOfOrder">
          <h1>My orders</h1>
          <div>
            {country.map((i, index) => (
              <Orders prop={i} key={i.orderId} i={index + 1} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Orders({ prop, i }) {
  return (
    <li className="liList">
      <h2>
        {i}. Order number: {prop.orderId}
      </h2>
      <h2>value: {prop.totalValue}$ </h2>
    </li>
  );
}
