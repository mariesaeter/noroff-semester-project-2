import * as API from "../../tools/constants.mjs";

/**
 * GET request fetching all active listings from API
 * @returns - a list of listings sorted by time created in decending orderer
 */
export async function readListings() {
  try {
    const response = await fetch(
      `${API.api_Listings}/${API.api_Listings_parameters}`
    );

    const listings = await response.json();

    return listings;
  } catch (error) {
    console.log(error);
  }
}

/**
 * GET request that fetches a limited amount of listings from API with a calculated offset based on which page in pagination we are on.
 * @param {number} limit | The number of listings you want to fetch in one call
 * @param {number} currentPage | The page of listings you want to retrieve (calulates an offset based on the set limit)
 * @returns A specified number of listings based on limit, sorted by day created or ending soon depending on switch
 */
export async function readLimitListings(limit, currentPage) {
  try {
    const switchSort = document.getElementById("switchCheckSort");
    if (switchSort.value === "on") {
      const response = await fetch(
        `${API.api_Listings}/${
          API.api_Listings_sort_parameters
        }&limit=${limit}&offset=${limit * currentPage}`
      );

      const listings = await response.json();

      return listings;
    } else {
      const response = await fetch(
        `${API.api_Listings}/${
          API.api_Listings_parameters
        }&limit=${limit}&offset=${limit * currentPage}`
      );

      const listings = await response.json();
      return listings;
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * GET request to fetch a single listing by its id
 * @param {string} id - of listing
 * @returns - a single listing with a specfic id
 */
export async function readListing(id) {
  try {
    const response = await fetch(
      `${API.api_Listings}/${id}/${API.api_Listings_parameters}`
    );

    const listing = await response.json();
    return listing;
  } catch (error) {
    console.log(error);
  }
}
