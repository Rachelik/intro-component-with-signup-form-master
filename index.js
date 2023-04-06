var form = document.getElementById("login");
login.addEventListener("submit", function (e) {
  var valid = true;
  var inputs = login.querySelectorAll("input");
  [].forEach.call(inputs, function (input) {
    if (input.value === "") {
      valid = false;
      input.classList.add("error");
      input.nextElementSibling.classList.add("input-err-invisible");
      input.nextElementSibling.innerHTML = input.placeholder + " cannot be empty";
    }
    else {
      if (input.type == "email") {
        if (!input.validity.valid) {
          valid = false;
          input.nextElementSibling.classList.add("input-err-invisible");
          input.nextElementSibling.innerHTML = "Looks like this is not an email";
        }
        else {
          input.classList.remove("error");
          input.nextElementSibling.classList.remove("input-err-invisible");
        }
      }
      else {
        input.classList.remove("error");
        input.nextElementSibling.classList.remove("input-err-invisible");
      }
    }
  });

  if (!valid) {
    e.preventDefault();
  }
});