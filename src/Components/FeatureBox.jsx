import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import GroupIcon from '@mui/icons-material/Group';

const FeatureBox = ({ icon, title, subtitle }) => (
  <Paper
    elevation={10}
    sx={{
      p: 2, // Increased padding
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      bgcolor: '#2a2a2a',
      color: 'white',
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      },
    }}
  >
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '4em', // Slightly larger icon container
      height: '2em',
      mr: 2.5 // Increased margin between icon and text
    }}>
      {React.cloneElement(icon, { sx: { fontSize: 28, color: '#e75480' } })}
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold" sx={{ lineHeight: 1.3, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ lineHeight: 1.3 }}>
        {subtitle}
      </Typography>
    </Box>
  </Paper>
);

const FeatureSection = () => {
  return (
    <Box
    
    sx={{ 
      bgcolor: '#3D1F2B', 
      display: 'flex',
      justifyContent: 'center',      
      overflow: 'hidden',
    }}>
      <Grid 
        container 
        spacing={2} 
        maxWidth="lg" 
        px={1}
        sx={{
        display: 'flex',
          margin: '20px',
          paddingBottom:'20px'
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <FeatureBox
            icon={<EmojiEventsIcon />}
            title="WE'RE KNOWN FOR"
            subtitle="EXCELLENCE"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureBox
            icon={<HandshakeIcon />}
            title="WE BUILD"
            subtitle="PARTNERSHIPS"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureBox
            icon={<ThumbUpAltIcon />}
            title="GUIDED BY"
            subtitle="COMMITMENT"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureBox
            icon={<GroupIcon />}
            title="A TEAM OF"
            subtitle="PROFESSIONALS"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureSection;