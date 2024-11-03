import { Box, Grid, Typography } from "@mui/material";
import { Iproduct, productData } from "@/data/product";
import { ProductCard } from "@/components/card";

const Wishlist = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Your Wishlist
      </Typography>
      <Box>
        <Grid container>
          {productData.map((p: Iproduct, index: number) => (
            <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Wishlist;