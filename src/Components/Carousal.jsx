import React, { useState, useEffect } from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CarousalCardData from '../assets/Data/CarousalCardsData.json';
import "../assets/Styles/Carousal.css";
import {LinearProgress } from "@mui/material"

const childFactory = (direction) => (child) => {
  return React.cloneElement(child, {
    classNames: direction,
  });
};

export default function Carousal() {
  const [imagesNames, setImagesNames] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("slide-left");
  const [cardsDataLocal, setCardsDataLocal] = useState([]);

  useEffect(() => {
    const data = CarousalCardData.CarousalCardsData;
    setCardsDataLocal(data);
    setImagesNames(data.map(item => item.backgroundImageLink));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 7000);
    return () => clearInterval(interval);
  },);

  const slideLeft=()=>{
            const nextIndex=index-1;
            if(nextIndex<0){
                  setIndex(imagesNames.length - 1);
            }
            else{
                  setIndex(nextIndex);
            }
            setDirection('slide-left');
      };

      const slideRight=()=>{
        setIndex((index+1)%imagesNames.length);
        setDirection('slide-right');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
        slideLeft();
    } else if (event.key === 'ArrowRight') {
        slideRight();
    }
};

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  if (imagesNames.length === 0) {
    return <LinearProgress />;
  }

  const imageUrl = imagesNames[index];
  const bodyText = cardsDataLocal[index]?.bodyText;
  const headingText=cardsDataLocal[index]?.headingText;
  const heighlightedHeadingText=cardsDataLocal[index]?.heighlightedHeadingText
  return (
    <Box style={{ height: 'calc(100vh - 70px)' }} className="image-slider">
      <Card style={{ height: 'calc(100vh - 70px)', borderRadius: "0" ,backgroundColor:'black'}} className="image-wrapper">
      <IconButton style={{position: 'absolute', left: 0,top:'calc(50vh - 55px)',zIndex:'2'}}>
                              <Box sx={{
                                    ':hover': {
                                      backgroundColor:'#A0937D',
                                          cursor: 'pointer',
                                    },
                                    '@media (min-width: 960px)': {
                                          height: '55px',
                                          width: '55px',
                                    },
                                    '@media (min-width: 320x)': {
                                          height: '35px',
                                          width: '35px',
                                    },
                                    backgroundColor: 'grey',
                                    height: '25px',
                                    width: '25px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                              }}>
                                    <ArrowLeftIcon 
                                                sx={{ color: '#FDFFD2', 
                                                         fontSize: '20px',
                                                         '@media (min-width: 960px)': {
                                                         fontSize: '55px'
                                                      },
                                                '@media (min-width: 320x)': {
                                                      fontSize: '20px'
                                                }, }}
                                                onClick={slideLeft} />  </Box>
                                                </IconButton>   

        <TransitionGroup childFactory={childFactory(direction)}>
          <CSSTransition key={index} timeout={495} classNames={direction}>
            <Box
              display='flex'
              flexDirection='column'
              position='absolute'
              height='calc(100vh - 70px)'
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 70px)'
              }}
              width='100%'
              justifyContent='center'
              alignItems='center'
            >
              <Box style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '10px',
                borderRadius: '5px',
                backdropFilter: 'blur(5px)',
                width: '75%',
                display: 'block'
              }}>
                <Typography variant="h2" color="white" sx={{
                  '@media (max-height: 320px), (max-width: 480px)': {
                    fontSize: '40px'
                  }
                }}>{headingText}<span style={{ color: "#E88D67" }}> {heighlightedHeadingText}</span></Typography>
                 <Typography
                variant="body2"
                color='white'
                paddingY={'10px'}
              fontSize={'1rem'}
            >
              {bodyText}
            </Typography>
              </Box>
              <Typography variant="h6"
                sx={{
                  display: 'block',
                  position: 'relative',
                  top: '25%',
                  '@media (max-height: 320px)': {
                    top: '10%'
                  }
                }}
                color="white">
                RAMNOVA
                <Typography variant="caption"
                  color='white'
                  sx={{
                    display: 'flex',
                    fontSize: '15px',
                    alignItems: "center",
                    '@media (max-height: 320px)': {
                      fontSize: '10px'
                    },
                    justifyContent: 'center'
                  }}
                  gutterBottom>
                  Healthcare
                </Typography>
              </Typography>
            </Box>
          </CSSTransition>
        </TransitionGroup>

       <IconButton style={{ position: 'absolute', right: 0,top:'calc(50vh - 55px)'}}>
                              <Box sx={{
                                    ':hover': {
                                          backgroundColor:'#A0937D',
                                          cursor: 'pointer',
                                    },
                                    '@media (min-width: 960px)': {
                                          height: '55px',
                                          width: '55px',
                                    },
                                    '@media (min-width: 320x)': {
                                          height: '35px',
                                          width: '35px',
                                    },
                                    backgroundColor: 'grey',
                                    height: '25px',
                                    width: '25px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                              }}>
                                    <ArrowRightIcon sx={{ color: '#FDFFD2', 
                                                         fontSize: '20px',
                                                         '@media (min-width: 960px)': {
                                                         fontSize: '55px'
                                                      },
                                                '@media (min-width: 320x)': {
                                                      fontSize: '20px'
                                                }, }}
                                                onClick={slideRight} />
                              </Box>
                  </IconButton>   
      </Card>
    </Box>
  );
}
