import { readProfile } from "../api/read/profile.mjs";
import { updateAvatar } from "../api/update/avatar.mjs";
import { loadLocal, saveLocal } from "../storage/index.mjs";
import { reloadCurrentPage } from "../tools/pageLoaders.mjs";

export async function setUpdateAvatarListener() {
  const form = document.querySelector("#avatarForm");
  const url = new URL(location.href);

  try {
    if (form) {
      const name = url.searchParams.get("name");
      const { email, credits, avatar } = loadLocal("userProfile");

      form.avatar.value = avatar;
      const profile = await readProfile(name);
      // add existing values to form
      form.avatar.value = profile.avatar;

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const user = Object.fromEntries(formData.entries());
        user.name = name;
        user.email = email;
        user.credits = credits;

        updateAvatar(user);
        saveLocal("userProfile", user);
        reloadCurrentPage();
      });
    }
  } catch (error) {
    console.log(error);
  }
}
