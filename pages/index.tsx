import React                                  from "react";
import { Box, Button, Container, Typography } from "@mui/material";


const HomePage: React.FC = () => {
    return (<>
        <Container>
            <Box>
                <Typography color={ "primary" } variant="h4" component="h1" gutterBottom>
                    MUI v5 + Next.js with TypeScript example
                </Typography>
                <Button variant={ "regular" }>
                    <Typography variant={ "button1" }>Shop now</Typography>
                </Button>
                <Button variant={ "transparent" }>
                    <Typography variant={ "button2" }>Find your outfit</Typography>
                </Button>
            </Box>
        </Container>
    </>);
}

export default HomePage;
