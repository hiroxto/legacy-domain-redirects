const APEX_DOMAIN = "https://hiroxto.net";

const utilsRedirectMap: Record<string, string> = {
  "/": APEX_DOMAIN,
  "/train-number": `${APEX_DOMAIN}/tools/train-number`,
  "/train-number/2018-03-17": `${APEX_DOMAIN}/tools/train-number/2018-03-17`,
  "/train-number/2019-03-16": `${APEX_DOMAIN}/tools/train-number/2019-03-16`,
  "/train-number/2020-03-14": `${APEX_DOMAIN}/tools/train-number/2020-03-14`,
  "/train-number/2021-03-13": `${APEX_DOMAIN}/tools/train-number/2021-03-13`,
  "/train-number-calc": `${APEX_DOMAIN}/tools/train-number-calc`,
  "/qr-code": `${APEX_DOMAIN}/tools/qr-code-gen`,
  "/cl-sound": `${APEX_DOMAIN}/tools/cl-sound`,
  "/epgs/recorded-name": `${APEX_DOMAIN}/tools/epgs-recorded-name`,
};

const getRedirectUrl = (url: URL): string => {
  const { hostname, pathname } = url;

  switch (hostname) {
    case "www.hiroxto.net":
      return `${APEX_DOMAIN}${pathname}`;
    case "swarm-checkin-regulation-checker.hiroxto.net":
      return `${APEX_DOMAIN}/tools/swarm-checkin-regulation-checker`;
    case "fare-ticket-route-planning.hiroxto.net":
      if (pathname === "/states") {
        return `${APEX_DOMAIN}/tools/fare-ticket-route-planner/states`;
      }

      return `${APEX_DOMAIN}/tools/fare-ticket-route-planner`;
    case "utils.hiroxto.net":
      return utilsRedirectMap[pathname] ?? APEX_DOMAIN;
    default:
      return APEX_DOMAIN;
  }
};

export default {
  fetch(request): Response {
    const url = new URL(request.url);
    const redirectUrl = getRedirectUrl(url);

    return Response.redirect(redirectUrl, 301);
  }
} satisfies ExportedHandler;
