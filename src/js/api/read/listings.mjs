import {
  api_Listings,
  api_Listings_parameters,
} from "../../tools/constants.mjs";

/**
 * GET request fetching all active listings from API
 * @returns - a list of listings sorted by time created in decending orderer
 */
export async function readListings() {
  try {
    const response = await fetch(`${api_Listings}/${api_Listings_parameters}`);

    const listings = await response.json();

    return listings;
  } catch (error) {
    console.log(error);
  }
}

export async function readLimitListings(offset) {
  try {
    const response = await fetch(
      `${api_Listings}/${api_Listings_parameters}&limit=20&offset=${offset}`
    );

    const listings = await response.json();
    console.log(listings);

    return listings;
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
      `${api_Listings}/${id}/${api_Listings_parameters}`
    );

    const listing = await response.json();
    return listing;
  } catch (error) {
    console.log(error);
  }
}
