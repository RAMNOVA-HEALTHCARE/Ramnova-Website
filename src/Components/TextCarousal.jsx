import React, { useState, useEffect } from 'react';
import '../assets/Styles/Text.css'; // Import the CSS for sliding effect

const testimonials = [
  {
    quote: "Our sole responsibility - For the People. Towards the People. To provide quality medicines.",
    author: "MANJARI KUMARI",
    title: "Cofounder P.hd with 15yrs of experience in pharma manufacturing."
  },
  {
    quote: "At Ramnova, we are trying continuously to meet the global standards in every aspect of our business!",
    author: "RANDHIR KUMAR",
    title: "BBA with 27yrs of experience in pharma management"
  }
];

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide('next');
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
      }
    }, 1000);
  };

  const arrowStyle = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#333',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '10px',
    zIndex: 2
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f8f8', 
      padding: '2em 3em', 
      maxWidth: '35%', 
      margin: 'auto',
      textAlign: 'center',
      position: 'relative',
      borderRadius: '30px'
    }}>
      <h2 style={{ 
        fontFamily: '"Mundo Serif Medium", serif',
        fontSize: '2.5em',
        marginBottom: '1em'
      }}>
        From Chairman's Desk
      </h2>
      <div className={`slide-container ${isSliding ? 'slide-enter slide-enter-active' : ''}`} style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}>
        <p style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          marginBottom: '20px',
          minHeight: '80px'
        }}>
          "{testimonials[currentIndex].quote}"
        </p>
        <h3 style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '5px'
        }}>
          {testimonials[currentIndex].author}
        </h3>
        <p style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          color: '#666'
        }}>
          {testimonials[currentIndex].title}
        </p>
      </div>
      <button onClick={() => changeSlide('prev')} style={{...arrowStyle, left: '10px'}}>&#10094;</button>
      <button onClick={() => changeSlide('next')} style={{...arrowStyle, right: '10px'}}>&#10095;</button>
      <div style={{ marginTop: '20px' }}>
        {testimonials.map((_, index) => (
          <span key={index} style={{
            height: '8px',
            width: '8px',
            backgroundColor: index === currentIndex ? '#333' : '#bbb',
            borderRadius: '50%',
            display: 'inline-block',
            margin: '0 5px',
          }}></span>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;