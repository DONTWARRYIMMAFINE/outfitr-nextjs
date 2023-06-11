"use client";

import { Box, Button, Icons, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import Can, { AbilityContext } from "@/lib/casl/Can";
import {
  Actions,
  OrderFragment,
  OrdersDocument,
  OrderStatus,
  useCancelOrderMutation,
  useCompleteOrderMutation,
  useRejectOrderMutation,
  useTransferOrderToDeliveryMutation,
} from "@/lib/graphql/schema.generated";
import { useAbility } from "@casl/react";
import { usePathname } from "next-intl/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface ChangeOrderStatusProps extends WithTranslation {
  order: OrderFragment;
}

const ChangeOrderStatus: FC<ChangeOrderStatusProps> = ({ order, t }) => {
  const pathname = usePathname();
  const ability = useAbility(AbilityContext);
  const [transferOrderToDeliveryMutation] = useTransferOrderToDeliveryMutation();
  const [completeOrderMutation] = useCompleteOrderMutation();
  const [rejectOrderMutation] = useRejectOrderMutation();
  const [cancelOrderMutation] = useCancelOrderMutation();

  const onTransferToDelivery = async () => {
    await transferOrderToDeliveryMutation({
      onCompleted: _ => toast.success(t("content.changeStatus.success")),
      onError: error => toast.success(t("content.changeStatus.error", { message: error.message })),
      refetchQueries: [OrdersDocument],
      variables: {
        input: {
          id: order.id,
        },
      },
    });
  };

  const onCompleteOrder = async () => {
    await completeOrderMutation({
      onCompleted: _ => toast.success(t("content.changeStatus.success")),
      onError: error => toast.success(t("content.changeStatus.error", { message: error.message })),
      refetchQueries: [OrdersDocument],
      variables: {
        input: {
          id: order.id,
        },
      },
    });
  };

  const onRejectOrder = async () => {
    await rejectOrderMutation({
      onCompleted: _ => toast.success(t("content.changeStatus.success")),
      onError: error => toast.success(t("content.changeStatus.error", { message: error.message })),
      refetchQueries: [OrdersDocument],
      variables: {
        input: {
          id: order.id,
        },
      },
    });
  };

  const onCancelOrder = async () => {
    await cancelOrderMutation({
      onCompleted: _ => toast.success(t("content.changeStatus.success")),
      onError: error => toast.success(t("content.changeStatus.error", { message: error.message })),
      refetchQueries: [OrdersDocument],
      variables: {
        input: {
          id: order.id,
        },
      },
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"} opacity={0.7}>{t("content.changeStatus.label")}</Text>
      <Box display={pathname === Routes.Partner.href ? "flex" : "none"} justifyContent={"space-between"} gap={2}>
        <Can I={Actions.TransferToDelivery} an={"OrderEntity"} ability={ability}>
          <Button
            variant={"primary"}
            disabled={order.status !== OrderStatus.ReadyForShipping}
            onClick={onTransferToDelivery}
            startIcon={<Icons.Shipping />}
          >
            {t("content.changeStatus.button.transferToDelivery.label")}
          </Button>
        </Can>
        <Can I={Actions.Complete} an={"OrderEntity"} ability={ability}>
          <Button
            variant={"primary"}
            disabled={order.status !== OrderStatus.InShipping}
            onClick={onCompleteOrder}
            startIcon={<Icons.Complete />}
          >
            {t("content.changeStatus.button.complete.label")}
          </Button>
        </Can>
        <Can I={Actions.Reject} an={"OrderEntity"} ability={ability}>
          <Button
            variant={"transparent"}
            disabled={[OrderStatus.Completed, OrderStatus.Rejected, OrderStatus.Cancelled].includes(order.status)}
            onClick={onRejectOrder}
            startIcon={<Icons.Reject />}
            sx={{ bgcolor: "error.light" }}
          >
            {t("content.changeStatus.button.reject.label")}
          </Button>
        </Can>
      </Box>
      <Box display={pathname === Routes.Profile.href ? "flex" : "none"} gap={2}>
        <Can I={Actions.Cancel} an={"OrderEntity"} ability={ability}>
          <Button
            variant={"transparent"}
            disabled={[OrderStatus.Completed, OrderStatus.Rejected, OrderStatus.Cancelled].includes(order.status)}
            onClick={onCancelOrder}
            startIcon={<Icons.Reject />}
            sx={{ bgcolor: "error.light" }}
          >
            {t("content.changeStatus.button.cancel.label")}
          </Button>
        </Can>
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Order)(ChangeOrderStatus);
