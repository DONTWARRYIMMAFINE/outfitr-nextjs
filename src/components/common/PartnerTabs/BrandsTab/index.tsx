"use client";

import Brand from "@/components/common/PartnerTabs/BrandsTab/Brand";
import CreateBrandCollapsable from "@/components/common/PartnerTabs/BrandsTab/CreateBrandCollapsable";
import { Error, TabPanel, TabPanelProps, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useBrandsQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Skeleton } from "@mui/material";
import React, { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface BrandsTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const BrandsTab: FC<BrandsTabProps> = ({ t, tReady, ...props }) => {
  const user = useReactiveVar(loggedInUser);
  const { data, loading, error } = useBrandsQuery({
    variables: {
      filter: {
        userId: {
          eq: user?.id,
        },
      },
    },
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("tabs.brands.title")}
      </Text>
      <CreateBrandCollapsable expandByDefault={data.brands.nodes.length === 0} />
      {data.brands.nodes.length === 0
        ? <Text variant={"p"}>{t("tabs.brands.list.empty")}</Text>
        : data.brands.nodes.map(brand => (
          <Brand key={brand.id} brand={brand} />
        ))
      }
    </TabPanel>
  );
};

export default withTranslation(I18NS.Partner)(BrandsTab);
