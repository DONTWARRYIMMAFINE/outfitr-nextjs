export const isNotEmpty = (value: string | null | undefined) => {
  return !(!value || value.trim().length === 0);
};

export const stringOrDefault = (value?: string, defaultValue = "") => {
  return value || defaultValue;
};

export const insertAtIndex = (str: string, substring: string, index: number) => {
  return str.slice(0, index) + substring + str.slice(index);
};
