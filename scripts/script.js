const testament = document.getElementById("testament")
const testamentAanwezig = document.getElementById("testament_aanwezig")
const testamentHidden = document.getElementById("testament_hidden")

testament.addEventListener("click", () => {
    if(testamentAanwezig.checked) {
        testamentHidden.classList.remove("hidden")
    } else if (testamentAanwezig.checked == false) {
        testamentHidden.classList.add("hidden")
    }
})



//3 of meer radio buttons
// const testamentInput = document.getElementsByName("testament")
// const divTestament = document.querySelector("form div:nth-of-type(2)")

// testament.addEventListener("click", () => {
//     for (i = 0; i < testamentInput.length; i++) {
//         if (testamentInput[i].checked) {
//             divTestament.classList.toggle("hidden")
//         }
//     }
// })
