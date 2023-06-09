import { api_Register } from "../tools/constants.mjs";
import { methodPost as method } from "../tools/constants.mjs";

/**
 * POST request that registeres an account if the user has an accepted email (@noroff.no or @stud.noroff.no)
 * @param {Object} user | Data from form input gathered in "../forms/setRegisterForm.mjs"
 * @returns json
 */
export async function registerUser(user) {
  const body = JSON.stringify(user);

  try {
    const response = await fetch(api_Register, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const json = await response.json();

    if (response.ok) {
      const success = document.getElementById("valid-register");
      success.innerText = "Your account was registered successfully!";
    }

    return json;
  } catch (error) {
    console.log(error);
  }
}
