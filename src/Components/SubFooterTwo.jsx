import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import FooterCardData from "../assets/Data/FooterCardData.json"
import { CircularProgress} from "@mui/material"

export default function SubFooterTwo(){
      const [cardDatalocal, setCardDatalocal] = React.useState([]);
      React.useEffect(() => {
            setCardDatalocal(FooterCardData.FooterCardData);
      }, [])
      if (cardDatalocal.length === 0||
            cardDatalocal[0].cardLinksList.length===0||
            cardDatalocal[1].cardLinksList.length===0
      ) {
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
<>
{
                              cardDatalocal.slice(0,2).map((cardData, index) => {
                                    return (
                                          <Grid
                                                key={index}
                                                item xs={12} sm={6} md={3}
                                                sx={{
                                                      backgroundColor: index == 0 ?
                                                            {
                                                                  xs: '#222323',
                                                                  lg: '#e0583b'
                                                            }
                                                            : '#e0583b',
                                                      borderTop: index == 0 ? {
                                                            xs: 'solid white',
                                                            sm: 'none'
                                                      } : 'none',
                                                      color: 'white',
                                                      display: 'flex',
                                                      justifyContent: 'center',
                                                      alignItems: 'center',
                                                      minHeight: '235px',
                                                      padding: '30px'
                                                }}>
                                                
                                                <List
                                                      subheader={
                                                            <ListSubheader
                                                                  sx={{
                                                                        fontSize: 22,
                                                                        color: 'white',
                                                                        backgroundColor: index == 0 ?
                                                                              {
                                                                                    xs: '#222323',
                                                                                    lg: '#e0583b'
                                                                              }
                                                                              : '#e0583b'
                                                                  }}
                                                                  component="div">
                                                                  {cardData.cardTitle}
                                                            </ListSubheader>}
                                                >
                                                      {
                                                            cardData.cardLinksList.map((cardLink, linkIndex) => {
                                                                  
                                                                  return (
                                                                        <ListItem key={linkIndex}
                                                                              disablePadding
                                                                              height='10px'
                                                                              sx={{
                                                                                    ':hover': {
                                                                                          borderRadius:'5px',
                                                                                          backgroundColor: index == 0 ?
                                                                                                {
                                                                                                      xs: '#e0583b',
                                                                                                      lg: '#353a40'
                                                                                                }
                                                                                                : '#353a40'
                                                                                    }
                                                                              }}
                                                                        >
                                                                              <ListItemButton href={cardLink[1]}
                                                                                    target='_blank'>
                                                                                    <ListItemText
                                                                                          primary={cardLink[0]} />
                                                                              </ListItemButton>
                                                                        </ListItem>
                                                                  )
                                                            })
                                                      }
                                                </List>

                                          </Grid>)
                              })
                        }
</>
      )
}