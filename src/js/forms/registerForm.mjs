import { registerUser } from "../api/register.mjs";
import { formValidation } from "../tools/formValidation.mjs";

/**
 * Gatheres information from register form and calls function to try to register user
 */
export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  formValidation();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());

    registerUser(user);
  });
}
