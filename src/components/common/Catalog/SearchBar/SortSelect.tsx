"use client";

import { Text, Box, MenuItem } from "@/components/ui";
import { FormControl, ListItemIcon, MenuProps, Select } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import Icons from "../../../ui/Icons";

interface SortMenuProps {}

const SortSelect: FC<SortMenuProps> = ({}) => {
  const [val,setVal] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: any) => {
    setVal(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const iconComponent = (props: any) => {
    return (
      <Icons.ExpandMore />
    )};

  // moves the menu below the select input
  const menuProps: Partial<MenuProps> = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    anchorEl,
    open,
    onClick: handleClose,
    onClose: handleClose
  };

  return (
    <FormControl>
      <Select
        disableUnderline
        // classes={{ root: outlineSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>
          <ListItemIcon>
            <Icons.Sort />
          </ListItemIcon>
          <Text variant={"small"}>
            Sort by Date Created
          </Text>
        </MenuItem>
        <MenuItem value={1}>
          <ListItemIcon>
            <Icons.Sort />
          </ListItemIcon>
          <Text variant={"small"}>
            Sort by Name
          </Text>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;
