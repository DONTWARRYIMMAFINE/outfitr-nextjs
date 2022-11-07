import React                                from "react";
import { styled }                           from "@mui/material/styles";
import { Switch as MuiSwitch, SwitchProps } from "@mui/material";


const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
    return <MaterialUISwitch{ ...rest }/>
}

export default Switch;

const MaterialUISwitch = styled(MuiSwitch)(({ theme }) => ({
    width: 64,
    height: 32,
    padding: 0,
    margin: theme.spacing(1),
    overflow: "unset",
    "& .MuiSwitch-switchBase": {
        margin: 0,
        padding: 0,
        color: theme.palette.grey[400],
        "&.Mui-checked": {
            color: theme.palette.text.primary,
            transform: "translateX(32px)",
        },
    },
    "& .MuiSwitch-thumb": {
        width: 32,
        height: 32,
        alignSelf: "center",
        color: theme.palette.grey[400],
        "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        },
    },
    "& .MuiSwitch-track": {
        borderRadius: theme.shape.borderRadius,
        border: `solid ${ theme.palette.grey[400] }`,
        borderWidth: 2,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(["background-color", "border"]),
    },
}));