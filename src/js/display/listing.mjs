import { readListing } from "../api/read/listings.mjs";
import { renderViewListingTemplate } from "../templates/listing.mjs";
import { endTime, initializeTime } from "../tools/formatDate.mjs";

export async function displayListing() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const listing = await readListing(id);
  console.log(listing);

  const listingContainer = document.getElementById("listing-Container");

  renderViewListingTemplate(listing, listingContainer);

  // Adds the active class to the carousel-item
  const firstImg = document.querySelectorAll(".carousel-item");
  const activeImg = firstImg[0];
  activeImg.classList.add("active");

  // adds active function to carousel indicators
  const carouselIndicators = document.querySelectorAll(".carouselIndicator");
  const activeIndicator = carouselIndicators[0];
  activeIndicator.classList.add("active");
  activeIndicator.setAttribute("aria-current", "true");

  const dateEnd = endTime(listing.endsAt);
  initializeTime("timeLeft", dateEnd);
  initializeTime("timeLeftModal", dateEnd);
}
