import { Box, ContentContainer } from "@/components/ui";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Contact Us",
};

interface PageProps {}

const ContactPage: FC<PageProps> = ({}) => {
  return (
    <ContentContainer pageTitle={"Contact Us"}>
      <Box>
        Contacts
      </Box>
    </ContentContainer>
  );
};

export default ContactPage;
