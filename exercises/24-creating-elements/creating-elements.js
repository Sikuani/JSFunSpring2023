const userForm = document.querySelector(".userForm")
const inputQuestion = document.querySelector("#inputQuestion")
const selectOptions = document.querySelector("#selectOptions")

const buttonRequestGreen = document.querySelector("#buttonRequestGreen")

//const textAnswer = document.querySelector("#textAnswer")

userForm.addEventListener("submit", (e) => {
  e.preventDefault()
  textAnswer.innerHTML = `In few minutes, the <b>${selectOptions.value}</b> will be with you to answer your question <b>${inputQuestion.value}</b>`
})



