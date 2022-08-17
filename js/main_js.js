let divs = document.querySelectorAll(".parent div:not(.parent div:nth-child(1))")
let output =  document.querySelector(".output")
let ac = document.querySelector(".clear")
let calc = ""
tempar = [];
divs.forEach(function(el){
    el.onclick = function(){
        this.style.backgroundColor = "white"
        setTimeout(() => {
            this.style.backgroundColor = "#ddd"
        }, 150);
        

        calc += !isNaN(+this.innerHTML - 5) ? this.innerHTML :
        this.innerHTML == "-" ? "-" :
        this.innerHTML == "/" ? "/" :
        this.innerHTML == "*" ? "*" :
        this.innerHTML == "." ? "." :
        this.innerHTML == "+" ? "+" : "";
        output.innerHTML = calc;
        
        this.innerHTML == "=" ? output.innerHTML += `<h3>${eval(calc)}<h3/>`:""
        if(this.innerHTML == "AC"){
            output.innerHTML = ""
            calc = ""
        } 
        if(this.innerHTML == "DEL"){
            tempar = calc.split("");
            tempar.pop();
            calc = tempar.join("");
        }

    }
})