import { Backdrop, Grid, Typography, TextField } from "@mui/material";
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
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const data = ProductsData.ProductsData;
        setProductsCardsData(data);
        setNumberOfpages(Math.ceil(data.length / 8.0));
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

    const filteredProducts = useMemo(() => {
        return productsCardsData.filter(product => 
            product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, productsCardsData]);

    useEffect(() => {
        setNumberOfpages(Math.ceil(filteredProducts.length / 8.0));
        setPageNumber(1);  // Reset to first page on search term change
    }, [filteredProducts]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (pageNumber - 1) * 8;
        const endIndex = startIndex + 8;
        return filteredProducts.slice(startIndex, endIndex);
    }, [pageNumber, filteredProducts]);

    if (productsCardsData.length === 0) {
        return <LinearProgress />;
    } else {
        return (
            <>
                <Box
                    sx={{
                        maxWidth: '75%',
                        margin: 'auto',
                        marginBottom: '100px',
                        marginTop: '150px',
                        backgroundColor: '#ffffff',
                        paddingTop: '0',
                        borderRadius: '20px',
                        padding: '45px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        '@media (max-width:470px)': {
                            padding: '15px'
                        }
                    }}
                >
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '2.5em',
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: '"Mundo Serif Medium", serif',
                                fontWeight: '700',
                                fontSize: '2.75em',
                                color: 'black',
                                '@media (max-width:470px)': {
                                    fontSize: '1.9rem',
                                }
                            }}
                        >
                            Our Products
                        </Typography>
                        <TextField 
                            label="Search Products"
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{
                                width: '100%',
                                maxWidth: '40%',
                     
                            }}
                        />
                    </Box>
                    <Grid container
                        spacing={5}
                        rowGap={'2em'}
                        padding={2}
                        justifyContent={'center'}
                    >
                        {
                            paginatedProducts.map((productDataCard, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
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
                            backgroundColor: 'rgba(3, 3, 3, 0.9)',
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={open}
                        onClick={handleClose}
                    >
                        {productsCardsData[ind + (pageNumber - 1) * 8] && (
                            <ProductView
                                i={ind + (pageNumber - 1) * 8}
                                handleProductClick={handleProductClick}
                                checker={open}
                                ProductName={productsCardsData[ind + (pageNumber - 1) * 8].productName}
                                ProductImageLink={productsCardsData[ind + (pageNumber - 1) * 8].productImageLink}
                                ProductDiscription={productsCardsData[ind + (pageNumber - 1) * 8].ProductDiscription}
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
                                        color: '#3D1F2B',
                                    },
                                    '& .MuiPaginationItem-page.Mui-selected': {
                                        background: '#3D1F2B',
                                        color: 'white',
                                        opacity: '1'
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
