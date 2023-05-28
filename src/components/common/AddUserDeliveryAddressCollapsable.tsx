"use client";

import CreateAddressForm from "@/components/common/forms/CreateAddressForm";
import { Box, Link } from "@/components/ui";
import { CreateAddressInput, useCreateOneUserAddressMutation, UserAddressesDocument } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Collapse } from "@mui/material";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface AddUserDeliveryAddressCollapsableProps extends WithTranslation {}

const AddUserDeliveryAddressCollapsable: FC<AddUserDeliveryAddressCollapsableProps> = ({ t }) => {
  const [expanded, setExpanded] = useState(false);
  const [createOneUserAddressMutation] = useCreateOneUserAddressMutation();
  const user = useReactiveVar(loggedInUser);

  const onExpandClick = async () => {
    setExpanded(!expanded);
  };

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
    <Box>
      <Box paddingY={2}>
        <Link onClick={onExpandClick} sx={{ opacity: 0.7 }}>
          {t("component.button.addUserDeliveryAddress")}
        </Link>
      </Box>
      <Collapse in={expanded} timeout={"auto"} unmountOnExit>
        <CreateAddressForm onSubmit={onSubmitClick} />
      </Collapse>
    </Box>
  );
};

export default withTranslation()(AddUserDeliveryAddressCollapsable);
