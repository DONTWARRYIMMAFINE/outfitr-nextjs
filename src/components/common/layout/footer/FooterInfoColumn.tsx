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
      <ListItem>
        <Text paddingRight={2} variant={"h4"} component={"h4"}>
          {title}
        </Text>
      </ListItem>
      <List direction={"column"}>
        {links.map(({ href, name }, index) => (
          <ListItem key={index}>
            <Link variant={"small"} href={href} marginTop={0.175}>
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterInfoColumn;
