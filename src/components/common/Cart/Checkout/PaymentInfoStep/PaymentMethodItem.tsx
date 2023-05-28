"use client";

import { Box, IconButton, Icons, Image, Text } from "@/components/ui";
import { PaymentMethodFragment, useUpdateOneCartMutation } from "@/lib/graphql/schema.generated";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Collapse, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";
import toast from "react-hot-toast";

interface ExpandMoreProps extends IconButtonProps {
  expand?: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export interface PaymentMethodItemProps extends PropsWithChildren {
  paymentMethod: PaymentMethodFragment;
  onExpendClick?: () => void;
}

const PaymentMethodItem: FC<PaymentMethodItemProps> = ({ paymentMethod, onExpendClick, children }) => {
  const cart = useReactiveVar(userCart);
  const expanded = cart?.paymentMethod?.id === paymentMethod.id;
  const [updateOneCartMutation] = useUpdateOneCartMutation();

  const onExpandClick = async () => {
    if (!expanded) {
      // Setting cart payment method
      await updateOneCartMutation({
        variables: {
          input: {
            id: cart?.id!,
            update: {
              paymentMethodId: paymentMethod.id,
            },
          },
        },
        onCompleted: data => userCart(data.updateOneCart),
        onError: _ => toast.error(`An error occurred during setting ${paymentMethod.code} payment method`),
      });

      // Additional custom logic
      if (onExpendClick) {
        onExpendClick();
      }
    }
  };

  return (<>
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={0.5}
      padding={4}
      bgcolor={"background.textField"}
      border={0.5}
      borderColor={"background.component"}
      sx={{
        ":hover": {
          borderColor: "text.primary",
        },
      }}
      onClick={onExpandClick}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Text variant={"p"}>{paymentMethod.name}</Text>
        <Text variant={"small"} opacity={0.7} paragraph>{paymentMethod.description}</Text>
      </Box>
      <Box display={"flex"} gap={2}>
        <Image src={paymentMethod.media?.url!} alt={"Payment Method image"} color={"white"} width={48} height={48} />
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Icons.ExpandMore />
        </ExpandMore>
      </Box>
    </Box>
    <Collapse in={expanded} timeout={"auto"} unmountOnExit>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {children}
      </Box>
    </Collapse>
  </>);
};

export default PaymentMethodItem;
