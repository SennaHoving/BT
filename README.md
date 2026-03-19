# Browser Tech
## Week 1
### ma 16/02
vandaag opdarcht bt gekregen, begonnen met het bedenken / maken van alleen de html van de eerste sectie, en vervolgens gekeken naar het showen en hiden van de nodige stappen, en daarbij ook dat het wat algemener werkt zodat ik niet overal specifieke classes en id's voor hoef te maken. En super kort gekeken naar hoe ik de datum picker met java vandaag kan zetten. 

ochtend kickoff en de html schrijven, en verder de rest van de middag gewerkt aan het laten zien van de vragen op basis van de vorige vraag. 

Ik heb vandaag vooral geleerd over forms, en de elementen daaronder dus: fieldset, legenda, inputs. En ook over forEach loop in javascript. 

Morgen kijken naar de tweede sectie die ik wil maken. 


### di 17/02
Checkout met Michel 
Vandaag heb ik een controle op de text fields gemaakt, dus voor bsn kan de gebruiker alleenmaar int invoeren, en voor de textfields zijn alleen letters mogelijk. En vervolgens aan de tweede sectie begonnen, waarbij ik met een add button elementen in javascript bij aan heb gemaakt. 

In de ochtend vooral bezig geweest met de input fields, de rest van de middag bezig met het aanmaken en plaatsen van elementen in java

Vandaag geleerd over alle dingen die eigenlijk bij input fields komen kijken, en dat het type daar ook (vooral bij mobiel) voor uitmaakt. En dat elementen creeëren in java op twee manieren kan. 

Volgende week wil ik verder met een functie die de verkrijgers die ik nu aanmaak ook weer kan verwijderen, en nog kijken naar de ns styling van de pagina. 

## Week 2
### ma 02/03 
Vooral gewerkt aan de styling van de page, de input velden gingen vrij makkelijk met has, de radio buttons waren lastiger. 

In de ochtend vooral gekeken naar de algemene styling van de page, vervolgens bezig geweest met de radio buttons

vandaag geleerd over hoeveel makkelijke het met has eigenlijk allemaal is, hoe veel algemenere css je er me kan schrijven

morgen wil ik verder met styling, en kijken naar local storage. 

### di 03/03 
Checkout met Lisa
vandaag weekly geek, en gewerkt aan local storage. de local storage voor de text velden waren vrij simpel, de radio button waren wat lastiger

In de ochtend weekly geek, en workshop over validatie in javascript. De middag gewerkt aan local storage, en aan het einde nog aan het kijken naar validatie in html. 

Bij de workshop geleerd over validatie in javascript, user-invalid en aria live. En de local storage begrijp ik nu beter. '

Volgende week denk vooral nog styling afronden en validatie in html en css vervijnen. 


### Feedback 06/03
Voor deze week zijn wij tijdens het feedback gesprek door mijn huidige voorgang gelopen. En het belangrijkste hieruit weg te halen is dat ik vooral de focus (in ieder geval volgende week) nog moet leggen op de styling, en goed moet kijken of de site ook nog zal werken mocht de javascript weg vallen. Voor verder punten om tijdens het project nog over na te denken: 
- Kijken naar templating voor het genereren van de html elementen in javascript, werkt nu maar niet heel leesbaar. 
- Via javascript het attribute hidden toevoegen zodat niet hidden is als de javascript weg valt.
- Patterns zoals ik ze nu heb werken niet echt, je wilt ze eerder inzetten voor bijvoorbeeld het pattroon in voorletters. Niet velden zoals voornaam, omdat wat als de gebruiker zijn naam niet in kan vullen. 
- CSS reset is best oud en misschien onnogdig. Mag ik wel gebruiken maar moet het wel kunnen uitleggen. 
- Met css ::valid en user-valid kan alles van formulieren / fields stylen, heel veel verder gaat css niet qua validatie
- Het is een goed idee om dingen alleen op te slaan in localstorage als die valid zijn. 
- Kan nog kijken naar printsheet, met apparte styling file en vervolgende een @media web view only and print only.
- bsn 11 proof maken
- Inplementeren extra / additionele informatie

## Week 3
### ma 09/03
Vandaag heb ik met Rijk van Zanten gesproken en die heeft wel en goed inzicht gegeven op de opdracht. Het kwam naar voren dat je moest denken aan het probleem, niet de oplossing. Wie zit er achter de computer, hoe vult iemand zo'n formulier in. En Daarmee kwam ook de progressive display naar boven, wat er nu voor zorgt dat het formulier er veel korter uitziet dan wat die daadwerkelijk kan zijn. Hierdoor heb ik er toch voor gekozen om de huidige progressive disclosure weg te halen, en dat te veranderen naar een soort 'vergrijzing' van de velden die de gebruiker kan overslaan bij een keuze. 

In de ochtend de presentatie van Rijk. Vervolgens verder gewerkt aan de styling, daarbij styling guide van de NS opgezocht en die geimplementeerd. 

Geleerd over de complexheid maar ook handigheid van zo'n uitgebreide styling guide van bijvoorbeeld de NS. En dat het goed is om na te denken over de problemen van de gebruiker en niet meteen de oplossingen. 

Morgen verder met de styling van de pagina, en kijken naar het vergrijzen van de onnodige velden. 

### di 10/03 
met zonder java heb je nu niks dat wegvalt, alleen de opacity verandert, en als je wel javascript is er wel progressive disclosure. gewerkt aan de templating javascript voor het toevoegen en verwijderen van de verkrijgers. verder met de styling aan de slag gegaan, en styling / validation binnen css 

begonnen weekly geek, vervolgens de templating uitgezocht tot een uur of 2, daarna gekeken naar validation fields css.

geleerd over template element, en user-valid en invalid beter

volgende keer validate afronden, dat die ook werkt met screen reader. En dan styling afronden eerste sectie. 

### Feedback 13/03 
Tijdens dit feedback gesprek weer gekeken naar mijn voortgang, waarbij nog een paar aspecten ontbraken. Ten eerste was de styling nog niet helemaal goed, en dat zat vooral in de consistency ervan en het onderscheid tussen de secties. Dus bij sommige delen was de witruimte anders dan andere elementen, en sommige headers zien er niet hetzelfde uit. En kon er ook meer onderscheid tussen de onderdelen die wel en niet bij elkaar horen, door bijvoorbeeld ook de witruimtes, elementen meer bij elkaar te zetten, niet dikgedrukte fonts bij bv de radio buttons. 

Verder is het ook nog een goed idee om te kijken naar de accessibility, dus screenreaders en aria describe. En de validatie bij de invoer velden nog custom maken. 


## Week 4
### Di 17/03
Vandaag ben ik nog bezig geweest met het goed maken van de progressive disclosure, dus nu werkt het op alle opties, ook de later, en als je dus ergens nee invult en daar kan, wordt is de resterende sectie niet meer in te vullen. Ook heb ik vandaag nog gekeken naar de custom errors en daarbij ook de aria describe. 

In de ochtend bezig geweest met de progressice disclosure, en vervolgens de custom errors. 

Geleerd over hoe de screenreaders in html werkt. 


## Bronnen
https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
https://www.geeksforgeeks.org/javascript/how-to-get-value-of-selected-radio-button-using-javascript/
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
https://www.reddit.com/r/learnjavascript/comments/urjrvl/can_you_create_custom_html_elements_and_append/
https://blog.logrocket.com/localstorage-javascript-complete-guide/
https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

<!-- templating -->
https://www.youtube.com/watch?v=ri-A1ivC4jY
https://developer.mozilla.org/en-US/docs/Web/API/Element/closest