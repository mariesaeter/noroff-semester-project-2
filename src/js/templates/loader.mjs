/**
 * Creates a template for the api loader
 * @returns api loader in a div
 */
export function loaderTemplate() {
  const loaderDiv = document.createElement("div");
  loaderDiv.className = "col-12 d-flex p-5 m-5 justify-content-center";

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.setAttribute("id", "api-loader");

  loaderDiv.appendChild(dot);

  return loaderDiv;
}

/**
 * Adds loader to parent container
 * @param {object} parent | A DOM-container
 */
export function addLoader(parent) {
  parent.appendChild(loaderTemplate());
}
