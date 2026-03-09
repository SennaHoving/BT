const form = document.querySelector("form")
const bsnField = document.querySelectorAll(".bsn") 
const textFields = document.querySelectorAll(".text_only")
const verkrijger = document.getElementById("verkrijger")
const addVerkrijger = document.querySelector("#verkrijger button")
let number = 2; 
const date = new Date().toISOString().slice(0, 10)
const overlijdensdatum = document.getElementById("overlijdensdatum")
const inputs = document.querySelectorAll("input"); 



//Local storage
inputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (input.type === 'radio') {
            localStorage.setItem(input.name, input.value) 
        } else {
            localStorage.setItem(input.id, input.value) 
        }   
    })
    
    if (input.type === 'radio') {
        const ant = localStorage.getItem(input.name);
        if (ant === input.value) {
            input.checked = true; 
        }
    } else {
        const ant = localStorage.getItem(input.id);
        input.value = ant; 
    }
})

window.onload = () => {
    inputs.forEach((input) => {
        if (input.type === 'radio') {
            const targetId = document.getElementById(input.dataset.target)
            const radioValue = localStorage.getItem(input.name);

            if(input.value == radioValue) {
                if(radioValue === "Ja") {
                    targetId?.classList.remove("hidden")
                } else {
                    targetId?.classList.add("hidden")
                }
            }
        }
    })
}

//Prevent characters
//Number fields
// form.addEventListener("keydown", (event) => {
//     if(event.target.classList.contains("bsn"))
//         if(isNaN(event.key) && event.key !== 'Backspace') {
//             event.preventDefault();
//         }
// })

// //Text fields
// form.addEventListener("input", (event) => {
//     if(event.target.classList.contains("text_only"))
//         event.target.value = event.target.value.replace(/[^\p{L}]/gu, "");
// })

//Listener radio buttons 
document.addEventListener("change", function(e) {
    if (e.target.matches('input[type="radio"]')) {
        const targetId = document.getElementById(e.target.dataset.target)

        if(e.target.value == "Ja") {
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

    //Bsn
    const labelBsn = document.createElement('label');
    labelBsn.setAttribute('for', 'inputBsn');
    labelBsn.innerText = 'Bsn overledene';

    const inputBsn = document.createElement('input');
    inputBsn.setAttribute('type', 'text');
    inputBsn.id = 'inputBsn'
    inputBsn.required = true;
    inputBsn.classList.add("bsn")

    //Voorletter(s)
    const labelVoornaam = document.createElement('label');
    labelVoornaam.setAttribute('for', 'inputVoornaam');
    labelVoornaam.innerText = 'voorletter(s)';

    const inputVoornaam = document.createElement('input');
    inputVoornaam.setAttribute('type', 'text');
    inputVoornaam.id = 'inputVoornaam'
    inputVoornaam.required = true;
    inputVoornaam.classList.add("text_only")

    //Tussenletter(s)
    const labelTussennaam = document.createElement('label');
    labelTussennaam.setAttribute('for', 'inputTussennaam');
    labelTussennaam.innerText = 'tussenvoegsel(s)';

    const inputTussennaam = document.createElement('input');
    inputTussennaam.setAttribute('type', 'text');
    inputTussennaam.id = 'inputTussennaam'
    inputTussennaam.required = true;
    inputTussennaam.classList.add("text_only")

    //Achternaam
    const labelAchternaam = document.createElement('label');
    labelAchternaam.setAttribute('for', 'inputAchternaam');
    labelAchternaam.innerText = 'achternaam';

    const inputAchternaam = document.createElement('input');
    inputAchternaam.setAttribute('type', 'text');
    inputAchternaam.id = 'inputAchternaam'
    inputAchternaam.required = true;
    inputAchternaam.classList.add("text_only")

    //Vraag 1
    const fieldSetV1 = document.createElement("fieldset") 
    const legendV1 = document.createElement('legend') 
    legendV1.textContent = "Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?"
    fieldSetV1.appendChild(legendV1)

    const labelRadio1 = document.createElement('label')
    labelRadio1.innerText = 'Nee'; 

    const radio1 = document.createElement('input');
    radio1.setAttribute('value', 'Ja');  
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'vermogen');

    labelRadio1.prepend(radio1)

    const labelRadio2 = document.createElement('label')
    labelRadio2.innerText = 'Ja'; 

    const radio2 = document.createElement('input');
    radio2.setAttribute('value', 'Ja');  
    radio2.setAttribute('type', 'radio'); 
    radio2.setAttribute('name', 'vermogen');

    labelRadio2.prepend(radio2)

    // Vraag 2 
    const fieldSetV2 = document.createElement("fieldset") 
    const legendV2 = document.createElement('legend') 
    legendV2.textContent = "Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?"
    fieldSetV2.appendChild(legendV2)

    const labelRadio3 = document.createElement('label')
    labelRadio3.innerText = 'Nee'; 

    const radio3 = document.createElement('input');
    radio3.setAttribute('value', 'Ja');  
    radio3.setAttribute('type', 'radio');
    radio3.setAttribute('name', 'legitieme');

    labelRadio3.prepend(radio3)

    const labelRadio4 = document.createElement('label')
    labelRadio4.innerText = 'Ja'; 

    const radio4 = document.createElement('input');
    radio4.setAttribute('value', 'Ja');  
    radio4.setAttribute('type', 'radio'); 
    radio4.setAttribute('name', 'legitieme');
    
    labelRadio4.prepend(radio4)

    //Remove button
    const remove = document.createElement("button") 
    remove.setAttribute("type", "button") 
    remove.classList.add("remove")
    remove.innerText = "Verwijder"

    newFieldset.appendChild(labelBsn)
    newFieldset.appendChild(inputBsn) 

    newFieldset.appendChild(labelVoornaam)
    newFieldset.appendChild(inputVoornaam) 

    newFieldset.appendChild(labelTussennaam)
    newFieldset.appendChild(inputTussennaam)

    newFieldset.appendChild(labelAchternaam)
    newFieldset.appendChild(inputAchternaam) 

    fieldSetV1.appendChild(labelRadio1)
    fieldSetV1.appendChild(labelRadio2)

    fieldSetV2.appendChild(labelRadio3) 
    fieldSetV2.appendChild(labelRadio4)

    newFieldset.appendChild(fieldSetV1)
    newFieldset.appendChild(fieldSetV2)

    newFieldset.appendChild(remove)

    verkrijger.appendChild(newFieldset)
}   

addVerkrijger.addEventListener("click", () => {
    createNewVerkrijger()
})

form.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove"))
        e.target.closest("fieldset").remove();
})

//Load date
function loadDate() {
    overlijdensdatum.setAttribute("max", date)
}

loadDate();