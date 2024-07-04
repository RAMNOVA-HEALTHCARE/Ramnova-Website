import { Grid, Typography } from "@mui/material"

import ProductsDisplayCard from "./ProductsDisplayCard";
export default function Products() {
      return (
            <>
            <div style={{marginTop:'150px'}}></div>
            <div style={{ maxWidth: '85%', margin: 'auto', marginBottom: '100px',marginTop:'0', backgroundColor: '#DDDDDD', padding: '45px',paddingTop:'0',borderRadius:'5px'}}>
                  <Typography
                        variant="h2"
                        sx={{
                              fontFamily: '"Mundo Serif Medium", serif',
                              fontWeight: '800',
                              fontSize: '2.3em',
                              padding: '0.8em',
                        }}
                  >
                        Our Products
                  </Typography>
                  <Grid container 
                        spacing={2} 
                        rowGap={'10px'}
                        padding={0}
                        justifyContent={'center'}>
                        <Grid item lg={4} sm={6} xs={12} padding={0}>
                              <ProductsDisplayCard></ProductsDisplayCard>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                              <ProductsDisplayCard></ProductsDisplayCard>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                              <ProductsDisplayCard></ProductsDisplayCard>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                              <ProductsDisplayCard></ProductsDisplayCard>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                              <ProductsDisplayCard></ProductsDisplayCard>
                        </Grid>


                  </Grid>

            </div>
            </>
      )
}