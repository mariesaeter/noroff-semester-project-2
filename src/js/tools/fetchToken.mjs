import { loadLocal } from "../storage/index.mjs";

/**
 * Fetch url with access token
 * @param {string} url | Url string of the api you want to fetch
 * @param {object} options | Object with fetch options
 * @returns fetch request done with access token
 */
export async function fetchToken(url, options) {
  const accessToken = loadLocal("accessToken");

  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
