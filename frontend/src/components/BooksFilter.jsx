import { Box, Button, Stack, styled, Typography } from "@mui/material";

const filterList = ["All", "Cook Book", "History", "Fantasy", "Romance"];

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "white",
    color: "black", 
    padding: "10px 20px",
    borderRadius: "2px",
    '&:hover': {
      backgroundColor: "red",
      color: "#ffff"
    },
  }));

const BooksFilter = () => {
  return (
    <Box>
      <Typography>NEW ARRIVALS</Typography>
      <Stack direction="row" justifyContent="center" gap={2}>
        {filterList.map((genre, index) => (
          <CustomButton key={index} variant="contained" color="error">
            {genre}
          </CustomButton> // Corrected Button content and added key prop
        ))}
      </Stack>
    </Box>
  );
};

export default BooksFilter;
