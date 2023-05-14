// import { endTime } from "../tools/formatDate.mjs";

export function viewListingTemplate(listingData) {
  const { title, media } = listingData;

  // create main div
  const mainDiv = document.createElement("div");
  mainDiv.className = "row";

  // create h1 (child of mainDiv)
  const h1 = document.createElement("h1");
  const h1Text = document.createTextNode(title);
  h1.appendChild(h1Text);

  // create carouselContainer (child of mainDiv)
  const carouselContainer = document.createElement("div");
  carouselContainer.className = "col-12 col-lg-5";

  // create carousel (child of carouselContainer)
  const carousel = document.createElement("div");
  carousel.className = "carousel slide";
  carousel.setAttribute("id", "productCarousel");

  // create carouselInner (child of carousel)
  const carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";

  for (let i = 0; i < media.length; i++) {
    carouselInner.innerHTML += `<div class="carousel-item"><img class="d-block w-100" src="${media[i]}"></div>`;
  }

  // Create button prev (child of carousel)
  const btnPrev = document.createElement("button");
  btnPrev.className = "carousel-control-prev";
  btnPrev.setAttribute("data-bs-target", "#productCarousel");
  btnPrev.setAttribute("data-bs-slide", "prev");
  btnPrev.setAttribute("type", "button");

  // Create icon for prev (child of btnPrev)
  const iconPrev = document.createElement("span");
  iconPrev.className = "carousel-control-prev-icon";
  iconPrev.setAttribute("aria-hidden", "true");

  // Create invisible text for prev (child of btnPrev)
  const textPrev = document.createElement("span");
  textPrev.className = "visually-hidden";
  textPrev.innerText = "Previous";

  // Create button next (child of carousel)
  const btnNext = document.createElement("button");
  btnNext.className = "carousel-control-next";
  btnNext.setAttribute("data-bs-target", "#productCarousel");
  btnNext.setAttribute("data-bs-slide", "next");
  btnNext.setAttribute("type", "button");

  // Create icon for next (child of btnNext)
  const iconNext = document.createElement("span");
  iconNext.className = "carousel-control-next-icon";
  iconNext.setAttribute("aria-hidden", "true");

  // Create invisible text for next (child of btnNext)
  const textNext = document.createElement("span");
  textNext.className = "visually-hidden";
  textNext.innerText = "Next";

  // create carousel indicators container (child of carousel)
  const indicatorsContainer = document.createElement("ol");
  indicatorsContainer.className = "carousel-indicators position-relative";

  // create carousel indicators (child of indicatorsContainer)

  for (let i = 0; i < media.length; i++) {
    indicatorsContainer.innerHTML += `<li data-bs-target="#productCarousel"
      class="w-25 carouselIndicator"
      data-bs-slide-to="${i}"
      aria-label="Slide ${i + 1}"
    >
      <img
        src="${media[i]}"
        class="d-block img-thumbnail"
      />
    </li>`;
  }

  // appending carousel
  // indicatorsContainer.append();
  // carouselInner.append(carouselImages);
  btnPrev.append(iconPrev, textPrev);
  btnNext.append(iconNext, textNext);
  carousel.append(carouselInner, btnPrev, btnNext, indicatorsContainer);
  carouselContainer.appendChild(carousel);

  // Appending information
  // appending main
  mainDiv.append(h1, carouselContainer);

  return mainDiv;
}
/* <div class="container">
        <h1>The Drowned Woods</h1>
        <div class="row">
          <div class="col-12 col-lg-5">
            <div id="productCarousel" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://placehold.co/600x400"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://placehold.co/600x400/000000/FFF"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
              <ol class="carousel-indicators position-relative">
                <li
                  data-bs-target="#productCarousel"
                  data-bs-slide-to="0"
                  class="active w-25"
                  aria-current="true"
                  aria-label="Slide 1"
                >
                  <img
                    src="https://placehold.co/50"
                    class="d-block img-thumbnail"
                    alt="..."
                  />
                </li>
                <li
                  data-bs-target="#productCarousel"
                  class="w-25"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                >
                  <img
                    src="https://placehold.co/50/000000/FFF"
                    class="d-block img-thumbnail"
                    alt="..."
                  />
                </li>
              </ol>
            </div>
          </div>
          <div
            class="col-12 col-lg-7 position mt-5 mt-lg-0 pt-4 pt-lg-2 text-center"
          >
            <p class="text-start">
              The Drowned Woods Illumicrate special edition is up for auction.
              It is read one time and the condition is good. It has sprayed
              edges, reversed dust jacket, foil on cover and is signed by the
              author.
            </p>
            <div class="text-center">
              <div
                class="current-bid d-flex align-items-center justify-content-lg-start justify-content-center"
              >
                <p>Current bid:</p>
                <p class="fw-semibold fs-3 text-secondary ms-3">$7.43</p>
              </div>
              <p
                class="text-danger fs-6 position-absolute top-0 end-0 pt-lg-2 pe-lg-5"
              >
                2h left
              </p>
            </div>
            <div class="make-bid">
              <form class="w-100 form-floating">
                <input
                  type="number"
                  class="form-control ps-3 pe-2 pb-1 pt-4 w-100 rounded mb-3 form-inputs"
                  id="floatingInput"
                  aria-label="Amount"
                  placeholder="Amount ($ xx.xx)"
                />
                <label for="floatingInput" class="ps-4">Amount ($ xx.xx)</label>
                <button
                  type="button"
                  class="btn btn-secondary px-4 rounded border-0 w-100 text-uppercase"
                >
                  Make bid
                </button>
              </form>
            </div>
            <button
              type="button"
              class="btn btn-link mt-3"
              data-bs-toggle="modal"
              data-bs-target="#bidHistoryModal"
            >
              View bid history
            </button>
            <div
              class="modal fade"
              id="bidHistoryModal"
              tabindex="-1"
              aria-labelledby="bidHistory"
              aria-hidden="true"
            >
              <div
                class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
              >
                <div class="modal-content">
                  <div class="modal-header flex-column">
                    <h2 class="modal-title" id="bidHistory">Bid history</h2>

                    <button
                      type="button"
                      class="btn-close position-absolute top-0 end-0 mt-3 me-3"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <div
                      class="current-bid d-flex align-items-center justify-content-center"
                    >
                      <p class="mb-0">Current bid:</p>
                      <p class="fw-semibold fs-3 text-secondary ms-3 mb-0">
                        $7.43
                      </p>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center small mt-0"
                    >
                      <small class="text-muted fw-light"
                        >By <span class="fw-semibold">Sara</span> at
                        14:50</small
                      >
                    </div>
                  </div>
                  <div class="modal-body">
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Time</th>
                          <th scope="col" colspan="4">Bidder</th>
                          <th scope="col" class="text-end">Bid</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">14:53</th>
                          <td colspan="4">Morten</td>
                          <td class="text-end">
                            <span class="bg-light py-1 px-2">$6.74</span>
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                  <div class="modal-footer justify-content-center">
                    <p class="text-danger fs-6">2h left</p>
                    <button
                      type="button"
                      class="btn btn-secondary w-100 text-uppercase"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */

export function renderViewListingTemplate(listingData, parent) {
  parent.append(viewListingTemplate(listingData));
}
