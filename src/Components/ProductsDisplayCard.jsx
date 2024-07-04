import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Typography } from "@mui/material"

export default function ProductsDisplayCard(){
      return (
      <Card sx={{ maxWidth: 345,borderRadius:'15px'}}>
                        <CardActionArea 
                        onClick={()=>{
                                          alert('hellow');
                              }}
                        >
                              <CardMedia
                                    component="img"
                                    image="./src/assets/Images/Supplements/blemango-5G.png"
                                    alt="green iguana"
                                    sx={{
                                          color:'red',
                                          backgroundColor:'yellow',
                                          maxHeight:'250px',
                                    }}
                              />
                              <CardContent sx={{backgroundColor:'#EEEDEB'}}> 
                                    <Typography variant="h5" component="div" sx={{fontSize:'2em',
                                                         fontWeight: '400',
                                                      }}
                                    >
                                          BLEMANGO - 5G
                                    </Typography>
                              </CardContent>
                        </CardActionArea>
                  </Card>
      )
}