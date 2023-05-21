import { api_Listings } from "../../tools/constants.mjs";
import { methodPost as method } from "../../tools/constants.mjs";
import { fetchToken } from "../../tools/fetchToken.mjs";
import { notAccessButton } from "../../tools/notLoggedIn.mjs";
import { reloadCurrentPage } from "../../tools/pageLoaders.mjs";

/**
 * Sends a POST request to bid on a listing
 * @param {string} id | id of listing that is bid on
 * @param {object} bidAmount | the amount that is bid as an object  {"amount": 0}. The amount must be converted to a number
 * @returns bid, success or error
 */
export async function createBid(id, bidAmount) {
  const body = JSON.stringify(bidAmount);
  try {
    const response = await fetchToken(`${api_Listings}/${id}/bids`, {
      method,
      body,
    });

    notAccessButton();

    if (!response.ok && notAccessButton() === false) {
      const error = await response.json();
      const feedbackContainer = document.getElementById("invalid-bid");
      feedbackContainer.innerText = `${error.errors[0].message}`;
    }

    if (response.ok && notAccessButton() === false) {
      const success = document.getElementById("valid-bid");
      success.innerText = "Your bid came through!";
      reloadCurrentPage();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
