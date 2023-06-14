"use client";

import CreateProductCollapsable from "@/components/common/PartnerTabs/ProductsTab/CreateProductCollapsable";
import ProductList from "@/components/common/PartnerTabs/ProductsTab/ProductList";
import { TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { I18NS } from "@/constants/I18NS";
import { useBrandsQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ProductsTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const ProductsTab: FC<ProductsTabProps> = ({ t, tReady, ...props }) => {
  const user = useReactiveVar(loggedInUser);
  const { data } = useBrandsQuery({
    variables: {
      filter: {
        userId: {
          eq: user?.id
        }
      }
    }
  });

  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("tabs.products.title")}
      </Text>
      {data?.brands.nodes.length === 0
        ? <Text variant={"p"}>{t("tabs.products.zeroBrands")}</Text>
        : <>
          <CreateProductCollapsable />
          <ProductList />
        </>
      }
    </TabPanel>
  );
};

export default withTranslation(I18NS.Partner)(ProductsTab);
