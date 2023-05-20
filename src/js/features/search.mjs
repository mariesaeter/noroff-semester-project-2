import { readListings } from "../api/read/listings.mjs";
import { setSearchForm } from "../forms/searchForm.mjs";

/**
 * Lets you search through listings
 */
export async function searchResults() {
  const results = document.getElementById("listingContainer");
  results.innerHTML = "";
  try {
    const listings = await readListings();
    setSearchForm(listings);
  } catch (error) {
    console.log(error);
  }
}
