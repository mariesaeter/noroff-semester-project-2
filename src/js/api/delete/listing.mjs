import { api_Listings } from "../../tools/constants.mjs";
import { fetchToken } from "../../tools/fetchToken.mjs";
import { methodDelete as method } from "../../tools/constants.mjs";

/**
 *
 * @param {string} id - A specific listing that you want to delete. Needs to be your own listing
 * @returns - A deleted listing
 */
export async function deleteListing(id) {
  const listingUrl = `${api_Listings}/${id}`;

  try {
    const response = await fetchToken(listingUrl, {
      method,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
