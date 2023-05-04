import { FacebookIcon, IconButton, InstagramIcon, List, ListItem, TelegramIcon, TwitterIcon } from "@/components/ui";
import { FC, ReactNode } from "react";

interface Navigation {
  icon: ReactNode;
  href: string;
}

const navigation: Navigation[] = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/" },
  { icon: <InstagramIcon />, href: "https://vk.com/" },
  { icon: <TelegramIcon />, href: "https://web.telegram.org/" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/" },
  { icon: <TwitterIcon />, href: "https://twitter.com/" },
];

const FooterSocialLinks: FC = () => {
  return (
    <List direction={"row"} justifyContent={"flex-start"}>
      {navigation.map(({ icon, href }, index) => (
        <ListItem key={index}>
          <IconButton href={href} size={"medium"}>
            {icon}
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default FooterSocialLinks;
