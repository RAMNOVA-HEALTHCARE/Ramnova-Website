import Jumbotron from "./Jumbotron"
import MajorDisplayCard from "./MajorDisplayCard"
import Typography from '@mui/material/Typography'
import { useState,useEffect } from "react"
import CardDataFile from '../assets/Data/AboutUsCardsData.json'
import { LinearProgress } from "@mui/material"

export default function AboutUs(){

const [cardDatalocal, setCardDatalocal] = useState([]);
  useEffect(() => {
      setCardDatalocal(CardDataFile.cardData);
}, []);
const backgroundImageLink='./src/assets/Images/who.jpg';

//app doesnt break while fetching and displays a loading "bar"
if (cardDatalocal.length === 0) {
      return <LinearProgress />;
    }

      return (
            <>
            <Jumbotron
                  key={backgroundImageLink}
             heading={"WHO"}
             heightlighterHeading={<span key="highlight" style={{color:"#f1633b"}}> WE ARE ?</span>}
            //  heightlighterHeading={<span key="highlight" style={{color:"#f1633b"}}>WE</span>}
             bodyText={["At Ramnova Healthcare, we are dedicated to revolutionizing the pharmaceutical industry in India. Headquartered in Gujarat, Our passionate team is committed to delivering high-quality healthcare solutions. With state-of-the-art facilities and a relentless drive for innovation, we aim to improve lives and set new standards in the industry."]}
            // highlightedBodeyText={['NOT ME BUT YOU!']}
            backgroundImageLink={backgroundImageLink}
            />

                  <Typography variant="h4" 
                              color="black"
                              textAlign={"center"}
                              margin={"15px"}
                              sx={{

                                    textDecoration: 'underline'
                              }}
                              >
                  About Us
                  </Typography>
            {cardDatalocal.map((cardData, index) => (
            <MajorDisplayCard 
                  key={index}
                  index={index}
                  cardtheme="light"
                  imgL={cardData.contentImageLink}
                  contentText={cardData.contentText}
        />
      ))}

            </>     
      )
} 