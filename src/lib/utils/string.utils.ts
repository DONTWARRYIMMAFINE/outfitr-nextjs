export const isNotEmpty = (value: string | null | undefined) => {
  return !(!value || value.trim().length === 0);
};
