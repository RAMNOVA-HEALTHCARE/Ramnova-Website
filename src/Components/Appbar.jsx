import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';

const pagesInfo = [{ page: 'home', pageLink: '/home' },
{ page: 'products', pageLink: '/products' },
{ page: 'about Us', pageLink: '/aboutUs' },
{ page: 'contact Us', pageLink: '/contactUs' }

// add this in the future,req backend
// ,{ page: 'Contact Us', pageLink: '/contactUs' }

];

import logo from '../assets/Images/LOGO.png';
import textlogo from '../assets/Images/Ramnova-white.png';



function Appbar() {

      const location = useLocation();
    
      React.useEffect(() => {
        let path = location.pathname.split('/');
        let correctPath=false;
        
        if(path.length>2&&path[1]&&path[2]!='#'){
            correctPath=false;
        }
        else{
              path = path[1].replace(/([A-Z])/g, ' $1');
              
              pagesInfo.forEach((potentialPage)=>{
                    if(path==potentialPage.page)
                        correctPath=true;
            })
      }
        if(correctPath)
            setActivePage(path);
        else 
            setActivePage('');
      }, [location]);
          
      const [activePage,setActivePage]=React.useState('');
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const isMediumScreen = useMediaQuery('(min-width:600px)');
      const isLargeScreen = useMediaQuery('(min-width:960px)');
      const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');

      const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
            window.scrollTo({top:0,behavior:'instant'});
            setAnchorElNav(null);
      };
      const navigate = useNavigate();

      const handleClick = (pageInfo) => {
            navigate(pageInfo.pageLink); 
            window.scrollTo({top:0,behavior:'instant'});
      };

      return (
            <>
        <div style={{marginBottom:'70px'}}></div>

            <AppBar position="fixed" style={{ paddingLeft: '0', paddingRight: '0', background: '#353A40' }}>
                  <Container maxWidth="true" sx={{ paddingLeft: '0', paddingRight: '0', background: '#353A40', height: '70px', }} >
                        <Toolbar disableGutters sx={{
                              paddingLeft: '0px',
                              paddingRight: '0px',
                              '@media (min-width: 960px)': {
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                              },
                              '@media (min-width: 320x)': {
                                    paddingLeft: '0x',
                                    paddingRight: '0px',
                              },
                        }}>
                              <img
                                    src={logo}
                                    alt="logo"
                                    loading="lazy"
                                    style={{
                                          width: isMediumScreen ? (isLargeScreen ? '60px' : '50px') : '50px',
                                    }}
                              />
                              <Box sx={{ display: 'block' }}>
                                    <Link to="/home"
                                          onClick={()=>setActivePage('Home')}
                                          style={{ color: "inherit", textDecoration: 'none' }}>

                                    <img
                                                    src={textlogo}
                                                    alt="Ramnova HealthCare"
                                                    style={{ marginLeft:'1em' , maxWidth: '35%', height: 'auto' }}
                                                />
                                    </Link>

                              </Box>
                              <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', lg: 'flex' } }}>
                                    {pagesInfo.map((pageInfo) => (
                                          <Button
                                          key={pageInfo.pageLink}
                                          onClick={() => handleClick(pageInfo)}
                                          sx={{
                                                my: 2,
                                                color:activePage==pageInfo.page?'#FF204E':'white',
                                                borderBottom:activePage==pageInfo.page?"1px solid #FF204E":'none',
                                                borderRadius:'0',
                                                display: 'block',
                                                // backgroundColor:activePage==pageInfo.page?"grey":'none',
                                                ':hover': {
                                                      // color: '#74512D',    
                                                      cursor: 'pointer',
                                                },
                                          }}
                                          >
                                                {pageInfo.page}
                                          </Button>
                                    ))}
                              </Box>
                              <Box

sx={{
      
      flexGrow: 1,
      justifyContent: 'right',
      display: { xs: 'flex', lg: 'none' },
}}>
                                    <IconButton
                                          sx={{ padding: 0, marginRight: '5px',color:"white" }}
                                          size="large"
                                          aria-label="account of current user"
                                          aria-controls="menu-appbar"
                                          aria-haspopup="true"
                                          onClick={handleOpenNavMenu}
                                            
                                          >
                                          <MenuIcon/>
                                    </IconButton>
                                    <Menu
                                          id="menu-appbar"
                                          anchorEl={anchorElNav}
                                          anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                          }}
                                          keepMounted
                                          transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                          }}
                                          open={Boolean(anchorElNav)}
                                          onClose={handleCloseNavMenu}
                                          sx={{
                                                display: { xs: 'flex', xl: 'none' },
                                                '& .MuiList-padding': {
                                                      paddingTop: 0,
                                                      paddingBottom: 0,
                                                },
                                          }}
                                          >
                                          <MenuList >
                                                {pagesInfo.map((pageInfo) => (
                                                      <Link to={pageInfo.pageLink}
                                                      key={pageInfo.page}
                                                      style={{
                                                            color: "white",
                                                            textDecoration: 'none',
                                                      }}>
                                                            <MenuItem
                                                                  onClick={() => {
                                                                       
                                                                        handleCloseNavMenu();
                                                                  }}
                                                                  sx={{
                                                                        background: '#353A40',
                                                                        color: 'white',
                                                                        ':hover': {
                                                                              color: '#FF204E',
                                                                              background: '#353A40',
                                                                              cursor: 'pointer',
                                                                        },
                                                                  }}>
                                                                  <Typography textAlign="right">{pageInfo.page}</Typography>
                                                            </MenuItem>
                                                      </Link>
                                                ))}
                                          </MenuList>
                                    </Menu>
                              </Box>
                        </Toolbar>
                  </Container>
            </AppBar>
      </>
      );
}
export default Appbar;
