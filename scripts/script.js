const inputs = document.querySelectorAll("input"); 

const template = document.getElementById("verkrijger_template");
const container = document.getElementById("verkrijger"); 
let number = 1;  

const verkrijger = document.getElementById("verkrijger");
const addVerkrijger = document.querySelector("#verkrijger button");

const date = new Date().toISOString().slice(0, 10);
const overlijdensdatum = document.getElementById("overlijdensdatum");


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

//Template
function loadVerkrijgers() {
    const clone = template.content.cloneNode(true); 
    clone.querySelector("summary").textContent = `verkrijger ${number}`

    const remove = clone.querySelector("button")
    remove.addEventListener("click", () => {
        remove.closest("fieldset").remove();
    })

    container.appendChild(clone); 
    number++; 
}

loadVerkrijgers(); 

addVerkrijger.addEventListener("click", () => {
    loadVerkrijgers();
})

//Load date today
function loadDate() {
    overlijdensdatum.setAttribute("max", date)
}

loadDate();

const resetButton = document.getElementById("local"); 
resetButton.addEventListener("click", () => {
    localStorage.clear();
})