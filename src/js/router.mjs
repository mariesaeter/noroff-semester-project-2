import * as display from "./display/index.mjs";
import * as listeners from "./forms/index.mjs";
import { isLoggedIn } from "./tools/isLoggedIn.mjs";

export default function router() {
  const path = location.pathname;
  isLoggedIn();

  switch (path) {
    case "/":
      display.displayListings();
      break;
    case "/register/":
      listeners.setRegisterFormListener();
      break;
    case "/login/":
      listeners.setLoginFormListener();
      break;
    case "/profile/":
      display.displayProfile();
      listeners.setUpdateAvatarListener();
      break;
    case "/listing/":
      listeners.setBidFormListener();

      break;
    case "/listing/create/":
      listeners.setCreateListingFormListener();
      break;
  }
}
