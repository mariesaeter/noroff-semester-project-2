import { api_Listings } from "../../tools/constants.mjs";
import { methodPost as method } from "../../tools/constants.mjs";
import { fetchToken } from "../../tools/fetchToken.mjs";

/**
 * POST API call to create a listing
 * @param {object} listingData | an object for a listing, consiting of at least "title" and "email", "media" and "description" is also recommended.
 * @returns | a listing sent to the API
 */
export async function createListing(listingData) {
  const body = JSON.stringify(listingData);

  try {
    const response = await fetchToken(api_Listings, {
      method,
      body,
    });

    if (response.ok) {
      const success = document.getElementById("valid-create");
      success.innerText = "Your listing was created successfully!";
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
