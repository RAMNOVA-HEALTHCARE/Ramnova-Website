import React, { useState } from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const SectionHeading = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography variant="h6">{title}</Typography>
      <Divider 
        sx={{ 
          width: isHovered ? '6em' : '3em', 
          borderColor: '#3D1F2B', 
          borderWidth: 1.5, 
          my: 1.5,
          transition: 'width 0.3s ease-in-out'
        }} 
      />
    </Box>
  );
};

const AboutRamnova = () => {
  return (
    <Container sx={{ width: '80%', mx: 'auto' , mt : '3em' , mb : '2.5em' }}>
      <Typography 
  variant="h2" 
  align="center" 
  gutterBottom 
  sx={{ 
    fontFamily: '"Mundo Serif Medium", serif', 
    fontWeight: '800',
    fontSize: '2.5em', 
    marginBottom : '1em'
  }}
>
  What Defines Us!
</Typography>

      
      <Typography paragraph sx={{ color: '#373A40' }}>
        At Ramnova Healthcare Private Limited, we  market the best quality products, and we do our best to satisfy our National and International customers. We aim to continuously improve the quality of life for our patients by providing safe and effective products. Because of having high quality and affordable prices, our products are ruling the market after confirming the quality tests and meeting requirements of our custom.
      </Typography>
      
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box 
              sx={{
                backgroundColor: '#3D1F2B',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ArrowForward sx={{ color: 'white', fontSize: 20 }} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary={<SectionHeading title="OUR PRODUCTS" />}
            secondary="Our strong commitment of providing quality products is boasted by in-depth industry knowledge, well-qualified team of professionals, as well as hi-tech and advanced infrastructure. Resultantly, creating mutually beneficial associations for all the parties involved."
          />
        </ListItem>
        
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box 
              sx={{
                backgroundColor: '#3D1F2B',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ArrowForward sx={{ color: 'white', fontSize: 20 }} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary={<SectionHeading title="OUR RESPONSIBILITY" />}
            secondary="Be it research for new molecules, APIs and formulations to support improved and affordable medicine or be it bringing about smiles and happiness around us by giving back to the community, our every activity has 'Improvement of Life' and 'Betterment of People' at its core."
          />
        </ListItem>
        
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box 
              sx={{
                backgroundColor: '#3D1F2B',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ArrowForward sx={{ color: 'white', fontSize: 20 }} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary={<SectionHeading title="OUR PROMISE" />}
            secondary="With our experience and consumer understanding, we indulge in continuous development through advanced research, our promise of 'Uncompromised Care' reflects in every product."
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default AboutRamnova;