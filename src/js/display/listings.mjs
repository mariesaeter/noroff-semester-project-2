import { readLimitListings } from "../api/read/listings.mjs";
import { renderAllListingsTemplate, addLoader } from "../templates/index.mjs";
import { endTime, initializeTime } from "../tools/formatDate.mjs";

/**
 * Displays listings on the home page by limiting the amount of listings on each page
 */
export async function displayListings() {
  const listingsContainer = document.getElementById("listingContainer");
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

  let currentPage = 1;

  // Renders the first page and hides the prev button
  if (currentPage === 1) {
    const listings = await readLimitListings(20, currentPage);
    renderAllListingsTemplate(listings, listingsContainer);

    prevButton.classList.add("d-none");

    // add the time left of the bid
    listings.forEach((listing) => {
      const dateEnd = endTime(listing.endsAt);
      initializeTime(`timeLeft${listing.id}`, dateEnd);
    });
  }

  // Addeventlistener for the next button. Makes new api calls when clicked and displays the prev button.
  nextButton.addEventListener("click", async () => {
    listingsContainer.innerHTML = "";
    addLoader(listingsContainer);
    currentPage++;
    prevButton.classList.remove("d-none");
    const listings = await readLimitListings(20, currentPage);
    renderAllListingsTemplate(listings, listingsContainer);

    // add the time left of the bid
    listings.forEach((listing) => {
      const dateEnd = endTime(listing.endsAt);
      initializeTime(`timeLeft${listing.id}`, dateEnd);
    });
  });

  // Addeventlistener for the prev button. Makes new api calls when clicked.
  prevButton.addEventListener("click", async () => {
    listingsContainer.innerHTML = "";
    addLoader(listingsContainer);
    currentPage--;

    const listings = await readLimitListings(20, currentPage);
    renderAllListingsTemplate(listings, listingsContainer);

    if (currentPage === 1) {
      prevButton.classList.add("d-none");
    }

    // add the time left of the bid
    listings.forEach((listing) => {
      const dateEnd = endTime(listing.endsAt);
      initializeTime(`timeLeft${listing.id}`, dateEnd);
    });
  });
}
