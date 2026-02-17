const bsnField = document.querySelectorAll(".bsn") 
const textFields = document.querySelectorAll(".text_only")
const verkrijger = document.getElementById("verkrijger")
const addVerkrijger = document.querySelector("#verkrijger button")
let number = 2; 
const date = new Date().toISOString().slice(0, 10)
const overlijdensdatum = document.getElementById("overlijdensdatum")

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
    legend.textContent = `verkrijger ${number}`
    number++;

    newFieldset.appendChild(legend)

    const label = document.createElement('label');
    label.setAttribute('for', 'input');
    label.innerText = 'Name';

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.id = 'input'
    input.required = true;
    input.classList.add("text_only")

    const radio1 = document.createElement('input');
    radio1.setAttribute('value', 'Ja');  
    radio1.setAttribute('type', 'radio');

    const radio2 = document.createElement('input');
    radio2.setAttribute('value', 'Nee');
    radio2.setAttribute('type', 'radio');

    newFieldset.appendChild(label)
    newFieldset.appendChild(input) 
    newFieldset.appendChild(radio1) 
    newFieldset.appendChild(radio2) 

    verkrijger.appendChild(newFieldset)
}   

addVerkrijger.addEventListener("click", () => {
    createNewVerkrijger()
})

//Load date
function loadDate() {
    overlijdensdatum.setAttribute("max", date)
}

loadDate();