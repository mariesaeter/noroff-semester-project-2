export function listingTemplate(listingData) {
  // End result
  // <div class="col">
  //           <div
  //             class="card my-2 border bg-transparent p-1 d-inline-flex w-100 flex-row"
  //           >
  //             <div class="bg-light rounded-start">
  //               <div class="card-img" style="width: 125px">Image</div>
  //             </div>
  //             <div class="card-body w-100">
  //               <h5 class="card-title">Card title</h5>
  //               <p class="card-text">
  //                 <span class="text-muted">bid: </span
  //                 ><span id="current-bid" class="text-secondary fw-bold"
  //                   >$7.43</span
  //                 ><small id="bid-hours" class="text-danger ms-1"
  //                   >(2 hours left)</small
  //                 >
  //               </p>
  //               <a
  //                 href="/src/listing/index.html"
  //                 class="btn btn-secondary w-100 text-uppercase"
  //                 >see listing</a
  //               >
  //             </div>
  //           </div>
  //         </div>

  const { id, title, media, bids, _count } = listingData;

  //   const lastBid = bids[bids.length - 1];
  const { 0: firstBid, length, [length - 1]: lastBid } = bids;

  // create mainDiv for one listing
  const mainDiv = document.createElement("div");

  // create card div (child of mainDiv)
  const cardDiv = document.createElement("div");
  cardDiv.className =
    "card my-2 border bg-transparent p-1 d-inline-flex w-100 flex-row";

  // Create img div (child of cardDiv)
  const imgDiv = document.createElement("div");
  imgDiv.className =
    "bg-light rounded-start d-flex align-items-center card-img-container";

  // create card img (child of imgDiv)
  const cardImg = document.createElement("img");
  cardImg.className = "card-img ";
  cardImg.src = media[0];

  // create card body (child of cardDiv)
  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body w-100";

  // create card title (child of cardBodyDiv)
  const cardTitleContainer = document.createElement("h5");
  cardTitleContainer.className = "card-title";

  const cardTitle = document.createTextNode(title);
  cardTitleContainer.appendChild(cardTitle);

  // create card text (child of cardBodyDiv)
  const cardTextContainer = document.createElement("p");
  cardTextContainer.className = "card-text";

  // (child of cardTextContainer)
  const cardTextBid = document.createElement("span");
  cardTextBid.className = "text-muted";
  cardTextBid.innerText = `bid: `;

  // (child of cardTextContainer)
  const cardTextNewestBid = document.createElement("span");
  cardTextNewestBid.className = "text-secondary fw-bold";

  if (_count.bids === 0) {
    cardTextNewestBid.innerText = "no bids";
  }
  if (_count.bids === 1) {
    cardTextNewestBid.innerText = `$${firstBid.amount}`;
  }
  if (_count.bids > 1) {
    cardTextNewestBid.innerText = `$${lastBid.amount}`;
  }

  // create time left container and spans (child of cardTextContainer)
  const timeLeftContainer = document.createElement("small");
  timeLeftContainer.className = "text-danger ms-2 timeLeft";
  timeLeftContainer.setAttribute("id", `timeLeft${id}`);
  const spanDays = document.createElement("span");
  spanDays.className = "days";
  const spanD = document.createElement("span");
  spanD.innerText = " d ";
  const spanHours = document.createElement("span");
  spanHours.className = "hours";
  const spanH = document.createElement("span");
  spanH.innerText = " h ";
  const spanMinutes = document.createElement("span");
  spanMinutes.className = "minutes";
  const spanM = document.createElement("span");
  spanM.innerText = " m left";

  timeLeftContainer.append(
    spanDays,
    spanD,
    spanHours,
    spanH,
    spanMinutes,
    spanM
  );

  // create button to see listing (child of cardBodyDiv)
  const btnListing = document.createElement("button");
  btnListing.className = "btn btn-secondary w-100 text-uppercase";
  const btnListingText = document.createTextNode("see listing");
  btnListing.appendChild(btnListingText);

  // action to change page location (child of cardBodyDiv)
  btnListing.addEventListener("click", () => {
    window.location = `/listing/?id=${id}`;
  });

  // Appending elemnts to parent elements
  cardTextContainer.append(cardTextBid, cardTextNewestBid, timeLeftContainer);
  imgDiv.appendChild(cardImg);
  cardBodyDiv.append(cardTitleContainer, cardTextContainer, btnListing);
  cardDiv.append(imgDiv, cardBodyDiv);
  mainDiv.appendChild(cardDiv);

  return mainDiv;
}

/**
 * Render template for a singular post and appends to html container
 * @param {Object} postData - post data from api
 * @param {Object} parent - html container
 */
export function renderListingTemplate(listingData, parent) {
  parent.append(listingTemplate(listingData));
}
// export function renderListingTemplates(listingData, parent) {
//   listingData.every((listingData, index) => {
//     if (index > 30) {
//       return false;
//     }
//     parent.append(listingTemplate(listingData));
//     return true;
//   });
// }

// export function renderListingTemplates(listingData, loadMoreBtn, parent) {
//   for (let i = 0; i < listingData.length; i++) {}
// const listings = listingData.length;
// const listingsIncreaseBy = 20;
// const pageCount = Math.ceil(listings / listingsIncreaseBy);
// let currentPage = 1;

// const btnStatus = () => {
//   if (pageCount === currentPage) {
//     loadMoreBtn.classList.add("disabled");
//     loadMoreBtn.setAttribute("disabled", true);
//   }
// };

// const addListings = (pageIndex) => {
//   currentPage = pageIndex;
//   btnStatus();
// };

// // const startRange = (pageIndex - 1) * listingsIncreaseBy;
// // const endRange = pageIndex * listingsIncreaseBy > listings ? listings : pageIndex * listingsIncreaseBy;

// // for (let i = startRange + 1; i <= endRange; i++) {
// //   addListings(i);
// // }
// window.onload = function () {
//   addListings(currentPage);
//   loadMoreBtn.addEventListener("click", () => {
//     addListings(currentPage + 1);
//   });
// };
// listingData.forEach((listingData) => {
//   parent.append(listingTemplate(listingData));
// }

export function renderAllListingsTemplate(listingData, parent) {
  parent.innerHTML = "";
  listingData.forEach((listingData) => {
    parent.append(listingTemplate(listingData));
  });
}
