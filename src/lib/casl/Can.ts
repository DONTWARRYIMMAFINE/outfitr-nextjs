import { AppAbility } from "@/lib/casl/ability";
import { createContextualCan } from "@casl/react";
import { createContext } from "react";

export const AbilityContext = createContext<AppAbility>(undefined!);

export default createContextualCan(AbilityContext.Consumer);
