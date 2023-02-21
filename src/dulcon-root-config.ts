import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@dulcon/bimbows-3-1",
  app: () => System.import<LifeCycles>("@dulcon/bimbows-3-1"),
  activeWhen: ["/bimbows-3-1"],
});

start({
  urlRerouteOnly: true,
});
