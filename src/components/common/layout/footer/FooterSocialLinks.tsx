"use client";

import { IconButton, Icons, List, ListItem } from "@/components/ui";
import { FC, ReactNode } from "react";

interface Navigation {
  icon: ReactNode;
  href: string;
}

const navigation: Navigation[] = [
  { icon: <Icons.Instagram />, href: "https://www.instagram.com/" },
  { icon: <Icons.Instagram />, href: "https://vk.com/" },
  { icon: <Icons.Telegram />, href: "https://web.telegram.org/" },
  { icon: <Icons.Facebook />, href: "https://www.facebook.com/" },
  { icon: <Icons.Twitter />, href: "https://twitter.com/" },
];

const FooterSocialLinks: FC = () => {
  return (
    <List sx={{maxWidth: 320}}>
      {navigation.map(({ icon, href }, index) => {
        return (
          <ListItem key={index}>
            <IconButton href={href} size={"medium"}>
              {icon}
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FooterSocialLinks;
