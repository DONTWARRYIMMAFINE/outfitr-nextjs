import DesktopNavigation from "@/components/common/Header/DesktopNavigation";
import MobileNavigation from "@/components/common/Header/MobileNavigation";
import { Hidden } from "@/components/ui";

const Navigation = () => {
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
