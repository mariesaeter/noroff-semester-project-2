import { readProfile } from "../api/read/profile.mjs";
import { removeLocal } from "../storage/index.mjs";
import { redirect } from "../tools/pageLoaders.mjs";

export async function displayProfile() {
  const url = new URL(location.href);
  const userName = url.searchParams.get("name");

  const { name, email, credits, avatar } = await readProfile(userName);

  const profileName = document.getElementById("profile-name");
  profileName.innerText = name;

  const profileEmail = document.getElementById("profile-email");
  profileEmail.innerText = email;

  const profileCredits = document.getElementById("profile-credits");
  profileCredits.innerText = credits;

  const profileAvatar = document.getElementById("profile-avatar");

  if (avatar === "") {
    profileAvatar.setAttribute("src", "https://placehold.co/400");
  } else {
    profileAvatar.setAttribute("src", avatar);
  }

  const btnSignOut = document.getElementById("btn-sign-out");
  btnSignOut.addEventListener("click", () => {
    removeLocal("accessToken");
    removeLocal("userProfile");

    redirect("/login/");
  });
}
