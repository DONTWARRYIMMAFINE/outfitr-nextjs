"use client";

import { ListItem as MuiListItem, ListItemProps as MuiListItemProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ElementType, FC, forwardRef } from "react";

const StyledListItem: FC<MuiListItemProps> = styled(MuiListItem)<MuiListItemProps>(({ theme }) => ({
  padding: theme.spacing(1.5, 2, 1.5, 0),
  ":last-of-type": {
    padding: theme.spacing(1.5, 0, 1.5, 0),
  },
}));

interface ListItemProps extends MuiListItemProps<"li", { component?: ElementType }> {}

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
