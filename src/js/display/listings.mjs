import { readListings } from "../api/read/listings.mjs";
import { renderListingTemplates } from "../templates/allListings.mjs";

export async function displayListings() {
  const listings = await readListings();

  const listingsContainer = document.getElementById("listingContainer");

  renderListingTemplates(listings, listingsContainer);
}
