import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@dulcon/bimbows-3-1",
  app: () => System.import<LifeCycles>("@dulcon/bimbows-3-1"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
