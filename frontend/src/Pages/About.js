import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function About({ navActive, setNavActive }) {
  return (
    <div>
      <Nav navActive={navActive} setNavActive={setNavActive} />
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
