const radioButtons = document.querySelectorAll("input[type=radio]"); 

document.addEventListener("change", function(e) {
    if (e.target.matches('input[type="radio"]')) {
        console.log(e.target.value)
        //if target.value == Ja 
        //dan remove class van de target.dataset.target
    }
})
