import { api_Listings } from "../../tools/constants.mjs";
import { methodPost as method } from "../../tools/constants.mjs";
import { fetchToken } from "../../tools/fetchToken.mjs";

export async function createListing(listingData) {
  const body = JSON.stringify(listingData);

  try {
    const response = await fetchToken(api_Listings, {
      method,
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
