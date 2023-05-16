import { readLimitListings } from "../api/read/listings.mjs";
import { renderAllListingsTemplate } from "../templates/allListings.mjs";

export async function displayListings() {
  const listingsContainer = document.getElementById("listingContainer");

  if (!listingsContainer.length) {
    const offset = 0;
    const listings = await readLimitListings(offset);

    renderAllListingsTemplate(listings, listingsContainer);
  }

  const loadMoreListings = document.getElementById("loadMoreBtn");
  loadMoreListings.addEventListener("click", async (e) => {
    e.preventDefault();
    listingsContainer.innerHTML = "";
    let newOffset = 20;
    const listings = await readLimitListings(newOffset);

    renderAllListingsTemplate(listings, listingsContainer);
  });
}

// export function display() {
//   const hiddenListings = document.querySelectorAll(".hidden-listing");
//   const loadMoreListings = document.getElementById("loadMoreBtn");
//   const arrHiddenListings = Array.prototype.slice.call(hiddenListings);

//   arrHiddenListings
//     .splice(0, 20)
//     .forEach((listing) => listing.classList.remove("d-none"));

//   loadMoreListings.addEventListener("click", (e) => {
//     e.preventDefault();
//     arrHiddenListings
//       .splice(0, 20)
//       .forEach((listing) => listing.classList.remove("d-none"));

//     if (arrHiddenListings.length === 0) {
//       loadMoreListings.disabled = true;
//       loadMoreListings.innerText = "No more listings to show";
//     }
//   });
// }
