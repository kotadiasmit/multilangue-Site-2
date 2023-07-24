import { useContext } from "react";
import { Link } from "react-router-dom";
import languageContext from "../../Context/Context";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  const { selectedLanguage, showContent } = useContext(languageContext);
  const { homeMainPara, homeMainHeading, homeContactUsBtn } = showContent;
  const changeDirection =
    selectedLanguage === "Hebrew" || selectedLanguage === "Arabic";
  return (
    <>
      <NavBar />
      <div className="home-container" dir={changeDirection ? "rtl" : "ltr"}>
        <div className="home-content">
          <h1 className="home-heading">{homeMainHeading}</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">{homeMainPara}</p>
          <Link to="/contact-us">
            <button type="button" className="shop-now-button">
              {homeContactUsBtn}
            </button>
          </Link>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className={`home-desktop-img ${changeDirection ? "me-5" : "ms-5"}`}
        />
      </div>
    </>
  );
};

export default Home;
