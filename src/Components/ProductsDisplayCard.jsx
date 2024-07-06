import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';
import { Typography } from "@mui/material"
import Chip from '@mui/material/Chip';

export default function ProductsDisplayCard({ i, handleProductClick, checker, ProductName, ProductImageLink, ProductCategory }) {
  return (
    <Card sx={{
      width: '23%', // Approximately 4 cards per row with some gap
      minWidth: 200, // Minimum width to maintain readability
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '1%',
      '@media (max-width: 1200px)': {
        width: '31%', // 3 per row on slightly smaller screens
      },
      '@media (max-width: 900px)': {
        width: '48%', // 2 per row on medium screens
      },
      '@media (max-width: 600px)': {
        width: '98%', // 1 per row on small screens
      }
    }}>
      <CardActionArea 
        onClick={(e) => {
          e.stopPropagation();    
          handleProductClick(checker, i);
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
          <CardMedia
            variant="outlined"
            component="img"
            image={ProductImageLink}
            alt={ProductName}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
        <CardContent sx={{ padding: '8px' }}>
          {/* <Typography variant="subtitle2" component="div" sx={{
            color: '#666',
            fontSize: '0.75rem',
            marginBottom: '2px'
          }}>
            All Products
          </Typography> */}
          <Typography variant="body1" component="div" sx={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            marginBottom: '4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {ProductName}
          </Typography>
          <Chip 
            label={ProductCategory} 
            variant="outlined" 
            size="small"
            sx={{
              color: '#666',
              borderColor: '#ccc',
              fontSize: '0.6rem',
              height: '20px'
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}