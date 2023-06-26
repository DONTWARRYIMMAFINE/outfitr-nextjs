"use client";

import { Box, Tab, Tabs } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { partnerTabs } from "@/constants/routes";
import { indexOf } from "lodash";
import { usePathname, useRouter } from "next-intl/client";
import { notFound, useSearchParams } from "next/navigation";
import { FC, SyntheticEvent } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import BrandsTab from "./BrandsTab";
import ProductsTab from "./ProductsTab";
import ReceivedOrdersTab from "./ReceivedOrdersTab";

interface PartnerTabsProps extends WithTranslation {}

const PartnerTabs: FC<PartnerTabsProps> = ({ t }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = indexOf(partnerTabs, searchParams.get("tab") || partnerTabs[0]);

  if (value === -1) {
    notFound();
    return null;
  }

  const handleChange = async (event: SyntheticEvent, newValue: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", partnerTabs[newValue]);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box display={"flex"} flexGrow={1}>
      <Tabs
        orientation={"vertical"}
        variant={"scrollable"}
        value={value}
        onChange={handleChange}
        aria-label={"Profile vertical tabs"}
        sx={{ alignItems: "start", borderRight: 1, borderColor: "divider" }}
      >
        {partnerTabs.map((partnerTab, index) => (
          <Tab key={index} label={t(`tabs.${partnerTab}.label`)} />
        ))}
      </Tabs>
      <Box display={"flex"} flexDirection={"column"} width={"90%"}>
        <BrandsTab value={value} index={0} />
        <ProductsTab value={value} index={1} />
        <ReceivedOrdersTab value={value} index={2} />
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Partner)(PartnerTabs);
