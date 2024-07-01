import { Box, Typography } from "@mui/material";

export default function Jumbotron(props) {
      return (
            <>
                  <div style={{
                        backgroundImage: 'url(' + props.backgroundImageLink + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        Width: '100%',
                        height: 'calc(100vh - 70px)',
                        backgroundAttachment: "fixed"
                  }}>
                        <Box style={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center'
                        }}
                        >
                              <Box
                                    sx={{
                                          backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                          borderRadius: '5px',
                                          maxWidth: '70%',
                                          backdropFilter: 'blur(2px)',
                                          padding: '2.5%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          '@media (max-width: 600px)': {
                                                backdropFilter: 'blur(4px)',
                                          }
                                    }}
                              >
                                    <Typography variant="h2"
                                          textAlign={'center'}
                                          color="white"
                                          sx={{
                                                '@media (max-height: 320px), (max-width: 480px)': {
                                                      fontSize: '40px'
                                                }
                                          }}>
                                          {props.heading}{props.heightlighterHeading}
                                    </Typography>
                                    <Typography variant="caption"
                                          color='white'
                                          sx={{
                                                display: 'flex',
                                                fontSize: '15px',
                                                alignItems: "center", '@media (max-height: 320px)': {
                                                      fontSize: '10px'
                                                },
                                                justifyContent: 'center'
                                          }}
                                          gutterBottom>
                                          {props.bodyText}
                                          <span style={{
                                                color: "#f1633b",
                                                display: "contents",
                                          }}>
                                                {props.highlightedBodeyText}</span>
                                    </Typography>
                              </Box>
                        </Box>

                  </div>


            </>
      )

}