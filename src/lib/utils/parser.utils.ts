import { isNotEmpty } from "@/lib/utils/string.utils";

export const parseIntOrDefault = (value: string | null | undefined, defaultValue = 0) => {
  if (!isNotEmpty(value)) {
    return defaultValue;
  }

  return parseInt(value!) || defaultValue
}
