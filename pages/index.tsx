import React                                  from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link                                   from "../src/components/Link";


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
                <Link href={ "/categories" } variant={ "navigation" } type={ "selected" }>
                    Link component
                </Link>
                <Link href={ "/categories" } variant={ "navigation" }>
                    Link component
                </Link>
            </Box>
        </Container>
    </>);
}

export default HomePage;
