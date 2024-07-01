import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import CustomButton from './CustomButton';
import { useEffect, useState } from 'react';


export default function MajorDisplayCard(props) {

  const [trigger, setTrigger] = useState(false);

  const containerRef = React.useRef(null);

  const changeTriggerFuntion = (entries) => {
    const [entry] = entries;
    setTrigger(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(changeTriggerFuntion, {
      root: null,
      rootMargin: "0px",
      threshold: 0.35
    });

    if (containerRef.current)
      observer.observe(containerRef.current);

    return () => {
      if (containerRef.current)
        observer.unobserve(containerRef.current);
    }
  }, []);

  // Determines whether this card should be toward the right or left
  const [leftwards, setLeftwards] = useState(true);
  useEffect(() => {
    const isLeft = props.index % 2 === 0;
    setLeftwards(isLeft);
  }, [props.index]);

  return (
    <Box
      id={props.id}
      paddingX={"5%"} paddingY={'15px'} margin={'15px'}>

      <Card style={{ boxShadow: "none" }}>
        <Box
          ref={containerRef}
          style={{
            display: 'flex',
            backgroundColor: props.cardtheme == 'light' ? 'white' : '#333232',
            paddingX: '5px',
            paddingBottom: '20px',
            borderRadius: 0,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderLeft:
              props.transtionsActive == 'false' ?
                '0' :
                leftwards & props.cardtheme == 'light' ? 'solid black 2px' : 'solid 0',
            borderRight:
              props.transtionsActive == 'false' ?
                '0' :
                leftwards || props.cardtheme != 'light' ? '0' : 'solid black 2px'
          }}
          border={0}
          sx={{
            flexDirection: {
              xs: 'column',
              lg: leftwards ? 'row' : 'row-reverse'
            }
          }}
        >
          <CardContent
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: leftwards ? 'start' : 'end',
              transform:
                props.transtionsActive == 'false' ?
                  'none' :
                  trigger ? 'translateX(0)' : leftwards ? 'translateX(-100%)' : 'translateX(100%)',
              opacity: 
              props.transtionsActive=='false'?
              '1':
              trigger ? 1 : 0,
              transition:
                props.transtionsActive == 'false' ?
                  'none' :
                  'transform 800ms ease-in-out, opacity 800ms ease-in-out',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize={'2rem'}
              color={'#e66137'}
            >
              {props.contentYear}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize={'2.5rem'}
              color={props.cardtheme == 'light' ? 'black' : 'white'}
            >
              {props.contentHeading}
            </Typography>
            <Typography
              variant="body2"
              color={props.cardtheme == 'light' ? 'black' : 'white'}
              paddingY={'10px'}
              fontSize={'1rem'}
              textAlign={leftwards ? 'left' : 'right'}
            >
              {props.contentText}
            </Typography>

            {
              (props.cardtheme != 'light') &&
              <CustomButton 
              isMoreEvents={false}
              buttonText={props.buttonText}
              contentButtonLink={props.contentButtonLink} />
            }


          </CardContent>

          <CardMedia
            component="img"
            image={props.imgL}
            sx={{
              width: '48%',
              minWidth: '600px',
              transform:
                props.transtionsActive == 'false' ?
                  'none' : trigger ?
                    'translateX(0)' : leftwards ?
                      'translateX(100%)' : 'translateX(-100%)',
              opacity: props.transtionsActive == 'false' ?
                '1' :
                trigger ? 1 : 0,
              transition:
                props.transtionsActive == 'false' ?
                  'none' :
                  'transform 800ms ease-in-out, opacity 800ms ease-in-out'
            }}
            alt="Event Image"
          />
        </Box>
      </Card>
    </Box>
  );
}
