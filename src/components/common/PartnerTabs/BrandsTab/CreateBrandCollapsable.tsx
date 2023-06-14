"use client";

import CollapsableBox, { CollapsableBoxProps } from "@/components/common/CollapsableBox";
import BrandForm from "@/components/common/forms/CreateBrandForm";
import { Box, Link } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { BrandsDocument, CreateBrandInput, useCreateOneBrandMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface CreateBrandCollapsableProps extends Omit<CollapsableBoxProps, "Header">, WithTranslation {}

const CreateBrandCollapsable: FC<CreateBrandCollapsableProps> = ({ expandByDefault, t }) => {
  const user = useReactiveVar(loggedInUser);
  const [createOneBrandMutation] = useCreateOneBrandMutation();

  const onSubmit = async (values: Omit<CreateBrandInput, "userId">) => {
    await createOneBrandMutation({
      onCompleted: _ => toast.success(t("component.createBrand.success")),
      onError: error => toast.error(t("component.createBrand.error", { message: error.message })),
      refetchQueries: [BrandsDocument],
      variables: {
        input: {
          brand: {
            userId: user?.id!,
            ...values,
          },
        },
      },
    });
  };

  return (
    <CollapsableBox
      variant={"transparent"}
      expandByDefault={expandByDefault}
      Header={
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} width={"100%"} paddingTop={2}>
          <Link sx={{ opacity: 0.7 }}>
            {t("component.createBrand.button.expand.label")}
          </Link>
        </Box>
      }
    >
      <BrandForm onSubmit={values => onSubmit(values as Omit<CreateBrandInput, "userId">)} />
    </CollapsableBox>
  );
};

export default withTranslation(I18NS.Common)(CreateBrandCollapsable);
