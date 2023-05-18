import { readLimitListings } from "../api/read/listings.mjs";
import { renderAllListingsTemplate } from "../templates/allListings.mjs";

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
  }

  nextButton.addEventListener("click", async () => {
    listingsContainer.innerHTML = "";
    currentPage++;
    prevButton.classList.remove("d-none");
    const listings = await readLimitListings(20, currentPage);
    renderAllListingsTemplate(listings, listingsContainer);
  });

  prevButton.addEventListener("click", async () => {
    listingsContainer.innerHTML = "";
    currentPage--;

    const listings = await readLimitListings(20, currentPage);
    renderAllListingsTemplate(listings, listingsContainer);

    if (currentPage === 1) {
      prevButton.classList.add("d-none");
    }
  });

  // const pageNumber = document.createElement("button");
  // pageNumber.className = "paginationNumber page-link";
  // pageNumber.innerHTML = currentPage;
  // pageNumber.setAttribute("page-index", currentPage);
  // pageNumber.setAttribute("aria-label", "Page" + currentPage);

  // paginationNumbers.appendChild(pageNumber);
}
