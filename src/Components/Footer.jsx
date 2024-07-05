import * as React from 'react';
import Grid from '@mui/material/Grid';
import SubFooterOne from './SubFooterOne';
import SubFooterTwo from './SubFooterTwo';
import SubFooterThree from './SubFooterThree';

const BottomFooter = () => (
            <div  style={{ height: '30px', backgroundColor: '#222323', color: 'white', textAlign: 'center', justifyContent: 'center', padding: '5px',
                  position:'relative',bottom:'0px'
            }}>
                  Copyright © | Ramnova Healthcare
            </div>
)
export default function Footer() {

      return (
            <>
                  <Grid container width='100%' minHeight='340px' zIndex={'3'} style={{position:'relative',bottom:'0px'}}>
                        <Grid item xs={12} sm={6} md={3}
                              sx={{
                                    backgroundColor: '#222323',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: '235px',
                                    padding: '40px'
                              }}>

                              <SubFooterOne></SubFooterOne>

                        </Grid>

                        <SubFooterTwo></SubFooterTwo>

                        <Grid item xs={12} sm={6} md={3}
                              sx={{
                                    backgroundColor: '#e0583b',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: '235px'
                              }}>

                           <SubFooterThree></SubFooterThree>
                        </Grid>
                  </Grid>
                  <BottomFooter />
            </>
      );
}