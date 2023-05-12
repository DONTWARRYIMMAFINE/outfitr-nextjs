"use client";

import { ListItem as MuiListItem, ListItemProps as MuiListItemProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ElementType, FC, forwardRef } from "react";

interface ListItemProps extends MuiListItemProps<"li", { component?: ElementType }> {}

const StyledListItem: FC<MuiListItemProps> = styled(MuiListItem)<MuiListItemProps>(({ theme }) => ({
  width: "auto",
  padding: 0,
  margin: 0,
}));

const ListItem: FC<ListItemProps> = forwardRef<HTMLLIElement, ListItemProps>(({ children, sx, ...props }, ref) => {
  return (
    <StyledListItem
      ref={ref}
      sx={sx}
      {...props}
    >
      {children}
    </StyledListItem>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
