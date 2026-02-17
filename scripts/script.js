const bsnField = document.querySelectorAll(".bsn") 
const textFields = document.querySelectorAll(".text_only")
const verkrijger = document.getElementById("verkrijger")
const addVerkrijger = document.querySelector("#verkrijger button")

//Prevent characters
//Number fields
bsnField.forEach(field => {
    field.addEventListener("keydown", (event) => {
        if(isNaN(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    })
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

//Verkrijger field gen
function createNewVerkrijger() {
    const newFieldset = document.createElement("fieldset") 
    const legend = document.createElement('legend') 
    legend.textContent = "test"

    newFieldset.appendChild(legend)

    const input = document.createElement('input');
    input.setAttribute('name', 'input');
    input.setAttribute('type', 'text');

    newFieldset.appendChild(input) 
    verkrijger.appendChild(newFieldset)
}   

addVerkrijger.addEventListener("click", () => {
    createNewVerkrijger()
})
