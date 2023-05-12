import { saveLocal } from "../storage/index.mjs";
import { methodPost as method } from "../tools/constants.mjs";
import { api_Login } from "../tools/constants.mjs";
import { redirect } from "../tools/pageLoaders.mjs";
// import { saveLocal } from "../storage/index.mjs";

export async function loginUser(user) {
  const body = JSON.stringify(user);

  try {
    const response = await fetch(api_Login, {
      method,
      headers: {
        "content-Type": "application/json",
      },
      body,
    });

    if (response.ok) {
      const { accessToken, ...userProfile } = await response.json();

      saveLocal("accessToken", accessToken);
      saveLocal("userProfile", userProfile);

      redirect("/");
    } else {
      alert("Wrong email and/or password, please try again");
    }
  } catch (error) {
    console.log(error);
  }
}
