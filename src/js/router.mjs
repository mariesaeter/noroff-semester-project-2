import * as listeners from "./forms/setRegisterForm.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/src/register/":
      listeners.setRegisterFormListener();
      break;
  }
}
