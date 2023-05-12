import DesktopNavigation from "@/components/common/header/DesktopNavigation";
import MobileNavigation from "@/components/common/header/MobileNavigation";
import { Hidden } from "@/components/ui";
import { FC } from "react";

const Navigation: FC = () => {
  return (<>
    <Hidden mdDown>
      <DesktopNavigation />
    </Hidden>
    <Hidden mdUp>
      <MobileNavigation />
    </Hidden>
  </>);
};

export default Navigation;
