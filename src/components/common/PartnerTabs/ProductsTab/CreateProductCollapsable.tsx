"use client";

import { CollapsableBox, CollapsableBoxProps } from "@/components/common";
import { CreateProductForm } from "@/components/common/forms";
import { Box, Link } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CreateProductInput, ProductsDocument, useCreateOneProductMutation } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import toast from "react-hot-toast";
import { withTranslation, WithTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

interface CreateProductCollapsableProps extends Omit<CollapsableBoxProps, "Header">, WithTranslation {}

const CreateProductCollapsable: FC<CreateProductCollapsableProps> = ({ expandByDefault, t }) => {
  const [createOneProductMutation] = useCreateOneProductMutation();

  const onSubmitClick = async (values: CreateProductInput, files?: ExtendedFileProps[]) => {
    await createOneProductMutation({
      onCompleted: _ => toast.success(t("component.createProduct.success")),
      onError: error => toast.error(t("component.createProduct.error", { message: error.message })),
      refetchQueries: [ProductsDocument],
      variables: {
        input: {
          product: values,
        },
        files,
      },
    });
  };

  return (
    <CollapsableBox
      Header={
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} width={"100%"} paddingTop={2}>
          <Link sx={{ opacity: 0.7 }}>
            {t("component.createProduct.button.expand.label")}
          </Link>
        </Box>
      }
      expandByDefault={expandByDefault}
      variant={"transparent"}
    >
      <CreateProductForm onSubmit={onSubmitClick} />
    </CollapsableBox>
  );
};

export default withTranslation(I18NS.Common)(CreateProductCollapsable);
