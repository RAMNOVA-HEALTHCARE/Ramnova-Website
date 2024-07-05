import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Typography } from "@mui/material"

export default function ProductsDisplayCard({ i, handleProductClick, checker, ProductName, ProductImageLink }){
      return (
      <Card sx={{ maxWidth: 345,borderRadius:'15px'}}>
                        <CardActionArea 
                       onClick={(e) => {
                                          e.stopPropagation();    
                                          console.log(checker)
                                          handleProductClick(checker, i);
                                          console.log(checker)
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
                              <CardContent sx={{backgroundColor:'#EEEDEB'}}> 
                                    <Typography variant="h5" component="div" sx={{fontSize:'2em',
                                                         fontWeight: '400',
                                                      }}
                                    >
                                          {ProductName}
                                    </Typography>
                              </CardContent>
                        </CardActionArea>
                  </Card>
      )
}