let divs = document.querySelectorAll(".parent li:not(.parent li:nth-child(1))")
let output =  document.querySelector(".output")
let ac = document.querySelector(".clear")
let calc = ""

divs.forEach(function(el){
    el.onclick = function(){
        this.classList.add("blink")
        this.onanimationend = function(){
            this.classList.remove("blink")
        }
        

        tempar = []


        
        
        calc += !isNaN(+this.innerHTML - 5) ? this.innerHTML :
        this.innerHTML == "-" ? "-" :
        this.innerHTML == "/" ? "/" :
        this.innerHTML == "*" ? "*" :
        this.innerHTML == "." ? "." :
        this.innerHTML == "+" ? "+" : "";
        output.innerHTML = calc;
        
        if(this.innerHTML == "AC"){
        output.innerHTML = ""
            calc = ""
        }
        else if(this.innerHTML == "="){
            output.innerHTML += `<h3> ${parseFloat(eval(calc).toFixed(3))} <h3/>`
            }
            if(this.innerHTML == "DEL") {
                tempar = calc.split("");
                tempar.pop();
                calc = tempar.join("");
            }
    
    }
})