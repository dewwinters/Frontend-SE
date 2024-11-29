import React, { useRef, useState } from "react";
import "./HomePage.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import NavBar from "../../Components/Navbar/Navigation";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  const [startSlider, setStartSlider] = useState(0);
  const imgItemRef = useRef(null);

  const slideRight = () => {
    const totalSlides = imgItemRef.current.children.length - 1; // Total number of images
    const endSlider = totalSlides * -100; // Max negative translateX value
    if (startSlider > endSlider) {
      setStartSlider(startSlider - 100);
    }
  };

  const slideLeft = () => {
    if (startSlider < 0) {
      setStartSlider(startSlider + 100);
    }
  };

  return (
    <div className="homepage">
      <NavBar />
      <div className="image__container">
        <div
          className="image__list"
          ref={imgItemRef}
          style={{
            transform: `translateX(${startSlider}%)`,
            transition: "transform 0.5s",
          }}
        >
          {/* Image Items */}
          <div className="image__item">
            <img
              src="https://m.media-amazon.com/images/I/61K28C55p4L._SX3000_.jpg"
              alt="pic01"
            />
          </div>
          <div className="image__item">
            <img
              src="https://m.media-amazon.com/images/I/71u+Dtt6JTL._SX3000_.jpg"
              alt="pic02"
            />
          </div>
          <div className="image__item">
            <img
              src="https://m.media-amazon.com/images/I/71fgNuf3lIL._SX3000_.jpg"
              alt="pic03"
            />
          </div>
          <div className="image__item">
            <img
              src="https://m.media-amazon.com/images/I/818WR6jtOyL._SX3000_.jpg"
              alt="pic04"
            />
          </div>
          <div className="image__item">
            <img
              src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
              alt="pic05"
            />
          </div>
          <div className="image__item">
            <img
              src="https://m.media-amazon.com/images/I/71zpBcCjKPL._SX3000_.jpg"
              alt="pic06"
            />
          </div>
          <div className="image__item">
            <img
              src="https://m.media-amazon.com/images/I/71MoHByjgeL._SX3000_.jpg"
              alt="pic07"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="image__btn">
          <button className="btn__slider" onClick={slideLeft}>
            <ChevronLeftOutlinedIcon />
          </button>
          <button className="btn__slider" onClick={slideRight}>
            <ChevronRightOutlinedIcon />
          </button>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default HomePage;
