"use client";

import React                                          from "react";
import { Box, Button, Container, Switch, Typography } from "@mui/material";
import Link                                           from "../src/components/common/Link";
import Subscription                                   from "../src/components/page/subscription/Subscription";


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
                <Switch/>
                <Switch size={"small"}/>
                <Link href={ "/categories" } variant={ "navigation" } type={ "selected" }>
                    Link component
                </Link>

                <Button variant={ "transparent" } href={"/categories"} component={Link}>
                    <Typography variant={ "button2" }>Find your outfit</Typography>
                </Button>
            </Box>
            <Subscription/>
        </Container>
    </>);
}

export default HomePage;