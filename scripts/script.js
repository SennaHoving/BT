const testament = document.getElementById("testament")
const testamentInput = document.getElementsByName("testament")
const divTestament = document.querySelector("form > fieldset:nth-of-type(4) > div")

testament.addEventListener("click", () => {
    for (i = 0; i < testamentInput.length; i++) {
        if (testamentInput[i].checked) {
            divTestament.classList.toggle("hidden")
        }
    }
})