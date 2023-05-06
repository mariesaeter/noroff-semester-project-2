import * as listeners from "./forms/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/src/register/":
      listeners.setRegisterFormListener();
      break;
    case "/src/login/":
      listeners.setLoginFormListener();
      break;
  }
}
