import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';
import { Typography } from "@mui/material"
// import {Chip} from '@mui/material/Chip';
import Chip from '@mui/material/Chip';
export default function ProductsDisplayCard({ i, handleProductClick, checker, ProductName, ProductImageLink,ProductCategory}){
      return (
      <Card sx={{ maxWidth: 345,borderRadius:'15px'}}>
                        <CardActionArea 
                       onClick={(e) => {
                                          e.stopPropagation();    
                                          handleProductClick(checker, i);
                              }}
                        >
                              <CardMedia
                                    component="img"
                                    image={ProductImageLink}
                                    alt="fetch error"
                                    sx={{
                                          maxHeight:'250px',
                                          
                                    }}
                              />
                              <CardContent sx={{backgroundColor:'#373a41'}}> 
                                    <Typography variant="h5" component="div" sx={{fontSize:'2em',
                                                         fontWeight: '400',color:'white'
                                                      }}
                                    >
                                          {ProductName}
                                    </Typography>
                              <Box height={10} marginBottom={'20px'} padding={0}>
                              <Chip label={ProductCategory} variant="outlined" 
                              sx={{
                                    position:'absolute',
                                    right:'15px',
                                    color:'white',
                                    fontSize:'1rem'
                              }}
                              />
                              </Box>
                              </CardContent>
                        </CardActionArea>
                  </Card>
      )
}