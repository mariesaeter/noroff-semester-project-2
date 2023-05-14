import { bidTime, endTime } from "../tools/formatDate.mjs";

export function viewListingTemplate(listingData) {
  const { title, media, description, endsAt, bids, _count } = listingData;

  //   const lastBid = bids[bids.length - 1];
  const { 0: firstBid, length, [length - 1]: lastBid } = bids;

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

  // create infoContainer (child of mainDiv)
  const infoContainer = document.createElement("div");
  infoContainer.className =
    "col-12 col-lg-7 position mt-5 mt-lg-0 pt-4 pt-lg-2 text-center";

  // create description (child of infoContainer)
  const descriptionContainer = document.createElement("p");
  descriptionContainer.className = "text-start";
  const descriptionText = document.createTextNode(description);
  descriptionContainer.appendChild(descriptionText);

  // create bidContainer (child of infoContainer)
  const bidContainer = document.createElement("div");
  bidContainer.className = "text-center";

  // create currentBidContainer (child of bidContainer)
  const currentBidContainer = document.createElement("div");
  currentBidContainer.className =
    "d-flex align-items-center justify-content-lg-start justify-content-center";

  // create currentBidTitle (child of currentBidContainer)
  const currentBidTitle = document.createElement("p");
  currentBidTitle.innerText = "Current bid:";

  // create currentBid (child of currentBidContainer)
  const currentBid = document.createElement("p");
  currentBid.className = "fw-semibold fs-3 text-secondary ms-3";

  if (_count.bids === 0) {
    currentBid.innerText = "no bids";
  }
  if (_count.bids === 1) {
    currentBid.innerText = `$${firstBid.amount}`;
  }
  if (_count.bids > 1) {
    currentBid.innerText = `$${lastBid.amount}`;
  }

  // create bidForm (child of infoContainer)
  const bidForm = document.createElement("form");
  bidForm.className = "w-100 form-floating";

  // create bidFormInput (child of bidForm)
  const bidFormInput = document.createElement("input");
  bidFormInput.className =
    "form-control ps-3 pe-2 pb-1 pt-4 w-100 rounded mb-3 form-inputs";
  bidFormInput.setAttribute("type", "number");
  bidFormInput.setAttribute("id", "floatingInput");
  bidFormInput.setAttribute("aria-label", "Amount");
  bidFormInput.setAttribute("placeholder", "Amount");
  bidFormInput.setAttribute("name", "amount");

  // create label for bidFormInput (child of bidForm)
  const bidFormLabel = document.createElement("label");
  bidFormLabel.className = "ps-4";
  bidFormLabel.setAttribute("for", "floatingInput");
  bidFormLabel.innerText = "Amount";

  // Create button for bidForm (child of bidForm)
  const btnBidForm = document.createElement("button");
  btnBidForm.className =
    "btn btn-secondary px-4 rounded border-0 w-100 text-uppercase";
  btnBidForm.innerText = "Make bid";
  btnBidForm.setAttribute("type", "submit");

  // Create button to open bid history (child of infoContainer)
  const btnBidHistory = document.createElement("button");
  btnBidHistory.className = "btn btn-link mt-3";
  btnBidHistory.innerText = "View bid history";
  btnBidHistory.setAttribute("type", "button");
  btnBidHistory.setAttribute("data-bs-toggle", "modal");
  btnBidHistory.setAttribute("data-bs-target", "#bidHistoryModal");

  // Create modal for bid history (child of infoContainer)
  const bidHistoryModal = document.createElement("div");
  bidHistoryModal.className = "modal fade";
  bidHistoryModal.setAttribute("id", "bidHistoryModal");
  bidHistoryModal.setAttribute("tabindex", "-1");
  bidHistoryModal.setAttribute("aria-labelledby", "bidHistory");
  bidHistoryModal.setAttribute("aria-hidden", "true");

  // Create modal dialog (child of bidHistoryModal)
  const modalDialog = document.createElement("div");
  modalDialog.className =
    "modal-dialog modal-dialog-scrollable modal-dialog-centered";

  // Create modal content (child of modalDialog)
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  // Create modal header (child of modalContent)
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header flex-column";

  // Create modal title (child of modalHeader)
  const modalTitle = document.createElement("h2");
  modalTitle.className = "modal-title";
  modalTitle.setAttribute("id", "bidHistory");
  modalTitle.innerText = "Bid history";

  // Create close button (child of modalHeader)
  const btnModalClose = document.createElement("button");
  btnModalClose.className = "btn-close position-absolute top-0 end-0 mt-3 me-3";
  btnModalClose.setAttribute("type", "button");
  btnModalClose.setAttribute("data-bs-dismiss", "modal");
  btnModalClose.setAttribute("aria-label", "close");

  // Create current bid container for modal (child of modalHeader)
  const modalCurrentBidContainer = document.createElement("div");
  modalCurrentBidContainer.className =
    "d-flex align-items-center justify-content-center";

  // create currentBidTitle for modal (child of modalCurrentBidContainer)
  const modalCurrentBidTitle = document.createElement("p");
  modalCurrentBidTitle.className = "mb-0";
  modalCurrentBidTitle.innerText = "Current bid:";

  // Create current bid for modal (child of modalCurrentBidContainer)
  const modalCurrentBid = document.createElement("p");
  modalCurrentBid.className = "fw-semibold fs-3 text-secondary ms-3 mb-0";

  if (_count.bids === 0) {
    modalCurrentBid.innerText = "no bids";
  }
  if (_count.bids === 1) {
    modalCurrentBid.innerText = `$${firstBid.amount}`;
  }
  if (_count.bids > 1) {
    modalCurrentBid.innerText = `$${lastBid.amount}`;
  }

  // Create container for who made the bid (child of modalHeader)
  const bidByContainer = document.createElement("div");
  bidByContainer.className =
    "d-flex align-items-center justify-content-center small mt-0";

  // create text about bidder (child of bidByContainer)
  const bidTextContainer = document.createElement("small");
  bidTextContainer.className = "text-muted fw-light d-block";

  // create bidder by text (child of bidTextContainer)
  const by = document.createElement("span");
  by.innerText = "By ";

  // create bidder name (child of bidTextContainer)
  const bidder = document.createElement("span");
  bidder.className = "fw-semibold";

  if (_count.bids === 0) {
    bidTextContainer.classList.add("d-none");
  }
  if (_count.bids === 1) {
    bidder.innerText = `${firstBid.bidderName} `;
  }
  if (_count.bids > 1) {
    bidder.innerText = `${lastBid.bidderName} `;
  }

  // create bidder time text (child of bidTextContainer)
  const time = document.createElement("span");
  time.innerHTML = `at ${bidTime(lastBid.created)}`;

  // create modal body (child of modalContent)
  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";

  // create bidTable (child of modalBody)
  const bidTable = document.createElement("table");
  bidTable.className = "table table-borderless";

  // create table head (child of bidTable)
  const tableHead = document.createElement("thead");

  // Create table head row (child of tableHead);
  const tableHeadRow = document.createElement("tr");

  // Create table head titles (child of tableHeadRow)
  const tableHeadTime = document.createElement("th");
  tableHeadTime.setAttribute("scope", "col");
  tableHeadTime.innerText = "Time";

  const tableHeadBidder = document.createElement("th");
  tableHeadBidder.setAttribute("scope", "col");
  tableHeadBidder.setAttribute("colspan", "4");
  tableHeadBidder.innerText = "Bidder";

  const tableHeadBid = document.createElement("th");
  tableHeadBid.setAttribute("scope", "col");
  tableHeadBid.className = "text-end";
  tableHeadBid.innerText = "Bid";

  // Create table body (child of bidTable)
  const tableBody = document.createElement("tbody");

  for (let i = 0; i < bids.length; i++) {
    tableBody.innerHTML += `<tr>
    <td>${bidTime(bids[i].created)}</td>
    <td colspan="4">${bids[i].bidderName}</td>
    <td class="text-end"><span class="bg-light py-1 px-2">$${
      bids[i].amount
    }</span></td>
    </tr>`;
  }

  // create modal footer (child of modalContent)
  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer justify-content-center";

  // End time for bid (child of modalFooter)
  const footerEndTime = document.createElement("p");
  footerEndTime.className = "text-danger fs-6";
  footerEndTime.innerText = `Bid ends ${endTime(endsAt)}`;

  // Close button for modal (child of modalFooter)
  const footerClose = document.createElement("button");
  footerClose.className = "btn btn-secondary w-100 text-uppercase";
  footerClose.setAttribute("type", "button");
  footerClose.setAttribute("data-bs-dismiss", "modal");
  footerClose.innerText = "close";

  // appending carousel
  // indicatorsContainer.append();
  // carouselInner.append(carouselImages);
  btnPrev.append(iconPrev, textPrev);
  btnNext.append(iconNext, textNext);
  carousel.append(carouselInner, btnPrev, btnNext, indicatorsContainer);
  carouselContainer.appendChild(carousel);

  // Appending information
  // modal //
  modalFooter.append(footerEndTime, footerClose);

  tableHeadRow.append(tableHeadTime, tableHeadBidder, tableHeadBid);
  tableHead.appendChild(tableHeadRow);
  bidTable.append(tableHead, tableBody);
  modalBody.appendChild(bidTable);

  bidTextContainer.append(by, bidder, time);
  bidByContainer.appendChild(bidTextContainer);
  modalCurrentBidContainer.append(modalCurrentBidTitle, modalCurrentBid);
  modalHeader.append(
    modalTitle,
    btnModalClose,
    modalCurrentBidContainer,
    bidByContainer
  );
  modalContent.append(modalHeader, modalBody, modalFooter);
  modalDialog.appendChild(modalContent);
  bidHistoryModal.appendChild(modalDialog);

  bidForm.append(bidFormInput, bidFormLabel, btnBidForm);
  currentBidContainer.append(currentBidTitle, currentBid);
  bidContainer.appendChild(currentBidContainer);
  infoContainer.append(
    descriptionContainer,
    bidContainer,
    bidForm,
    btnBidHistory,
    bidHistoryModal
  );
  // appending main
  mainDiv.append(h1, carouselContainer, infoContainer);

  return mainDiv;
}

export function renderViewListingTemplate(listingData, parent) {
  parent.append(viewListingTemplate(listingData));
}
