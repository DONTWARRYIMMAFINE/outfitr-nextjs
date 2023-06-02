"use client";

import ColorCheckboxGroup from "@/components/common/ColorCheckboxGroup";
import { Text } from "@/components/ui";
import Error from "@/components/ui/Error";
import { useColorsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import Box from "../../../ui/Box";

interface ColorsFilterProps extends WithTranslation {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
}

const ColorsFilter: FC<ColorsFilterProps> = ({ selectedValues, handleFilterChange, t }) => {
  const { data, loading, error } = useColorsQuery();

  if (error) return <Error message={"Unable to fetch colors"} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("component.label.colors")}</Text>
      <ColorCheckboxGroup
        options={data.colors.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
      />
    </Box>
  );
};

export default withTranslation()(ColorsFilter);
