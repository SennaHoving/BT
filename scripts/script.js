const inputs = document.querySelectorAll("input"); 

const template = document.getElementById("verkrijger_template");
const container = document.getElementById("verkrijger"); 
let number = 1;  

const addVerkrijger = document.querySelector("#verkrijger button");
const verkrijgersContainer = document.getElementById("verkrijger");
let aantalVerkijgers = 1; 

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

//Dynamische verkrijgers 
addVerkrijger.addEventListener("click", () => {
    const nieuweVerkrijger = document.createElement("fieldset"); 
    nieuweVerkrijger.innerHTML = `
        <div></div>

        <legend id="${aantalVerkijgers}">Verkrijger ${aantalVerkijgers}</legend>
        <button id="remove-${aantalVerkijgers}" type="button">
            <img src="./assets/remove.svg" alt="remove"/>
        </button>

        <label for="bsn-${aantalVerkijgers}">
            Bsn overledene
            <input type="text" class="bsn" required id="bsn-${aantalVerkijgers}" inputmode="numeric" minlength="8" maxlength="9" pattern="[0-9]{9}" aria-describedby="bsnHelp"/>
            <p id="bsnHelp">Vul een geldig BSN-nummer in van 8 of 9 nummers</p>
        </label>

        <label for="voorletters-${aantalVerkijgers}">
            Voorletter (1 of meedere) 
            <input type="text" required id="voorletters-${aantalVerkijgers}" class="text_only" aria-describedby="voorletterHelp"/>
            <p id="voorletterHelp">Vul geldige voorletters in</p>
        </label>

        <label for="tussenvoegsels-${aantalVerkijgers}">
            Tussenvoegsel (één of meedereder)
            <input type="text" id="tussenvoegsels-${aantalVerkijgers}" class="text_only" aria-describedby="tussenvoegselsHelp"/>
            <p id="tussenvoegselsHelp">Vul geldige tussenvoegsels in</p>
        </label>

        <label for="achternaam-${aantalVerkijgers}">
            Achternaam
            <input type="text" required id="achternaam-${aantalVerkijgers}" class="text_only" aria-describedby="achternaamHelp"/> 
            <p id="achternaamHelp">Vul een geldige achternaam in</p>
        </label>

        <fieldset>
            <legend>Krijgt verkrijger ${aantalVerkijgers} waarvoor u geen aangifte doet het hele vermogen?</legend>
            <div>
                <label>
                    Nee
                    <input type="radio" value="Nee-${aantalVerkijgers}" name="vermogen-${aantalVerkijgers}"/> 
                </label>
                <label>
                    Ja
                    <input type="radio" value="Ja-${aantalVerkijgers}" name="vermogen-${aantalVerkijgers}"/> 
                </label>
            </div>
        </fieldset>

        <fieldset>
            <legend>Doet verkrijger ${aantalVerkijgers} een beroep op diens legitieme portie (wettelijke erfdeel)?</legend>
            <div>
                <label>
                    Nee
                    <input type="radio" value="Nee-${aantalVerkijgers}" name="portie-${aantalVerkijgers}"/>         
                </label>
                <label>
                    Ja
                    <input type="radio" value="Ja-${aantalVerkijgers}" name="portie-${aantalVerkijgers}"/>  
                </label>
            </div> 
        </fieldset>
    `;


    verkrijgersContainer.appendChild(nieuweVerkrijger);

    const removeBtn = nieuweVerkrijger.querySelector(`#remove-${aantalVerkijgers}`);
    removeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        nieuweVerkrijger.remove();  
    });

    aantalVerkijgers++; 
})

//Load date today
function loadDate() {
    overlijdensdatum.setAttribute("max", date)
}

loadDate();