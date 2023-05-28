import { Box, PageContainer } from "@/components/ui";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Contact Us",
};

interface PageProps {}

const ContactPage: FC<PageProps> = ({}) => {
  return (
    <PageContainer pageTitle={"Contact Us"}>
      <Box>
        Contacts
      </Box>
    </PageContainer>
  );
};

export default ContactPage;
