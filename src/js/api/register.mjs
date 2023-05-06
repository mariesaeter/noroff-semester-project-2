import { api_Register } from "../tools/constants.mjs";
import { methodPost as method } from "../tools/constants.mjs";
import * as bootstrap from "/node_modules/bootstrap/dist/js/bootstrap.js";
window.bootstrap = bootstrap;

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
      const successModal = new bootstrap.Modal("#registerSuccessModal");
      successModal.show();
    }

    return json;
  } catch (error) {
    console.log(error);
  }
}
