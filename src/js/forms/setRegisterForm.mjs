import { registerUser } from "../api/register.mjs";
import { formValidation } from "./index.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  formValidation();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());

    console.log(user);

    registerUser(user);
  });
}
