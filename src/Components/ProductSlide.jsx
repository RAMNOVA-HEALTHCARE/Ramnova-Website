import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../assets/Styles/Product.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import localImage1 from '../assets/Images/allprod/v.jpeg';
import localImage2 from '../assets/Images/allprod/f.jpeg';
import localImage3 from '../assets/Images/allprod/g.jpg';
import localImage4 from '../assets/Images/allprod/z.jpeg';
import localImage5 from '../assets/Images/allprod/y.jpg';
import localImage6 from '../assets/Images/allprod/w.jpeg';
import localImage7 from '../assets/Images/allprod/d.jpg';
import localImage8 from '../assets/Images/allprod/s.jpg';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  { url: localImage1 },
  { url: localImage2 },
  { url: localImage3 },
  { url: localImage4 },
  { url: localImage5 },
  { url: localImage6 },
  { url: localImage7 },
  { url: localImage8 }
];

const Slider = () => {
  return (
    <div className="parent">
      {/* <h2 style={{ textAlign: 'center', marginBottom: '2em' }}></h2> */}
      <h2 style={{ 
        textAlign: 'center',
        marginTop: '1.5em', marginBottom: '1em',
          fontFamily: '"Mundo Serif Medium", serif',
          fontSize: '3em',
          fontWeight: '700'
        }}>
          Our Products
        </h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000} // Slower sliding interval (4 seconds)
        transitionDuration={1000} // Slower sliding animation (1 second)
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="Product" className="slider-image" />
            </div>
          );
        })}
      </Carousel>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/products" className="see-more-button">
          See More Products <ArrowForwardIcon style={{ verticalAlign: 'middle' }} />
        </Link>
      </div>
    </div>
  );
};

export default Slider;
