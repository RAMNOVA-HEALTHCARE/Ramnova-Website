import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';
import { Typography } from "@mui/material"

export default function ProductsDisplayCard({ i, handleProductClick, checker, ProductName, ProductImageLink, ProductDiscription }) {
      return (
            <Card

                  onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(checker, i);
                  }}
                  sx={{
                        maxWidth: '65vw',
                        maxHeight: '75vh',
                        boxShadow: 'none',
                        direction: 'row',
                        display: 'flex',
                        backgroundColor: 'transparent',
                        '@media (max-width:1200px)': {
                              maxWidth: '85vw',
                              maxHeight: '85vh',
                              boxShadow: 'none',
                        },
                        '@media (max-width:786px)': {
                              maxWidth: '75vw',
                              maxHeight: '85vh',
                              boxShadow: 'none',
                              display: 'flex',
                              flexDirection: 'column'
                        },
                        '@media (max-width:470px)': {
                              maxWidth: '95vw',
                              maxHeight: '85vh',
                              boxShadow: 'none',
                              flexDirection: 'column'
                        }
                  }}>

                  <CardMedia

                        component="img"
                        image={ProductImageLink}
                        alt="fetch error"
                        sx={{
                              margin: '5px',
                              marginRight: '0',
                              borderRadius: '60px',
                              maxWidth: '60%',
                              objectFit: 'contain',
                              '@media (max-width:786px)': {
                                    margin: '5px auto',
                                    borderRadius: '60px',
                                    maxWidth: '80%',
                              }
                        }}
                  />
                  <CardContent sx={{
                        display: 'flex',
                        background: 'rgba(0, 0, 0, 0)',
                        margin: '5px',
                        justifyContent: 'center',
                        flexDirection: 'column',

                  }}>
                        <Typography variant="h5" component="div"
                              gutterBottom
                              sx={{
                                    fontSize: '2em',
                                    fontWeight: '400',
                                    paddingLeft: '10px',
                                    color: 'white',
                                    '@media (max-width:768px)': {
                                          fontSize: '1.2em',
                                    }
                              }}
                        >
                              {ProductName}
                        </Typography>
                        <Box sx={{

                              borderRadius: '10px',
                              marginX: '5px', marginTop: '10px',
                              background: 'rgba(200, 200, 200,0.1)',
                              backdropFilter: 'blur(10px)', // Applies the glassy effect
                              WebkitBackdropFilter: 'blur(10px)'
                              
                        }}>

                              <Typography variant="body" component="div"
                                    sx={{
                                          fontSize: '1em',
                                          fontWeight: '400',
                                          padding: '10px',
                                          color: 'white',
                                          backgroundColor: 'white', borderRadius: '10px',
                                          marginX: '5px', marginTop: '10px',
                                          background: 'rgba(0,0,0,0)',
                                          '@media (max-width:768px)': {
                                          fontSize: '0.8em',
                                          padding:'5px'
                                    }
                                    }}
                              >
                                    {ProductDiscription}
                              </Typography>
                        </Box>
                  </CardContent>
            </Card>
      )
}
