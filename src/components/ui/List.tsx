"use client";

import { List as MuiList, ListProps as MuiListProps } from "@mui/material";
import { Property } from "csstype";
import { ElementType, forwardRef } from "react";

interface ListProps extends MuiListProps<"ul", { component?: ElementType }> {
  justifyContent?: Property.JustifyContent,
  alignItems?: Property.AlignItems,
  direction?: Property.FlexDirection;
}

const List = forwardRef<HTMLUListElement, ListProps>((
  {
    children,
    sx,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    direction = "row",
    ...props
  },
  ref,
) => {
  return (
    <MuiList
      ref={ref}
      sx={{
        display: "flex",
        justifyContent,
        alignItems,
        flexDirection: direction,
        gap: 2,
        ...sx,
      }}
      disablePadding
      {...props}
    >
      {children}
    </MuiList>
  );
});

List.displayName = "List";

export default List;
