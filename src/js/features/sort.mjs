import { displayListings } from "../display/listings.mjs";
import { addLoader } from "../templates/loader.mjs";

export async function switchSort() {
  const listingContainer = document.getElementById("listingContainer");
  const switchSort = document.getElementById("switchCheckSort");
  switchSort.addEventListener("change", function () {
    if (switchSort.value === "off") {
      switchSort.value = "on";
      listingContainer.innerHTML = "";
      addLoader(listingContainer);
      displayListings();
    } else if (switchSort.value === "on") {
      switchSort.value = "off";
      listingContainer.innerHTML = "";
      addLoader(listingContainer);
      displayListings();
    }
  });
}
