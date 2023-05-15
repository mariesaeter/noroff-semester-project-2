import { loadLocal } from "../storage/index.mjs";
import { notAccessReroute } from "./notLoggedIn.mjs";

/**
 * Changes navigation display regarding if the user is logged in or not
 */
export async function isLoggedIn() {
  const navProfile = document.querySelectorAll(".nav-profile");
  const navRegister = document.getElementById("registerAndSignIn");
  const body = document.querySelector("body");

  try {
    const profile = loadLocal("userProfile");

    if (profile) {
      body.classList.remove("notLoggedIn");
      const navDisplayName = document.querySelectorAll(".nav-profile-name");
      const navDisplayCredits = document.querySelector(".nav-profile-credits");

      navDisplayName.forEach((display) => (display.innerText = profile.name));
      navDisplayCredits.innerText = `$${profile.credits}`;
      navProfile.forEach((display) => display.classList.remove("d-none"));
      navRegister.classList.add("d-none");

      // add attribute link to profile link in navigation
      notAccessReroute("#link-profile-page", `/profile/?name=${profile.name}`);
      notAccessReroute("#link-listing-create", "/listing/create/");
    }
    if (!profile) {
      body.classList.add("notLoggedIn");
      navProfile.forEach((display) => display.classList.add("d-none"));
      navRegister.classList.add("d-flex");
      navRegister.classList.remove("d-none");
    }
  } catch (error) {
    console.log(error);
  }
}
