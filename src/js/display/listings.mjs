import { readLimitListings } from "../api/read/listings.mjs";
import { renderAllListingsTemplate, addLoader } from "../templates/index.mjs";
import { renderEndTime } from "../tools/formatDate.mjs";

/**
 * Displays listings on the home page by limiting the amount of listings on each page
 */
export async function displayListings() {
  const listingsContainer = document.getElementById("listingContainer");
  const nextButton = document.getElementById("nextButton");

  let currentPage = 1;

  // Renders the first page and hides the prev button
  if (currentPage === 1) {
    const listings = await readLimitListings(20);

    renderAllListingsTemplate(listings, listingsContainer);

    // add the time left of the bid
    renderEndTime(listings);
  }
  let newLimit = 20;
  // Addeventlistener for the next button. Makes new api calls when clicked and displays the prev button.
  nextButton.addEventListener("click", async () => {
    // listingsContainer.innerHTML = "";
    addLoader(listingsContainer);
    newLimit += 20;
    const listings = await readLimitListings(newLimit);
    renderAllListingsTemplate(listings, listingsContainer);

    // add the time left of the bid
    renderEndTime(listings);

    if (newLimit === 100) {
      nextButton.classList.add("d-none");
    }
  });
}
