import { alertClasses, Backdrop, Button, Grid,Typography, useScrollTrigger } from "@mui/material"
import ProductsDisplayCard from "./ProductsDisplayCard";
import { useEffect,useState } from "react";
import ProductsData from "../assets/Data/ProductsData.json";
import {LinearProgress} from "@mui/material";
export default function Products() {
      const [productsCardsData,setProductsCardsData]=useState([]);
      const [ind,setInd]=useState(0);
      const [open, setOpen] =useState(false);

      useEffect(()=>{
            setProductsCardsData(ProductsData.ProductsData);
      },[])

      if(productsCardsData.length===0){
            return (
                  <LinearProgress/>
            )
      }

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
                                    productsCardsData.map((productDataCard,index)=> {
                                          return(
                                                <Grid item lg={4} sm={6} xs={12} key={index}>
                                                      <ProductsDisplayCard 
                                                            i={index}
                                                            handleProductClick={handleProductClick}
                                                            checker={open}

                                                            ProductName={productDataCard.productName}
                                                            ProductImageLink={productDataCard.productImageLink}
                                                            />
                                                      <Backdrop
            sx={{backgroundColor:'rgba(3, 3, 3, 0.2)',opacity:'0.1', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
            >
        <ProductsDisplayCard
                  i={ind}
                  handleProductClick={handleProductClick}
                  checker={open}
                  ProductName={productsCardsData[ind].productName}
                  ProductImageLink={productsCardsData[ind].productImageLink}
      />
      </Backdrop>
                                                </Grid>
                                          )
                                    })
                              }
                  </Grid>

            </div>
            </>
      )
}