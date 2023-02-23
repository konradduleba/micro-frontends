import { ActivityFn } from "single-spa";

export interface Page {
  name: string;
  isDisplayed: ActivityFn;
  domElement: HTMLElement;
}

export enum PageRoutes {
  WELCOME = "",
  BIMBOWS_3_1 = "bimbows-3-1",
}

export enum PageResources {
  NAVIGATION = `@dulcon/nav`,
  WELCOME = "@dulcon/welcome",
  BIMBOWS_3_1 = "@dulcon/bimbows-3-1",
}
