import { ReactElement } from "react";

export interface LngProps {
  lng: string;
}
export interface LngParamsProps {
  params: LngProps;
}

export interface TProps {
  t: any;
}

export type TString = ReactElement | string;
