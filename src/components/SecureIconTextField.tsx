"use client";

import { Icons, IconTextField } from "@/components/ui";
import { IconTextFieldProps } from "@/components/ui/IconTextField";
import { FC, useState } from "react";

type SecureIconTextFieldProps = IconTextFieldProps & {};

const SecureIconTextField: FC<SecureIconTextFieldProps> = ({ children, ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <IconTextField
      iconEnd={visible
        ? <Icons.Visibility sx={{ cursor: "pointer" }} onClick={() => setVisible(false)} />
        : <Icons.VisibilityOff sx={{ cursor: "pointer" }} onClick={() => setVisible(true)} />
      }
      type={visible ? "text" : "password"}
      {...props}
    >
      {children}
    </IconTextField>
  );
};

export default SecureIconTextField;
