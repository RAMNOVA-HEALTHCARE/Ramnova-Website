import { Backdrop, Grid, Typography } from "@mui/material";
import ProductsDisplayCard from "./ProductsDisplayCard";
import { useEffect, useState, useMemo } from "react";
import ProductsData from "../assets/Data/ProductsData.json";
import { LinearProgress, Pagination, Stack, Box } from "@mui/material";
import ProductView from "./ProductView";

export default function Products() {
      const [productsCardsData, setProductsCardsData] = useState([]);
      const [ind, setInd] = useState(0);
      const [open, setOpen] = useState(false);
      const [pageNumber, setPageNumber] = useState(1);
      const [numberOfpages, setNumberOfpages] = useState(1);

      useEffect(() => {
            const data = ProductsData.ProductsData;
            setProductsCardsData(data);
            setNumberOfpages(Math.ceil(data.length / 6.0));
      }, []);

      const handleProductClick = (c, index) => {
            if (!c) {
                  setInd(index);
                  handleOpen();
            }
            return c, index;
      };

      const handleClose = () => {
            setOpen(false);
      };

      const handleOpen = () => {
            setOpen(true);
      };

      const paginatedProducts = useMemo(() => {
            const startIndex = (pageNumber - 1) * 6;
            const endIndex = startIndex + 6;
            return productsCardsData.slice(startIndex, endIndex);
      }, [pageNumber, productsCardsData]);

      if (productsCardsData.length === 0) {
            return <LinearProgress />;
      } else {
            return (
                  <>
                        <Box
          sx={{
            maxWidth: '90%',
            margin: 'auto',
            marginBottom: '100px',
            marginTop: '150px',
            backgroundColor: '#3a1f2a',
            paddingTop: '0',
            borderRadius: '15px',
            padding: '45px',
            '@media (max-width:470px)': {
              padding: '15px'
            }
          }}
        >
                              <Typography
                                    variant="h2"
                                    sx={{
                                          fontFamily: '"Mundo Serif Medium", serif',
                                          fontWeight: '100',
                                          fontSize: '2.3em',
                                          padding: '0.8em',
                                          color: 'white',
                                          '@media (max-width:470px)':{
                        fontSize:'1.9rem',
                  }
                                    }}
                              >
                                    Our Products
                              </Typography>
                              <Grid container
                                    spacing={2}
                                    rowGap={'10px'}
                                    padding={0}
                                    justifyContent={'center'}
                                    
                                    >
                                    {
                                          paginatedProducts.map((productDataCard, index) => (
                                                <Grid item lg={4} sm={6} xs={12} key={index}>
                                                      <ProductsDisplayCard
                                                            i={index}
                                                            handleProductClick={handleProductClick}
                                                            checker={open}
                                                            ProductCategory={productDataCard.ProductCategory}
                                                            ProductName={productDataCard.productName}
                                                            ProductImageLink={productDataCard.productImageLink}
                                                      />
                                                </Grid>
                                          ))
                                    }
                              </Grid>
                              <Backdrop
                                    sx={{
                                          backgroundColor: 'rgba(3, 3, 3, 0.9)', // Adjusted opacity for visibility
                                          zIndex: (theme) => theme.zIndex.drawer + 1,
                                    }}
                                    open={open}
                                    onClick={handleClose}
                              >
                                    {productsCardsData[ind + (pageNumber - 1) * 6] && (
                                          <ProductView
                                                i={ind + (pageNumber - 1) * 6}
                                                handleProductClick={handleProductClick}
                                                checker={open}
                                                ProductName={productsCardsData[ind + (pageNumber - 1) * 6].productName}
                                                ProductImageLink={productsCardsData[ind + (pageNumber - 1) * 6].productImageLink}
                                                ProductDiscription={productsCardsData[ind + (pageNumber - 1) * 6].ProductDiscription}
                                          />
                                    )}
                              </Backdrop>
                              <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: 7,
                              }}>
                                    <Stack spacing={2}>
                                          <Pagination count={numberOfpages}
                                                defaultPage={1}
                                                siblingCount={1}
                                                showFirstButton
                                                showLastButton
                                                boundaryCount={2}
                                                onChange={(e, value) => {
                                                      setPageNumber(value);
                                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                sx={{
                                                      '& .MuiPaginationItem-root': {
                                                            color: 'white',
                                                      },
                                                      '& .MuiPaginationItem-page.Mui-selected': {
                                                            background: '#FF204E',
                                                            opacity: '0.8'
                                                      },
                                                }}
                                          />
                                    </Stack>
                              </Box>
                        </Box>
                  </>
            );
      }
}
