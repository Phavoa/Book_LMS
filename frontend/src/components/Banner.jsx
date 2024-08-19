import { Box, Button, Typography } from "@mui/material";
import BannerImage from "../assets/banner.webp";
import BestPrice from "../assets/icons/best-price.svg";
import PaperPlane from "../assets/icons/paper-plane.svg";
import Reload from "../assets/icons/reload.svg";
import Unlock from "../assets/icons/unlock.svg";

const benefits = [
  {
    icon: BestPrice,
    title: "Best Price",
    description: "Guaranteed Price",
  },
  {
    icon: Reload,
    title: "Free Returns",
    description: "Within 30 Days returns",
  },
  {
    icon: PaperPlane,
    title: "Free Shipping",
    description: "Order over $100",
  },
  {
    icon: Unlock,
    title: "Secure Payment",
    description: "100% Secure Payment",
  },
];

const Banner = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "70%",
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "self-start",
              width: "550px",
              p: "40px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Helvetica, sans-serif" }} // Fixed fontFamily
            >
              Year end sale
            </Typography>
            <Typography variant="h2" fontWeight="600" color="#D2402F">
              Get 70% Off For All Design Books
            </Typography>
            <Typography variant="p">
              Donec sodales sagittis magna. Sed nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante.
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{
                display: "block",
                border: "none",
                px: 4,
                py: 2,
                textTransform: "capitalize",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100px",
          display: "flex",
          px: "40px",
          py: "10px",
          background: "#F7F7F7",
        }}
      >
        {benefits.map((benefit, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}
          >
            <img src={benefit.icon} alt="best price" width="45px" />
            <box>
              <Typography
                variant="p"
                fontWeight="600"
                fontSize="22px"
                display="block"
              >
                {benefit.title}
              </Typography>
              <Typography variant="p" fontSize="20px" color="gray">
                {benefit.description}
              </Typography>
            </box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Banner;
