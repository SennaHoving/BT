const form = document.querySelector("form")

const bsnField = document.querySelectorAll(".bsn") 
const textFields = document.querySelectorAll(".text_only")
const verkrijger = document.getElementById("verkrijger")
const addVerkrijger = document.querySelector("#verkrijger button")
let number = 2; 
const date = new Date().toISOString().slice(0, 10)
const overlijdensdatum = document.getElementById("overlijdensdatum")

//Prevent characters
//Number fields
form.addEventListener("keydown", (event) => {
    if(event.target.classList.contains("bsn"))
        if(isNaN(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
})

//Text fields
form.addEventListener("input", (event) => {
    if(event.target.classList.contains("text_only"))
        event.target.value = event.target.value.replace(/[^\p{L}]/gu, "");
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
    labelRadio1.setAttribute('for', 'radio1');
    labelRadio1.innerText = 'Nee'; 

    const radio1 = document.createElement('input');
    radio1.setAttribute('value', 'Ja');  
    radio1.setAttribute('type', 'radio');
    radio1.id = 'radio1'

    const labelRadio2 = document.createElement('label')
    labelRadio2.setAttribute('for', 'radio2');
    labelRadio2.innerText = 'Ja'; 

    const radio2 = document.createElement('input');
    radio2.setAttribute('value', 'Ja');  
    radio2.setAttribute('type', 'radio');
    radio2.id = 'radio2'


    // Vraag 2 
    const fieldSetV2 = document.createElement("fieldset") 
    const legendV2 = document.createElement('legend') 
    legendV2.textContent = "Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?"
    fieldSetV2.appendChild(legendV2)

    const labelRadio3 = document.createElement('label')
    labelRadio3.setAttribute('for', 'radio3');
    labelRadio3.innerText = 'Nee'; 

    const radio3 = document.createElement('input');
    radio3.setAttribute('value', 'Ja');  
    radio3.setAttribute('type', 'radio');
    radio3.id = 'radio3'

    const labelRadio4 = document.createElement('label')
    labelRadio4.setAttribute('for', 'radio4 ');
    labelRadio4.innerText = 'Ja'; 

    const radio4 = document.createElement('input');
    radio4.setAttribute('value', 'Ja');  
    radio4.setAttribute('type', 'radio');
    radio4.id = 'radio4'

    newFieldset.appendChild(labelBsn)
    newFieldset.appendChild(inputBsn) 

    newFieldset.appendChild(labelVoornaam)
    newFieldset.appendChild(inputVoornaam) 

    newFieldset.appendChild(labelTussennaam)
    newFieldset.appendChild(inputTussennaam)

    newFieldset.appendChild(labelAchternaam)
    newFieldset.appendChild(inputAchternaam) 

    fieldSetV1.appendChild(labelRadio1)
    fieldSetV1.appendChild(radio1) 
    fieldSetV1.appendChild(labelRadio2)
    fieldSetV1.appendChild(radio2) 

    fieldSetV2.appendChild(labelRadio3)
    fieldSetV2.appendChild(radio3) 
    fieldSetV2.appendChild(labelRadio4)
    fieldSetV2.appendChild(radio4) 

    newFieldset.appendChild(fieldSetV1)
    newFieldset.appendChild(fieldSetV2)

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