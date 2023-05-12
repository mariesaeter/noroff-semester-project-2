import * as display from "./display/index.mjs";
import * as listeners from "./forms/index.mjs";
import { isLoggedIn } from "./tools/isLoggedIn.mjs";

export default function router() {
  const path = location.pathname;
  isLoggedIn();

  switch (path) {
    case "/src/":
      display.displayListings();

      break;
    case "/src/register/":
      listeners.setRegisterFormListener();
      break;
    case "/src/login/":
      listeners.setLoginFormListener();
      break;
    case "/src/profile/":
      display.displayProfile();
      listeners.setUpdateAvatarListener();
      break;
  }
}
