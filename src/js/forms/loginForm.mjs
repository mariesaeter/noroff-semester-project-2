import { loginUser } from "../api/login.mjs";

/**
 * Gatheres information from register form and calls function to try to register user
 */
export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());

    loginUser(user);
  });
}
