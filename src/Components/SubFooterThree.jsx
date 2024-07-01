import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import FooterCardData from "../assets/Data/FooterCardData.json";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import { CircularProgress} from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function SubFooterThree(){

      const [cardDatalocal, setCardDatalocal] = React.useState([]);
      React.useEffect(() => {
            setCardDatalocal(FooterCardData.FooterCardData);
      }, [])
      if (cardDatalocal.length === 0||cardDatalocal[2].cardLinksList.length===0) {
            return (
                  <Grid
                                                item xs={12} sm={12} md={6}
                                                sx={{
                                                      backgroundColor:'#e0583b',
                                                      display: 'flex',
                                                      justifyContent:'center',
                                                      alignItems: 'center',
                                                      minHeight: '235px',
                                                      padding: '30px'
                                                }}>

                        <CircularProgress/>
                  </Grid>      
      )
      }
return (
      <List
                                    subheader={
                                          <ListSubheader
                                                sx={{
                                                      fontSize: 22,
                                                      color: 'white',
                                                      backgroundColor: '#e0583b',
                                                }}
                                                
                                                component="div">
                                                {cardDatalocal[2].cardTitle}
                                          </ListSubheader>
                                    }
                                    >

                                    <ListItem disablePadding
                                          sx={{
                                                ':hover': {
                                                      borderRadius: '5px',
                                                      backgroundColor: '#353a40'
                                                },
                                          }}
                                    >
                                    <ListItemButton href={cardDatalocal[2].cardLinksList[0][1]}
                                                              target='_blank'
                                    > 
                                          <ListItemIcon sx={{justifyContent:'center'}}>
                                                <FacebookTwoToneIcon fontSize='small' 
                                                                        sx={{ color: 'white',
                                                                              minWidth:'0',
                                                                              marginRight:'10px'
                                                                        }} 
                                                />
                                                </ListItemIcon>
                                                      <ListItemText
                                                            primary={cardDatalocal[2].cardLinksList[0][0]} />
                                                </ListItemButton>
                                    </ListItem>

                                    <ListItem disablePadding
                                          sx={{
                                                ':hover': {
                                                      borderRadius: '5px',
                                                      backgroundColor: '#353a40'
                                                }
                                          }}
                                    >
                                    <ListItemButton href={cardDatalocal[2].cardLinksList[1][1]}
                                                              target='_blank'
                                    > 
                                          <ListItemIcon sx={{justifyContent:'center'}}>
                                                <LinkedInIcon fontSize='small' 
                                                                        sx={{ color: 'white',
                                                                              minWidth:'0',
                                                                              marginRight:'10px'
                                                                        }} 
                                                />
                                                </ListItemIcon>
                                                      <ListItemText
                                                            primary={cardDatalocal[2].cardLinksList[1][0]} />
                                                </ListItemButton>
                                    </ListItem>

                                    <ListItem disablePadding
                                          sx={{
                                                ':hover': {
                                                      borderRadius: '5px',
                                                      backgroundColor: '#353a40'
                                                }
                                          }}
                                    >
                                    <ListItemButton href={cardDatalocal[2].cardLinksList[2][1]}
                                                              target='_blank'
                                    > 
                                          <ListItemIcon sx={{justifyContent:'center'}}>
                                                <InstagramIcon fontSize='small' 
                                                                        sx={{ color: 'white',
                                                                              minWidth:'0',
                                                                              marginRight:'10px'
                                                                        }} 
                                                />
                                                </ListItemIcon>
                                                      <ListItemText
                                                            primary={cardDatalocal[2].cardLinksList[2][0]} />
                                                </ListItemButton>
                                    </ListItem>

                                    <ListItem disablePadding
                                          sx={{
                                                ':hover': {
                                                      borderRadius: '5px',
                                                      backgroundColor: '#353a40'
                                                }
                                          }}
                                    >
                                    <ListItemButton href={cardDatalocal[2].cardLinksList[3][1]}
                                                              target='_blank'
                                    > 
                                          <ListItemIcon sx={{justifyContent:'center'}}>
                                                <YouTubeIcon fontSize='small' 
                                                                        sx={{ color: 'white',
                                                                              minWidth:'0',
                                                                              marginRight:'10px'
                                                                        }} 
                                                />
                                                </ListItemIcon>
                                                      <ListItemText
                                                            primary={cardDatalocal[2].cardLinksList[3][0]} />
                                                </ListItemButton>
                                    </ListItem>
                              </List>
)
      
}