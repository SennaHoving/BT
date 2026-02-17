const getrouwd = document.querySelectorAll("input[name=getrouwd]") 

document.addEventListener("change", function(e) {
    if(e.target.matches("input[name=getrouwd]")) {  
        console.log(e.target.value)
    }
})
