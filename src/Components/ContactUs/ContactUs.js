import { useContext } from "react";
import languageContext from "../../Context/Context";
import NavBar from "../NavBar/NavBar";
import "./ContactUs.css";

const ContactUs = () => {
  const { showContent } = useContext(languageContext);
  const { contactUsPara, contactUsHeading } = showContent;
  return (
    <>
      <NavBar />
      <div className="Contact-us-container">
        <img
          src="https://media.istockphoto.com/id/1283050796/vector/flat-design-under-construction-concept.jpg?s=2048x2048&w=is&k=20&c=hZN3pZawWvu8-r-QCxiXPNdwBIU0ElU_HiUMago4h98="
          alt="under construction"
          className="construction-img"
        />
        <h1>{contactUsHeading}</h1>
        <p>{contactUsPara}</p>
      </div>
    </>
  );
};

export default ContactUs;
