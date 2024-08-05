import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/ContactUs";
import Log from "./Pages/Log";
import Basket from "./Pages/Basket";
import SignUp from "./Pages/SignUp";
import Logout from "./Pages/Logout";
import Profile from "./Pages/Profile";

function App() {
  const [navActive, setNavActive] = useState("");
  const [basketList, setBasketList] = useState([]);
  const [totalPrice, setTotal1Price] = useState(0);
  const [cookie, setCookie] = useState("");
  const [userId, setUserID] = useState(0);

  console.log(cookie);
  function setTotalPrice(value) {
    setTotal1Price(totalPrice + value);
  }
  function addToBasket(value) {
    setBasketList((i) => [...i, value]);
  }

  function handleDelete(id) {
    setBasketList((i) => i.filter((n) => n.artiklId !== id));
  }
  function handleOnUpdateTotal(value) {
    setTotal1Price(totalPrice - value);
  }

  //console.log(basketList);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Home
                basketList={basketList}
                setTotalPrice={setTotalPrice}
                navActive={navActive}
                setNavActive={setNavActive}
                addToBasket={addToBasket}
                cookie={cookie}
              />
            }
          />
          <Route
            path="about"
            element={
              <About
                navActive={navActive}
                setNavActive={setNavActive}
                basketList={basketList}
                cookie={cookie}
              />
            }
          />
          <Route
            path="/contactUs"
            element={
              <Contact
                navActive={navActive}
                setNavActive={setNavActive}
                basketList={basketList}
                cookie={cookie}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Log
                setUserID={setUserID}
                setCookie={setCookie}
                navActive={navActive}
                setNavActive={setNavActive}
                basketList={basketList}
                cookie={cookie}
              />
            }
          ></Route>

          <Route
            path="/logout"
            element={
              <Logout
                setUserID={setUserID}
                setCookie={setCookie}
                navActive={navActive}
                setNavActive={setNavActive}
                basketList={basketList}
                cookie={cookie}
              />
            }
          ></Route>

          <Route
            path="/basket"
            element={
              <Basket
                userId={userId}
                cookie={cookie}
                totalPrice={totalPrice}
                navActive={navActive}
                checkBasketList={basketList}
                setNavActive={setNavActive}
                onDelete={handleDelete}
                onUpdateTotal={handleOnUpdateTotal}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <SignUp
                navActive={navActive}
                setNavActive={setNavActive}
                basketList={basketList}
                cookie={cookie}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                userId={userId}
                navActive={navActive}
                setNavActive={setNavActive}
                basketList={basketList}
                cookie={cookie}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
