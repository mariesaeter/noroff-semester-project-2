/**
 * Function that sets /login/ as href if user is not logged in
 * @param {element} element | a link that reroutes to login page if an unregistered user tries to access
 * @returns false if user is logged in
 */
export function notAccess(element) {
  const body = document.querySelector("body");

  if (body.classList.contains("notLoggedIn")) {
    element.setAttribute("href", "/login/");
  }
  if (!body.classList.contains("notLoggedIn")) {
    return false;
  }
}

/**
 * Rerouts unregistered users when clicking on links that they don't have access to
 * @param {object} element | DOM object that originally links to a page that is unaccessable for unregistered users
 * @param {*} href | New route to link
 */
export function notAccessReroute(element, href) {
  const body = document.querySelector("body");
  const el = document.querySelector(element);

  if (!body.classList.contains("notLoggedIn")) {
    el.setAttribute("href", href);
  }
}
