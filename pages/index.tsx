import React                                  from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { openSans }                           from "../src/styles/theme/baseTheme";


const HomePage: React.FC = () => {
    return (<>
        <Container maxWidth={ "xl" }>
            <Box>
                <Typography fontFamily={ openSans.style.fontFamily } color={ "primary" } variant="h4" component="h1" gutterBottom>
                    MUI v5 + Next.js with TypeScript example
                </Typography>
                <Button variant={ "regular" }>
                    <Typography variant={ "button1" }>Shop now</Typography>
                </Button>
            </Box>
        </Container>
    </>);
}

export default HomePage;
