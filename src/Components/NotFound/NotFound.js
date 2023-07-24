import { useContext } from "react";
import languageContext from "../../Context/Context";
import NavBar from "../NavBar/NavBar";
import "./NotFound.css";

const NotFound = () => {
  const { showContent } = useContext(languageContext);
  const { notFoundHeading, notFoundPara } = showContent;
  return (
    <>
      <NavBar />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>{notFoundHeading}</h1>
        <p>{notFoundPara}</p>
      </div>
    </>
  );
};

export default NotFound;
