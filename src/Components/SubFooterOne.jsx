import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

export default function SubFooterOne(){
      return (
            <Box sx={{ minWidth: 275 }}
                              >
                                    <CardContent>
                                          <Typography sx={{ fontSize: 22 }} color="white" gutterBottom>
                                                Contacts
                                          </Typography >
                                          <Typography variant="body2"
                                                sx={{
                                                      fontSize: 15,
                                                      marginTop: '15px'
                                                }} >
                                                FL 104, H-1 Building,Yogi Milan Ultan Falia, 
                                                Silvassa, Dadra & Nagar Haveli <br />
                                                Gujarat-396230
                                          </Typography>
                                          <List sx={{ marginTop: '5px' }}>
                                                <ListItem disablePadding>
                                                      <ListItemIcon>
                                                            <EmailTwoToneIcon fontSize='small' sx={{ color: 'white' }} />
                                                      </ListItemIcon>
                                                      <ListItemText primary="ramnovainfo@gmail.com" />
                                                </ListItem>
                                                <ListItem disablePadding>
                                                      <ListItemIcon>
                                                            <CallTwoToneIcon fontSize='small' sx={{ color: 'white' }} />
                                                      </ListItemIcon>
                                                      <ListItemText primary="(+91) 797-997-5763" />
                                                </ListItem>
                                          </List>
                                    </CardContent>
                              </Box>
      );
}