import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import languageContext from "../../Context/Context";
import "./NavBar.css";

const NavBar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const { selectedLanguage, showContent, handleLanguageChange } =
    useContext(languageContext);

  const onLanguageChange = (event) => {
    const { value } = event.target;
    handleLanguageChange(value);
  };

  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const { navHome, navContactUs } = showContent;

  const changeDirection =
    selectedLanguage === "Hebrew" || selectedLanguage === "Arabic";
  return (
    <>
      <nav className="nav-header">
        <div
          className={`sub-container ${changeDirection && "flex-row-reverse"}`}
        >
          <NavLink to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </NavLink>
          <div className={`nav-menu ${changeDirection && "flex-row-reverse"}`}>
            <ul className="nav-bar-large-container">
              <NavLink to="/" className="nav-link">
                <li className="nav-menu-item">{navHome}</li>
              </NavLink>
              <NavLink to="/contact-us" className="nav-link">
                <li className="nav-menu-item">{navContactUs}</li>
              </NavLink>
            </ul>
            <div className="nav-menu-mobile">
              <button onClick={showMenu} className="nav-mobile-btn">
                {isShowMenu ? (
                  <GrClose color="gray" size={20} />
                ) : (
                  <CiMenuBurger color="gray" size={20} />
                )}
              </button>
            </div>

            <select
              value={selectedLanguage}
              onChange={onLanguageChange}
              className={`sel-language ${changeDirection ? "" : "ms-2"}`}
            >
              <option value="English" className="language-opt">
                En English
              </option>
              <option value="Hebrew" className="language-opt">
                He עִברִית
              </option>
              <option value="Arabic" className="language-opt">
                Ar عربي
              </option>
              <option value="Hindi" className="language-opt">
                Hi हिंदी
              </option>
              <option value="Gujarati" className="language-opt">
                Gu ગુજરાતી
              </option>
            </select>
          </div>
        </div>
      </nav>
      {isShowMenu && (
        <ul className="nav-menu-list-mobile">
          <NavLink to="/" className="nav-link">
            <li className="nav-menu-item-mobile">{navHome}</li>
          </NavLink>
          <NavLink to="/contact-us" className="nav-link">
            <li className="nav-menu-item-mobile">{navContactUs}</li>
          </NavLink>
        </ul>
      )}
    </>
  );
};

export default NavBar;
