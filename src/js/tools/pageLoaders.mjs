/**
 * redirect to new path
 * @param {string} path - new location
 * @example
 * redirect("src/index.html/") sends you to the home page after timeout
 */
export function redirect(path) {
  setTimeout(() => {
    window.location.href = path;
  }, 250);
}
