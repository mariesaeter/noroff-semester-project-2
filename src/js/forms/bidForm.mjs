import { createBid } from "../api/create/bid.mjs";
import { formValidation } from "../tools/formValidation.mjs";
import { displayListing } from "../display/listing.mjs";

/**
 * Form listener that makes it possible to bid on a listing
 */
export async function setBidFormListener() {
  // displays the listing
  await displayListing();

  const form = document.querySelector("#bidForm");
  const url = new URL(location.href);

  const id = url.searchParams.get("id");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formValidation();

    const form = event.target;
    const formData = new FormData(form);
    const bid = Object.fromEntries(formData.entries());
    console.log(bid);

    bid.id = id;
    bid.amount = parseInt(bid.amount);

    createBid(id, bid);
  });
}
