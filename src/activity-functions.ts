import { ActivityFn } from "single-spa";
import { Page, PageResources, PageRoutes } from "./models";

const navigationContainer = document.getElementById("navigation-container");
const contentContainer = document.getElementById("content-container");

const prefix = ({ href, origin }: Location, ...prefixes): ActivityFn => {
  return () =>
    prefixes.some(
      (prefix: PageRoutes) => href.indexOf(`${origin}/${prefix}`) !== -1
    );
};

export const pages: Page[] = [
  {
    name: PageResources.NAVIGATION,
    isDisplayed: () => true,
    domElement: navigationContainer,
  },
  {
    name: PageResources.WELCOME,
    isDisplayed: prefix(location, PageRoutes.WELCOME),
    domElement: contentContainer,
  },
  {
    name: PageResources.BIMBOWS_3_1,
    isDisplayed: prefix(location, PageRoutes.BIMBOWS_3_1),
    domElement: contentContainer,
  },
];
