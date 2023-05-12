import { loadLocal } from "../storage/index.mjs";

/**
 * Changes navigation display regarding if the user is logged in or not
 */
export async function isLoggedIn() {
  const navProfile = document.querySelectorAll(".nav-profile");
  const navRegister = document.getElementById("registerAndSignIn");

  try {
    const profile = loadLocal("userProfile");

    if (profile) {
      const navDisplayName = document.querySelectorAll(".nav-profile-name");
      const navDisplayCredits = document.querySelector(".nav-profile-credits");
      const profile = loadLocal("userProfile");

      navDisplayName.forEach((display) => (display.innerText = profile.name));
      navDisplayCredits.innerText = `$${profile.credits}`;
      navProfile.forEach((display) => display.classList.remove("d-none"));
      navRegister.classList.add("d-none");
    }
    if (!profile) {
      navProfile.forEach((display) => display.classList.add("d-none"));
      navRegister.classList.add("d-flex");
      navRegister.classList.remove("d-none");
    }
  } catch (error) {
    console.log(error);
  }
}
