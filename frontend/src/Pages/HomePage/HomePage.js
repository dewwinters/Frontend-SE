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
        
      {/* bắt đầu làm */}
      <div className="item__box">
        <div className="item__box__card">

          <div className="item__box__card__title">
            Score Black Friday Week deals
            <div className="item__box__card__image">

                <div className="item__box__card__block">
                  <img className="item__box__card__block__image" src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_772_BFW_CM_DQC_AmazonBasics_3D_1x_v3._SY116_CB541717183_.jpg" alt="image01" />
                  <div className="item__box__card__block__text">
                    Amazon Basics and more
                  </div>
                </div>
                  
                <div className="item__box__card__block">
                  <img className="item__box__card__block__image" src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_768_BFW_CM_DQC_HomeImprovement_2D_1x_v3._SY116_CB541717183_.jpg" alt="image02" />
                  <div className="item__box__card__block__text">
                    Home Improvement
                  </div>
                </div>

                <div className="item__box__card__block">
                  <img className="item__box__card__block__image" src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_770_BFW_CM_DQC_Phone_Accessories_3B_1x_v3._SY116_CB541717183_.jpg" alt="image03" />
                  <div className="item__box__card__block__text">
                    Cell phones & accessories
                  </div>
                </div>

                <div className="item__box__card__block">
                  <img className="item__box__card__block__image" src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_769_BFW_CM_DQC_Furniture_3A_1x_v3._SY116_CB541717183_.jpg" alt="image04" />
                  <div className="item__box__card__block__text">
                    Furniture
                  </div>
                </div>
            </div>

            <div className="item__box__card__block__seeMore">
              See more
            </div>
          </div> 
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
