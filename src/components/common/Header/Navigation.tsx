import DesktopNavigation from "@/components/common/Header/DesktopNavigation";
import MobileNavigation from "@/components/common/Header/MobileNavigation";
import { Hidden } from "@/components/ui";
import { LngProps } from "@/lib/types/params.type";

export interface NavigationProps extends LngProps {}

const Navigation = ({ lng }: NavigationProps) => {
  return (<>
    <Hidden mdDown>
      <DesktopNavigation lng={lng} />
    </Hidden>
    <Hidden mdUp>
      <MobileNavigation />
    </Hidden>
  </>);
};

export default Navigation;
