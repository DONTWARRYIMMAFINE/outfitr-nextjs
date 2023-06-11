import DesktopNavigation from "@/components/common/Header/DesktopNavigation";
import { Hidden } from "@/components/ui";

const Navigation = () => {
  return (<>
    <Hidden mdDown>
      <DesktopNavigation />
    </Hidden>
  </>);
};

export default Navigation;
