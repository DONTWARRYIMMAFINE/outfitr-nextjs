"use client";

import { Box, IconButton, Icons, Image, Text } from "@/components/ui";
import { PaymentMethodFragment, useUpdateOneCartMutation } from "@/lib/graphql/schema.generated";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Collapse, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, PropsWithChildren, useEffect, useState } from "react";
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
  onExpand?: () => void;
  onCollapse?: () => void;
}

const PaymentMethodItem: FC<PaymentMethodItemProps> = ({ paymentMethod, onExpand, onCollapse, children }) => {
  const cart = useReactiveVar(userCart);
  const [expand, setExpand] = useState(false);
  const [updateOneCartMutation] = useUpdateOneCartMutation();

  useEffect(() => {
    if (cart?.paymentMethodId !== paymentMethod.id) {
      setExpand(false);
    }
  }, [cart, paymentMethod]);

  const onClick = async () => {
    console.log("paymentMethod", paymentMethod);
    if (!expand) {
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
        onCompleted: data => {
          userCart(data.updateOneCart);
          setExpand(true);
        },
        onError: _ => toast.error(`An error occurred during setting ${paymentMethod.code} payment method`),
      });

      console.log("onExpand", typeof onExpand);

      // Additional custom logic
      onExpand && onExpand();
    } else {
      onCollapse && onCollapse();
    }

    setExpand(!expand);
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
      onClick={onClick}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Text variant={"p"}>{paymentMethod.name}</Text>
        <Text variant={"small"} opacity={0.7} paragraph>{paymentMethod.description}</Text>
      </Box>
      <Box display={"flex"} gap={2}>
        <Image src={paymentMethod.media?.url!} alt={"Payment Method image"} color={"white"} width={48} height={48} />
        <ExpandMore
          expand={expand}
          aria-expanded={expand}
          aria-label="show more"
        >
          <Icons.ExpandMore />
        </ExpandMore>
      </Box>
    </Box>
    <Collapse in={expand} timeout={"auto"} unmountOnExit>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {children}
      </Box>
    </Collapse>
  </>);
};

export default PaymentMethodItem;
