import Jumbotron from "./Jumbotron"
import MajorDisplayCard from "./MajorDisplayCard"
import Typography from '@mui/material/Typography'
import { useState,useEffect } from "react"
import CardDataFile from '../assets/Data/AboutUsCardsData.json'
import { LinearProgress } from "@mui/material"
import StatisticsComponent from "./Statistic"
import TextCarousal from './TextCarousal'

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
             heading={"WHO ARE "}
             heightlighterHeading={<span key="highlight" style={{color:"#E88D67"}}>WE ?</span>}
            //  heightlighterHeading={<span key="highlight" style={{color:"#f1633b"}}>WE</span>}
             bodyText={["At Ramnova Healthcare, we are dedicated to revolutionizing the pharmaceutical industry in India. Headquartered in Gujarat, Our passionate team is committed to delivering high-quality healthcare solutions. With state-of-the-art facilities and a relentless drive for innovation, we aim to improve lives and set new standards in the industry."]}
            // highlightedBodeyText={['NOT ME BUT YOU!']}
            backgroundImageLink={backgroundImageLink}
            />

                  <Typography variant="h4" 
                              color="black"
                              textAlign={"center"}
                              margin={"1em"}
                              sx={{

                                    textDecoration: 'underline'
                              }}
                              >
                  About Us
                  </Typography>

                  <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#f8f8f8',
      padding: '2em 0',
      maxWidth: '100%',
      margin: 'auto',
      borderRadius: '30px',
      // boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for depth
    }}>
      <TextCarousal /> 
      <div style={{ 
        flex: '1',
        marginLeft: '2em', // Adjust spacing between TextCarousel and text content
        textAlign: 'left',
        padding: '0 3em', // Adjust padding for additional text content
      }}>
        <h2 style={{ 
          fontFamily: '"Mundo Serif Medium", serif',
          fontSize: '2.5em',
          marginBottom: '1em'
        }}>
          Dedicated to Quality and Care
        </h2>
        <p style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#333'
        }}>
          <b>Ramnova Healthcare Pvt Ltd</b> is committed to marketing superior quality products that meet the needs of both national and international customers. Our products are renowned for their affordability and undergo stringent quality testing to ensure they exceed market standards. Beyond product excellence, we actively engage in research and development to introduce new molecules, APIs, and formulations that enhance healthcare accessibility and affordability. Our commitment to 'Uncompromised Care' drives us to continually innovate and improve lives, reflecting our dedication to quality and integrity in everything we do.
        </p>
        <p style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#666'
        }}>
         We aim to continously improve the quality of life for our patients by providing safe and effective products.
        </p>
      </div>
    </div>

                  <StatisticsComponent/>
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