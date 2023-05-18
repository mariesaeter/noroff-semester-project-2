import { readLimitListings } from "../api/read/listings.mjs";
import { renderAllListingsTemplate } from "../templates/allListings.mjs";
import { addLoader } from "../templates/loader.mjs";
import { endTime, initializeTime } from "../tools/formatDate.mjs";

export async function displayListings() {
  const listingsContainer = document.getElementById("listingContainer");
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");
  // const paginationNumbers = document.getElementById("paginationNumbers");

  let currentPage = 1;

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

  // const pageNumber = document.createElement("button");
  // pageNumber.className = "paginationNumber page-link";
  // pageNumber.innerHTML = currentPage;
  // pageNumber.setAttribute("page-index", currentPage);
  // pageNumber.setAttribute("aria-label", "Page" + currentPage);

  // paginationNumbers.appendChild(pageNumber);
}
