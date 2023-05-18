import { api_Profiles } from "../../tools/constants.mjs";
import { methodPut as method } from "../../tools/constants.mjs";
import { fetchToken } from "../../tools/fetchToken.mjs";

export async function updateAvatar(avatarData) {
  const body = JSON.stringify(avatarData);
  const avatarUrl = `${api_Profiles}/${avatarData.name}/media`;

  try {
    const response = await fetchToken(avatarUrl, {
      method,
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
