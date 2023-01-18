import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import Home from "../pages/Home";
import Begin from "../pages/Begin";
import Lost from "../pages/Lost";
import Lists from "../pages/Lists";
import Rollin from "../pages/Rollin";
import Spinner from "../pages/Spinner";

const NavBar = (props) => {
  const navRef = useRef();
  const barRef = useRef();
  const [doneLoading, setDoneLoading] = useState(false);
  setTimeout(() => {
    setDoneLoading(true);
  }, "900");

  const showNavBar = (event) => {
    navRef.current.classList.add("responsive_nav");
    event.currentTarget.classList.add("ghost");
  };

  const removeNavBar = () => {
    navRef.current.classList.remove("responsive_nav");
    barRef.current.classList.remove("ghost");
  };
  const [selection, setSelection] = useState("Home");

  const homeHandler = (event) => {
    const id = event.currentTarget.id;
    setSelection(id);
    removeNavBar();
  };

  return (
    <>
      <header>
        <nav ref={navRef}>
          <a href="/#" onClick={homeHandler} id="Begin">
            Beginnings
          </a>
          <a href="/#" onClick={homeHandler} id="Rollin">
            Rollin'
          </a>
          <a href="/#" onClick={homeHandler} id="Lost">
            Timeline
          </a>
          <a href="/#" onClick={homeHandler} id="Lists">
            Lists
          </a>
          <button className="nav-btn nav-close-btn" onClick={removeNavBar}>
            <FaTimes />
          </button>
        </nav>

        <button ref={barRef} className="nav-btn " onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
      <img
        src="Mirra_House_Logo_Round_Blue.png"
        alt="logo"
        id="Home"
        onClick={homeHandler}
      />
      {!doneLoading && <Spinner />}
      <section>
        {selection == "Home" && doneLoading && <Home />}
        {selection == "Begin" && doneLoading && <Begin />}
        {selection == "Rollin" && doneLoading && <Rollin />}
        {selection == "Lost" && doneLoading && <Lost />}
        {selection == "Lists" && doneLoading && <Lists />}
      </section>
    </>
  );
};
export default NavBar;
