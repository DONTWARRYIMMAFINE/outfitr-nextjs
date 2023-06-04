"use client";

import { Box, IconButton, Icons } from "@/components/ui";
import { Collapse, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, PropsWithChildren, ReactNode, useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand?: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type CollapsableBoxVariant = "default" | "transparent";

export interface CollapsableBoxProps extends PropsWithChildren {
  Header: ReactNode;
  expandByDefault?: boolean;
  variant?: CollapsableBoxVariant;
}

const StyledBox = styled(Box)<Omit<CollapsableBoxProps, "Header">>(({theme, variant}) => ({
  ...(variant === "default" && {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius * 0.5,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.textField,
    border: "1px solid",
    borderColor: theme.palette.background.component,
    gap: theme.spacing(4),
  }),
}))

const CollapsableBox: FC<CollapsableBoxProps> = ({ Header, expandByDefault = false, variant = "default", children }) => {
  const [expand, setExpand] = useState(expandByDefault);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <StyledBox variant={variant} onClick={() => setExpand(!expand)}>
        {Header}
        {variant === "default" &&
          <ExpandMore aria-label={"show order details"} aria-expanded={expand} expand={expand}>
            <Icons.ExpandMore />
          </ExpandMore>
        }
      </StyledBox>
      <Collapse in={expand} timeout={"auto"} unmountOnExit>
        {children}
      </Collapse>
    </Box>
  );
};

export default CollapsableBox;
