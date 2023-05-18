/**
 * Checks for valility in forms. Adds class "was-validated" if the required form inputs meet their requirements
 */
export function formValidation() {
  const forms = document.querySelectorAll(".formNeedsValidation");
  forms.forEach((form) => {
    form.addEventListener(
      "submit",
      (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
}
