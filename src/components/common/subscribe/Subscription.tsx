import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Subscription: React.FC = () => {
  return (
    <Box display={"flex"}>
      <Box flex={1} bgcolor={"background.missing"}>
      </Box>
      <Box flex={1}>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} padding={8}>
          <Typography variant={"title1"} component={"h2"}>
            Join Our <br />
            Newsletter
          </Typography>
          <Typography variant={"subtitle1"}>
            Receive exclusive deals, discounts and many offers.
          </Typography>
          <TextField label="Email" variant="outlined" margin={"normal"} size={"small"} />
          <Box marginTop={2}>
            <Button variant={"primary"}>
              <Typography variant={"button1"}>Subscribe</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;
