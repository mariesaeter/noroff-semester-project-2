import { api_Listings } from "../../tools/constants.mjs";
import { methodPost as method } from "../../tools/constants.mjs";
import { fetchToken } from "../../tools/fetchToken.mjs";

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

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
