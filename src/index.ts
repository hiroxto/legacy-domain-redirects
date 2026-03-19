const ROOT_DOMAIN = "https://www.hiroxto.net"

const utilsRedirectMap: Record<string, string> = {
  "/": ROOT_DOMAIN,
  "/train-number": `${ROOT_DOMAIN}/tools/train-number`,
  "/train-number/2018-03-17": `${ROOT_DOMAIN}/tools/train-number/2018-03-17`,
  "/train-number/2019-03-16": `${ROOT_DOMAIN}/tools/train-number/2019-03-16`,
  "/train-number/2020-03-14": `${ROOT_DOMAIN}/tools/train-number/2020-03-14`,
  "/train-number/2021-03-13": `${ROOT_DOMAIN}/tools/train-number/2021-03-13`,
  "/train-number-calc": `${ROOT_DOMAIN}/tools/train-number-calc`,
  "/qr-code": `${ROOT_DOMAIN}/tools/qr-code-gen`,
  "/cl-sound": `${ROOT_DOMAIN}/tools/cl-sound`,
  "/epgs/recorded-name": `${ROOT_DOMAIN}/tools/epgs-recorded-name`,
};

const getRedirectUrl = (hostname: string, pathname: string): string => {
  switch (hostname) {
    case "swarm-checkin-regulation-checker.hiroxto.net":
      return `${ROOT_DOMAIN}/tools/swarm-checkin-regulation-checker`;
    case "fare-ticket-route-planning.hiroxto.net":
      if (pathname === "/states") {
        return `${ROOT_DOMAIN}/tools/fare-ticket-route-planner/states`;
      }

      return `${ROOT_DOMAIN}/tools/fare-ticket-route-planner`;
    case "utils.hiroxto.net":
      return utilsRedirectMap[pathname] ?? ROOT_DOMAIN;
    default:
      return ROOT_DOMAIN;
  }
};

export default {
  fetch(request): Response {
    const url = new URL(request.url);
    const redirectUrl = getRedirectUrl(url.hostname, url.pathname);

    return Response.redirect(redirectUrl, 301);
  }
} satisfies ExportedHandler;
