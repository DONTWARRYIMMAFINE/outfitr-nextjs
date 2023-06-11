"use client";

import { TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ProductsTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const ProductsTab: FC<ProductsTabProps> = ({ t, tReady, ...props }) => {
  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("page.partner.tabs.products.title")}
      </Text>
    </TabPanel>
  );
};

export default withTranslation()(ProductsTab);
