import React                     from "react";
import { Container, Typography } from "@mui/material";
import { openSans }              from "../src/styles/theme/baseTheme";


const HomePage: React.FC = () => {
    return (<>
        <Container maxWidth={ "lg" }>
            <Typography fontFamily={ openSans.style.fontFamily } color={ "primary" } variant="h4" component="h1" gutterBottom>
                MUI v5 + Next.js with TypeScript example
            </Typography>
        </Container>
    </>);
}

export default HomePage;
