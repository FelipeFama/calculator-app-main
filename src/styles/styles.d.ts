/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from "styled-components";

import { themeOne, themeTwo, themeThree } from "./themes";

export type Theme = typeof themeOne;
export type Theme = typeof themeTwo;
export type Theme = typeof themeThree;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
