import { alertClasses, Backdrop, Button, Grid,Typography, useScrollTrigger } from "@mui/material"
import ProductsDisplayCard from "./ProductsDisplayCard";
import { useEffect,useState } from "react";
import ProductsData from "../assets/Data/ProductsData.json";
import {LinearProgress,Pagination,Stack,Box} from "@mui/material";
import ProductView from "./ProductView";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function Products() {
      const [productsCardsData,setProductsCardsData]=useState([]);
      const [ind,setInd]=useState(0);
      const [open, setOpen] =useState(false);
      const [pageNumber,setPageNumber]=useState(1);
      const [numberOfpages,setNumberOfpages]=useState(0);
      useEffect(()=>{
            setProductsCardsData(ProductsData.ProductsData);
            setNumberOfpages(Math.ceil(productsCardsData.length/6.0));
            console.log(numberOfpages,productsCardsData.length/6.0);
      },[])

      const handleProductClick=(c,index)=>{
            if(!c){
                  setInd(index);
                  handleOpen();
            }
            return c,index;
      }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  if(productsCardsData.length===0 ||  numberOfpages===0){
      return (
            <LinearProgress/>
      )
}
else{
      return (
            <>

            <div style={{ maxWidth: '85%', margin: 'auto', marginBottom: '100px',marginTop:'0', backgroundColor: '#DDDDDD', padding: '45px',paddingTop:'0',borderRadius:'5px'}}>
                  <Typography
                        variant="h2"
                        sx={{
                              fontFamily: '"Mundo Serif Medium", serif',
                              fontWeight: '800',
                              fontSize: '2.3em',
                              padding: '0.8em'
                        }}
                        >
                        Our Products
                  </Typography>
                  <Grid container 
                        spacing={2} 
                        rowGap={'10px'}
                        padding={0}
                        justifyContent={'center'}>
                              {
                                    productsCardsData.slice((pageNumber-1)*6,(pageNumber)*6).map((productDataCard,index)=> {
                                          return(
                                                <Grid item lg={4} sm={6} xs={12} key={index}>
                                                      <ProductsDisplayCard 
                                                            i={index}
                                                            handleProductClick={handleProductClick}
                                                            checker={open}
                                                            ProductCategory={productDataCard.ProductCategory}
                                                            ProductName={productDataCard.productName}
                                                            ProductImageLink={productDataCard.productImageLink}
                                                            />
                                                      <Backdrop
            sx={{backgroundColor:'rgba(3, 3, 3, 0.2)',opacity:'0.1', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
            >
        <ProductView
                  i={ind}
                  handleProductClick={handleProductClick}
                  checker={open}
                  ProductName={productsCardsData[ind].productName}
                  ProductImageLink={productsCardsData[ind].productImageLink}
                  ProductDiscription={productsCardsData[ind].ProductDiscription}
      />
      </Backdrop>
                                                </Grid>
                                          )
                                    })
                              }
                  </Grid>
     
                  <Box sx={{
                        display:'flex',
                        justifyContent:'center'
                  }}>

            <Stack spacing={2} marginTop={10} >
            <Pagination count={numberOfpages} defaultPage={1} showFirstButton showLastButton 
                        onChange={(e, value) => {setPageNumber(value);
                                                 window.scrollTo({top:0,behavior:'smooth'})
                        }}/>
      </Stack>
                  </Box>
     
            </div>
            </>
      )
}
}