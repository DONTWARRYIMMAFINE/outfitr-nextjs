"use client";

import NavigationList from "@/components/common/Header/NavigationList";
import { Avatar, Box, Divider, Text } from "@/components/ui";
import { customerMenuRoutes, guestMenuRoutes, partnerMenuRoutes } from "@/constants/routes";
import { Roles } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { map } from "lodash";
import { FC } from "react";

interface AccountMenuNavigationProps {}

const AccountMenuNavigation: FC<AccountMenuNavigationProps> = ({}) => {
  const user = useReactiveVar(loggedInUser);
  const isPartner = map(user?.roles, "code").includes(Roles.Partner);

  return (
    <Box display={"flex"} gap={2}>
      {user &&
        <Box display={"flex"} justifyContent={"space-between"} gap={2}>
          <Avatar src={user?.avatar?.url} />
        </Box>
      }
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {user ?
          <>
            <Text variant={"p"} fontWeight={700}>{user?.fullName}</Text>
            {isPartner && <>
              <NavigationList routes={partnerMenuRoutes} />
              <Divider variant={"fullWidth"} flexItem light />
            </>}
            <NavigationList routes={customerMenuRoutes} />
          </> :
          <NavigationList routes={guestMenuRoutes} />
        }
      </Box>
    </Box>
  );
};

export default AccountMenuNavigation;
