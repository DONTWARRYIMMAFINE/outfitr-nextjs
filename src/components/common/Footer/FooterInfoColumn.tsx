import { Box, Link, List, ListItem, Text } from "@/components/ui";
import { FC } from "react";

export interface InfoLink {
  title: string;
  href: string;
}

export interface InfoColumnProps {
  title: string;
  links: InfoLink[];
}

const FooterInfoColumn: FC<InfoColumnProps> = ({ title, links }) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <List direction={"column"} alignItems={"flex-start"} sx={{ marginTop: 1 }}>
        <Text variant={"h4"} component={"h4"}>
          {title}
        </Text>
        {links.map(({ href, title }, index) => (
          <ListItem key={index}>
            <Link variant={"small"} href={href}>
              {title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterInfoColumn;
