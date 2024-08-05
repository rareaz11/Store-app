import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function About({ navActive, setNavActive, basketList, cookie }) {
  return (
    <div>
      <Nav
        cookie={cookie}
        navActive={navActive}
        setNavActive={setNavActive}
        basketList={basketList}
      />
      <MainAbout />
      <Footer />
    </div>
  );
}

function MainAbout() {
  return (
    <div className="allMain">
      <div className="about1">
        <h1>Store App</h1>
        <h3>Currently not open, just online!</h3>
        <h3>For more information, please contact us!! ❤️</h3>
      </div>
    </div>
  );
}
