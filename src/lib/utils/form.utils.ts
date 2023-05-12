import { isEmpty, isNull, isUndefined, omitBy } from "lodash";

export const omitEmptyFields = (values: object) => {
  return omitBy(omitBy(omitBy(values, isEmpty), isNull), isUndefined);
};
