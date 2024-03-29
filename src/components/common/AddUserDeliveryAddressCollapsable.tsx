"use client";

import { CollapsableBox, CollapsableBoxProps } from "@/components/common";
import { CreateAddressForm } from "@/components/common/forms";
import { Box, Link } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CreateAddressInput, useCreateOneUserAddressMutation, UserAddressesDocument } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface AddUserDeliveryAddressCollapsableProps extends Omit<CollapsableBoxProps, "Header">, WithTranslation {}

const AddUserDeliveryAddressCollapsable: FC<AddUserDeliveryAddressCollapsableProps> = ({ expandByDefault, t }) => {
  const user = useReactiveVar(loggedInUser);
  const [createOneUserAddressMutation] = useCreateOneUserAddressMutation();

  const onSubmitClick = async (values: CreateAddressInput) => {
    await createOneUserAddressMutation({
      onCompleted: _ => toast.success("Delivery address saved successfully"),
      onError: _ => toast.error("Unable to save delivery address"),
      variables: {
        input: {
          userAddress: {
            userId: user?.id!,
            address: values,
          },
        },
      },
      refetchQueries: _ => [UserAddressesDocument],
    });
  };

  return (
    <CollapsableBox
      Header={
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} width={"100%"} paddingTop={2}>
          <Link sx={{ opacity: 0.7 }}>
            {t("component.addUserDeliveryAddress.button.expand.label")}
          </Link>
        </Box>
      }
      expandByDefault={expandByDefault}
      variant={"transparent"}
    >
      <CreateAddressForm onSubmit={onSubmitClick} />
    </CollapsableBox>
  );
};

export default withTranslation(I18NS.Common)(AddUserDeliveryAddressCollapsable);
