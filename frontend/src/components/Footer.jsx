import { Box, Stack, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box sx={{border: "2px solid red",mt: "50px"}}>
        <Stack>
            <Box>
                <Typography>BOOK SHOP</Typography>

            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Stack>
        <Stack></Stack>
    </Box>
  )
}

export default Footer