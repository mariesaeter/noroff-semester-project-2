import { loadLocal } from "../storage/index.mjs";

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
