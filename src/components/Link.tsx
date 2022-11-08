import React                       from "react";
import { LinkBaseProps, useTheme } from "@mui/material";
import NextLink   from "next/link";
import MediumText from "./text/medium/MediumText";


export interface LinkProps extends LinkBaseProps {
    href: any,
    chosen: boolean;
    children: string;
}

const Link: React.FC<LinkProps> = ({ chosen, href, children }, ...rest) => {
    const { palette, transitions } = useTheme();

    return (
        <NextLink href={ href } passHref { ...rest }>
            <MediumText
                color={ chosen ? "primary" : "text.primary" }
                className={ "link" }
                fontWeight={ "600" }
                sx={ {
                    transition: transitions.create(["all"]),
                    ':hover': {
                        color: palette.primary.main,
                    },
                    ':after': {
                        transition: transitions.create(["all"]),
                        bgcolor: palette.primary.main,
                    }
                } }
            >
                { children }
            </MediumText>

        </NextLink>
    )
}

export default Link;
