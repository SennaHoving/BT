const form = document.querySelector("form")
const bsnField = document.querySelectorAll(".bsn") 
const textFields = document.querySelectorAll(".text_only")
const verkrijger = document.getElementById("verkrijger")
const addVerkrijger = document.querySelector("#verkrijger button")
let number = 1; 
const date = new Date().toISOString().slice(0, 10)
const overlijdensdatum = document.getElementById("overlijdensdatum")
const inputs = document.querySelectorAll("input"); 

const template = document.getElementById("verkrijger_template");
const container = document.getElementById("verkrijger"); 
const legend = document.querySelector("verkrijger_template > fieldset legend"); 



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

/* template */ 
function loadVerkrijgers() {
    const clone = template.content.cloneNode(true); 
    clone.querySelector("fieldset legend").textContent = `verkrijger ${number}`
    container.appendChild(clone); 
}

loadVerkrijgers(); 

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