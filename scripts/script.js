const bsnField = document.querySelector(".bsn") 
const textFields = document.querySelectorAll(".text_only")

//Prevent characters
//Number fields
bsnField.addEventListener("keydown", event => {
    if(isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
})

//Text fields
textFields.forEach(field => {
    field.addEventListener("input", () => {
        field.value = field.value.replace(/[^\p{L}]/gu, "");
    })
})

//Listener radio buttons 
document.addEventListener("change", function(e) {
    if (e.target.matches('input[type="radio"]')) {
        const targetId = document.getElementById(e.target.dataset.target)

        if(e.target.value == "Ja") {
            console.log(targetId)
            targetId.classList.remove("hidden")
            //maak het deel hierbij ook nog required? 
        } else {
            targetId.classList.add("hidden")
        }
    }
})


