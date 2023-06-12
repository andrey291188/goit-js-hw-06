
const formLoginElement = document.querySelector(".login-form")

formLoginElement.addEventListener("submit", formSubmit)

function formSubmit (event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value.length || !password.value.length) {
    alert("Треба заповнити усі поля")
  } else {
   const data = {
    userEmail: email.value,
    userPassword: password.value,
   }
    console.log(data)
    formLoginElement.reset()
  }
}
