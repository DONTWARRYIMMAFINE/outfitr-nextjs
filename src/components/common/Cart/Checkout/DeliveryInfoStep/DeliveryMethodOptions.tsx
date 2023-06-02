"use client";

import Price from "@/components/common/Price";
import { Divider, Grid, Text } from "@/components/ui";
import Error from "@/components/ui/Error";
import { useDeliveryMethodsQuery, useUpdateOneCartMutation } from "@/lib/graphql/schema.generated";
import { splitTime } from "@/lib/utils/dateTime.utils";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FormControl, FormControlLabel, Radio, RadioGroup, Skeleton } from "@mui/material";
import { FC } from "react";
import toast from "react-hot-toast";
import { withTranslation, WithTranslation } from "react-i18next";

interface DeliveryMethodSelectProps extends WithTranslation {}

const DeliveryMethodOptions: FC<DeliveryMethodSelectProps> = ({t}) => {
  const cart = useReactiveVar(userCart);
  const [updateOneCartMutation] = useUpdateOneCartMutation();
  const { data, loading, error } = useDeliveryMethodsQuery();

  const onChange = async (id: string) => {
    console.log("deliveryMethodId", id);

    await updateOneCartMutation({
      onCompleted: data => userCart(data.updateOneCart),
      onError: error => toast.error(error.message),
      variables: {
        input: {
          id: cart?.id!,
          update: {
            deliveryMethodId: id,
          },
        },
      },
    });
  };

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby={"delivery-method-radio-buttons-group-label"}
        name={"delivery-method-radio-buttons-group"}
        value={cart?.deliveryMethod?.id}
        onChange={(_, value) => onChange(value)}
      >
        <Grid container>
          <Grid item xs={4}>
            <Text variant={"p"}>{t("page.checkout.step.deliveryInfo.table.header.0")}</Text>
          </Grid>
          <Grid display={"flex"} item xs={4} justifyContent={"center"}>
            <Text variant={"p"}>{t("page.checkout.step.deliveryInfo.table.header.1")}</Text>
          </Grid>
          <Grid display={"flex"} item xs={4} justifyContent={"flex-end"}>
            <Text variant={"p"}>{t("page.checkout.step.deliveryInfo.table.header.2")}</Text>
          </Grid>
        </Grid>
        <Divider/>
        {data.deliveryMethods.nodes.map(({ id, name, price, avgDeliveryTimeInHours }) => (
          <Grid key={id} container>
            <Grid item xs={4}>
              <FormControlLabel value={id} control={<Radio />} label={name} />
            </Grid>
            <Grid display={"flex"} item xs={4} justifyContent={"center"}>
              <Text variant={"small"} opacity={0.7}>{avgDeliveryTimeInHours ? t("page.checkout.step.deliveryInfo.table.body.avgDeliveryTime", splitTime(avgDeliveryTimeInHours)) : "-"}</Text>
            </Grid>
            <Grid display={"flex"} item xs={4} justifyContent={"flex-end"}>
              <Price amount={price.amount} currency={price.currency} />
            </Grid>
          </Grid>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default withTranslation()(DeliveryMethodOptions);
