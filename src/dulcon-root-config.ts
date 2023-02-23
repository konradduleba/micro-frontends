import { registerApplication, start, LifeCycles } from "single-spa";
import { pages } from "./activity-functions";
import { Page } from "./models";

pages.forEach(({ name, isDisplayed, domElement }: Page) => {
  registerApplication(
    name,
    () => System.import<LifeCycles>(name),
    isDisplayed,
    { domElement }
  );
});

start();
