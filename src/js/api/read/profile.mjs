import { api_Profiles } from "../../tools/constants.mjs";
import { fetchToken } from "../../tools/fetchToken.mjs";

/**
 * GET request to retrieve a single profile by name
 * @param {string} name - og the user's profile
 * @returns - a specific profile by name
 */
export async function readProfile(name) {
  try {
    const response = await fetchToken(`${api_Profiles}/${name}`);

    const profile = await response.json();
    return profile;
  } catch (error) {
    console.log(error);
  }
}
