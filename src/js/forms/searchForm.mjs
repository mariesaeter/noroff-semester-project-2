import { renderAllListingsTemplate } from "../templates/allListings.mjs";
import { renderEndTime } from "../tools/formatDate.mjs";

/**
 * Displays posts filtered by search input
 * @param {Array} posts
 * @returns - new array of filtered posts
 */
export function setSearchForm(listings) {
  const form = document.querySelector("#searchForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const word = form.searchWord.value;
      const searchWord = word.toLowerCase();

      // filter so that it is possible to get search results from title, body, profile and tags
      const filteredListings = listings.filter(function (listing) {
        if (listing.description === null) {
          const title = listing.title.toLowerCase();
          let description = " ";
          const seller = listing.seller.name.toLowerCase();
          const tags = Boolean(
            listing.tags
              .map((tag) => tag.toLowerCase())
              .filter((tag) => tag.includes(searchWord)).length
          );

          return (
            title.includes(searchWord) ||
            description.includes(searchWord) ||
            seller.includes(searchWord) ||
            tags
          );
        } else {
          const title = listing.title.toLowerCase();
          let description = listing.description.toLowerCase();
          const seller = listing.seller.name.toLowerCase();
          const tags = Boolean(
            listing.tags
              .map((tag) => tag.toLowerCase())
              .filter((tag) => tag.includes(searchWord)).length
          );

          return (
            title.includes(searchWord) ||
            description.includes(searchWord) ||
            seller.includes(searchWord) ||
            tags
          );
        }
      });
      const results = document.getElementById("listingContainer");
      const searchTerm = document.getElementById("search-word");
      const searchNumber = document.getElementById("search-number");
      const searchResultsText = document.getElementById("search-results");

      searchResultsText.classList.remove("d-none");
      searchTerm.innerHTML = searchWord;
      searchNumber.innerHTML = filteredListings.length;

      if (filteredListings.length) {
        results.innerHTML = "";
        renderAllListingsTemplate(filteredListings, results);
        renderEndTime(filteredListings);
      } else {
        results.innerHTML = "No listings match your search";
      }
    });
  }
}
