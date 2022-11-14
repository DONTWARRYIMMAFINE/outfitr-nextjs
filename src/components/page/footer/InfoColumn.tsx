import React               from "react";
import { Box, Typography } from "@mui/material";
import Link                from "../../common/Link";


export interface InfoLink {
    href: string;
    name: string;
}

export interface InfoColumnProps {
    title: string;
    links: InfoLink[];
}

const InfoColumn: React.FC<InfoColumnProps> = ({ title, links }) => {
    return (
        <Box display={ "flex" } flexDirection={ "column" } justifyContent={ "center" } alignItems={ "flex-start" }>
            <Typography variant={ "subtitle2" } component={ "h6" } paragraph>
                { title }
            </Typography>
            { links.map(({ href, name }, index) => (
                <Link key={ index } variant={ "lightSmall" } href={ href } marginY={ 1 / 8 } showUnderline>
                    { name }
                </Link>
            )) }
        </Box>
    )
}

export default InfoColumn;