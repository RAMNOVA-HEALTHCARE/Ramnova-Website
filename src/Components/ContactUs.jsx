import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form Data:', formData);

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      query: ''
    });
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch', // Ensure equal height for all boxes
            marginBottom: '2rem',
            '& > :not(:last-child)': {
              marginRight: '1rem', // Space between boxes
            },
          }}
        >
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              borderRadius: '8px',
              transition: 'background-color 0.3s',
              color: '#222323', // Text color when not hovered
              '&:hover': {
                backgroundColor: '#e0583b',
                color: 'white', // Text color on hover
              },
              flex: '1 1 300px', // Equal width for all boxes, adjust as needed
              minWidth: '200px', // Minimum width to ensure responsiveness
            }}
          >
            <PhoneIcon sx={{ fontSize: 25 }} />
            <Typography align="center">(+91) 797-997-5763</Typography>
          </Paper>

          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              borderRadius: '8px',
              transition: 'background-color 0.3s',
              color: '#222323', // Text color when not hovered
              '&:hover': {
                backgroundColor: '#e0583b',
                color: 'white', // Text color on hover
              },
              flex: '1 1 300px', // Equal width for all boxes, adjust as needed
              minWidth: '200px', // Minimum width to ensure responsiveness
            }}
          >
            <EmailIcon sx={{ fontSize: 25 }} />
            <Typography align="center">ramnovainfo@gmail.com</Typography>
          </Paper>

          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              borderRadius: '8px',
              transition: 'background-color 0.3s',
              color: '#222323', // Text color when not hovered
              '&:hover': {
                backgroundColor: '#e0583b',
                color: 'white', // Text color on hover
              },
              flex: '1 1 300px', // Equal width for all boxes, adjust as needed
              minWidth: '200px', // Minimum width to ensure responsiveness
            }}
          >
            <LocationOnIcon sx={{ fontSize: 25 }} />
            <Typography align="center">FL 104, H-1 Building, Yogi Milan Ultan Falia, Silvassa, Dadra & Nagar Haveli - 396230</Typography>
          </Paper>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginTop: '2rem',
          }}
        >
          <Typography variant="body1" color="textSecondary" paragraph align="center">
            Got a product query? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              '& .MuiTextField-root': { mb: 2 },
              '& .MuiButton-root': { mt: 2 },
              width: '100%', // Full width for form elements
            }}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              name="query"
              multiline
              rows={6}
              value={formData.query}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" type="submit" fullWidth sx={{ backgroundColor: '#222323', color: 'white', '&:hover': { backgroundColor: '#e0583b' } }}>
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
