import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/ContactUs";
import Log from "./Pages/Log";

function App() {
  const [navActive, setNavActive] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home navActive={navActive} setNavActive={setNavActive} />}
          />
          <Route
            path="about"
            element={
              <About navActive={navActive} setNavActive={setNavActive} />
            }
          />
          <Route
            path="/contactUs"
            element={
              <Contact navActive={navActive} setNavActive={setNavActive} />
            }
          ></Route>
          <Route
            path="/login"
            element={<Log navActive={navActive} setNavActive={setNavActive} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
