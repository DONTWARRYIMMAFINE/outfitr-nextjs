import { Box, Text } from "@/components/ui";
import { Container } from "@/components/ui/index";
import { TString } from "@/lib/types/params.type";
import { ContainerProps } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";

interface ContainerContainerProps extends ContainerProps, PropsWithChildren {
  pageTitle?: TString;
  disableBottomPadding?: boolean;
}

const ContentContainer: FC<ContainerContainerProps> = ({ pageTitle, disableBottomPadding, children, ...props }) => {
  return (
    <Container {...props} disableGutters>
      <Box paddingBottom={disableBottomPadding ? 0 : 8}>
        <Box paddingY={2} bgcolor={"background.body"} hidden={!pageTitle}>
          <Text variant={"h1"} component={"h1"} textAlign={"center"}>{pageTitle}</Text>
        </Box>
        <Box bgcolor={"background.container"} borderRadius={1} paddingY={{ md: 8, xs: 6 }} paddingX={{ md: 8, xs: 3 }}>
          <Container>
            <Box display={"flex"} flexDirection={"column"} gap={{ md: 8, xs: 3 }}>
              {children}
            </Box>
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default ContentContainer;
