import { readLimitListings } from "../api/read/listings.mjs";
import { renderAllListingsTemplate } from "../templates/allListings.mjs";

// export async function displayListings() {
//   const listingContainer = document.getElementById("listingContainer");
//   const paginationNumbers = document.getElementById("paginationNumbers");
//   const nextButton = document.getElementById("nextButton");
//   const prevButton = document.getElementById("prevButton");

//   const listings = await readLimitListings();

//   const paginationLimit = 20;
//   const pageCount = Math.ceil(listings.length / paginationLimit);
//   let currentPage;

//   const appendPageNumber = (index) => {
//     const pageNumber = document.createElement("button");
//     pageNumber.className = "paginationNumber page-link";
//     pageNumber.innerHTML = index;
//     pageNumber.setAttribute("page-index", index);
//     pageNumber.setAttribute("aria-label", "Page" + index);

//     paginationNumbers.appendChild(pageNumber);
//   };

//   const getPaginationNumbers = () => {
//     for (let i = 1; i <= pageCount; i++) {
//       appendPageNumber(i);
//     }
//   };

//   window.addEventListener("load", () => {
//     getPaginationNumbers();
//     setCurrentPage(1);
//   });

//   const setCurrentPage = (pageNum) => {
//     currentPage = pageNum;

//     const prevRange = (pageNum - 1) * paginationLimit;
//     const currRange = pageNum * paginationLimit;

//     listings.forEach((listing, index) => {
//       listingContainer.innerHTML = "";
//       if (index >= prevRange && index < currRange) {
//         renderListingTemplate(listing, listingContainer);
//       }
//     });
//   };
// }

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
// export async function displayListings() {
//   const listingsContainer = document.getElementById("listingContainer");
//   const pageCount = 20;

//   if (!listingsContainer.length) {
//     const offset = 0;
//     const listings = await readLimitListings();

//     renderAllListingsTemplate(listings, listingsContainer);
//   }

//   const loadMoreListings = document.getElementById("loadMoreBtn");
//   loadMoreListings.addEventListener("click", async (e) => {
//     e.preventDefault();

//     listingsContainer.innerHTML = "";

//     let newOffset = 20;
//     const listings = await readLimitListings(newOffset);

//     renderAllListingsTemplate(listings, listingsContainer);
//   });
// }

// const listingsContainer = document.getElementById("listingContainer");
// let pageCount = 20;
// let currentPage = 1;

// if (!listingsContainer.length) {
//   const offset = 0;
//   const listings = await readLimitListings();

//   console.log(
//     listings.filter((index) => {
//       let start = (currentPage - 1) * pageCount;
//       let end = currentPage * pageCount;

//       if (index >= start && index < end) {
//         return true;
//       }
//     })
//   );
// }

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
