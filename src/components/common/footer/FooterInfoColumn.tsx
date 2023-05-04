import { Box, Link, List, ListItem, Text } from "@/components/ui";
import { FC } from "react";

export interface InfoLink {
  href: string;
  name: string;
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
        {links.map(({ href, name }, index) => (
          <ListItem key={index}>
            <Link variant={"small"} href={href}>
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterInfoColumn;
