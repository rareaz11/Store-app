import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

import Button from "../Components/Button";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Basket({
  userId,
  navActive,
  setNavActive,
  checkBasketList,
  totalPrice,
  onDelete,
  onUpdateTotal,
  cookie,
}) {
  let navigate = useNavigate();
  function handleErr(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8081/createOrder", { userId, totalPrice })
      .then((res) => {
        console.log(res);
        navigate("../profile");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Nav
        navActive={navActive}
        setNavActive={setNavActive}
        basketList={checkBasketList}
        cookie={cookie}
      />
      <div className="allMain">
        <Main
          onUpdateTotal={onUpdateTotal}
          onDelete={onDelete}
          basketList={checkBasketList}
          totalPrice={totalPrice}
        ></Main>
      </div>
      <Footer />
    </div>
  );

  function Main({ basketList, totalPrice, onDelete, onUpdateTotal }) {
    return (
      <form className="listOfItems" onSubmit={(e) => handleErr(e)}>
        <h2>Your Basket</h2>
        <div className="basket">
          {basketList.length === 0 ? (
            <h1>Basket is empty</h1>
          ) : (
            basketList.map((i, n) => (
              <DisplayList
                prop={i}
                key={i.artiklId}
                num={n}
                onDelete={onDelete}
                onUpdateTotal={onUpdateTotal}
              />
            ))
          )}
        </div>
        <div className="totalPrice">
          <h2>Total price: {totalPrice}$ </h2>
          {basketList.length === 0 ? (
            <button className="btnMain" disabled>
              Submit
            </button>
          ) : (
            <Button>Submit</Button>
          )}
        </div>
      </form>
    );
  }

  function DisplayList({ prop, num, onDelete, onUpdateTotal }) {
    return (
      <div className="item">
        <h3>
          {num + 1}. <img src="/slika.png" alt="slika1"></img>
        </h3>

        <h3>
          {prop.artiklName} : {prop.price}$
        </h3>
        <Button
          onClick={() => [onDelete(prop.artiklId), onUpdateTotal(prop.price)]}
        >
          Delete
        </Button>
      </div>
    );
  }
}
