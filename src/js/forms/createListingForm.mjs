import { createListing } from "../api/create/listing.mjs";
import { formValidation } from "../tools/formValidation.mjs";

/**
 * Sets form listener for creating a listing, checking that the title of the listing has a length before activating api-call
 */
export function setCreateListingFormListener() {
  const form = document.querySelector("#listingForm");
  formValidation();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());

    listing.media = listing.media.split(",");

    if (listing.title.length > 1) {
      createListing(listing);
    }
  });
}
