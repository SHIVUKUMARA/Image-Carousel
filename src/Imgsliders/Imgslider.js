import React from "react";
import "./Imgslider.css";
import Carousel from "react-material-ui-carousel";

const data = [
  "https://wallpapers.com/images/featured/information-technology-nucb4z97b3q78mjk.jpg",
  "https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg",
  "https://wallpapercave.com/wp/wp3147485.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8bwJVrm0YyO7x0_gDE1ASkUDNpWw0Zgdjw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYnAsOOiAp3udQRhKtebRvv35lYCzP7Qb9lifWyIzAQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HoDk1AIhewOthZO7DJTdFRdA35hstbHvJA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jYuFwCtWasWX95y02MMEjGPXQJqbcvyr9w&s",
];

const Imgslider = () => {
  return (
    <div>
      <Carousel
        className="carasousel"
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            backgroundColor: "purple",
            color: "black",
            borderRadius: 0,
            marginTop: -2,
            height: "104px",
          },
        }}
      >
        {data.map((imag, i) => {
          return (
            <div className="banner">
              <img src={imag} alt="banner" className="banner_img" />
            </div>
          );
        })}
      </Carousel>
      <marquee>
        <h1>Created By SHIVUKUMARA@2023</h1>
      </marquee>
    </div>
  );
};

export default Imgslider;
