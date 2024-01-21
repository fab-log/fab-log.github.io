let operator = "0";
        
document.getElementById("1").onclick = function() {            
    if (operator === "0") {
        operator = "1";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*1`
    }
    else {operator = `${operator}1`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("2").onclick = function() {            
    if (operator === "0") {
        operator = "2";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*2`
    }
    else {operator = `${operator}2`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("3").onclick = function() {            
    if (operator === "0") {
        operator = "3";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*3`
    }
    else {operator = `${operator}3`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("4").onclick = function() {            
    if (operator === "0") {
        operator = "4";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*4`
    }
    else {operator = `${operator}4`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("5").onclick = function() {            
    if (operator === "0") {
        operator = "5";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*5`
    }
    else {operator = `${operator}5`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("6").onclick = function() {            
    if (operator === "0") {
        operator = "6";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*6`
    }
    else {operator = `${operator}6`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("7").onclick = function() {            
    if (operator === "0") {
        operator = "7";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*7`
    }
    else {operator = `${operator}7`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("8").onclick = function() {            
    if (operator === "0") {
        operator = "8";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*8`
    }
    else {operator = `${operator}8`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("9").onclick = function() {            
    if (operator === "0") {
        operator = "9";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*9`
    }
    else {operator = `${operator}9`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("0").onclick = function() {            
    if (operator === "0") {
        operator = "0";
    }
    else if (operator.at(-1) === ")") {
        operator = `${operator}*0`
    }
    else {operator = `${operator}0`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("+").onclick = function() {            
    if (operator === "0") {
        operator = "0";
    }
    else if (operator.at(-1) === "+" || operator.at(-1) === "-" || operator.at(-1) === "*" || operator.at(-1) === "/" || operator.at(-1) === "(" || operator.at(-1) === ".") {
        operator = operator;
    }
    else {operator = `${operator}+`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("-").onclick = function() {            
    if (operator === "0") {
        operator = "-";
    }
    else if (operator.at(-1) === "+" || operator.at(-1) === "-") {
        operator = operator;
    }            
    else {operator = `${operator}-`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("*").onclick = function() {            
    if (operator === "0") {
        operator = "0";
    }
    else if (operator.at(-1) === "+" || operator.at(-1) === "-" || operator.at(-1) === "*" || operator.at(-1) === "/" || operator.at(-1) === "(" || operator.at(-1) === ".") {
        operator = operator;
    }            
    else {operator = `${operator}*`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("/").onclick = function() {            
    if (operator === "0") {
        operator = "0";
    }
    else if (operator.at(-1) === "+" || operator.at(-1) === "-" || operator.at(-1) === "*" || operator.at(-1) === "/" || operator.at(-1) === "(" || operator.at(-1) === ".") {
        operator = operator;
    }            
    else {operator = `${operator}/`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("(").onclick = function() {            
    if (operator === "0") {
        operator = "(";
    }
    else if (operator.at(-1) === ".") {
        operator = operator;
    }
    else if (operator.at(-1) === "1" || operator.at(-1) === "2" || operator.at(-1) === "3" || operator.at(-1) === "4" || operator.at(-1) === "5" || operator.at(-1) === "6" || operator.at(-1) === "7" || operator.at(-1) === "8" || operator.at(-1) === "9" || operator.at(-1) === "0" || operator.at(-1) === ")") {
        operator = `${operator}*(`
    }
    else {operator = `${operator}(`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById(")").onclick = function() {            
    let difference = (operator.split("(").length - 1) - (operator.split(")").length - 1);
    if (operator === "0") {
        operator = "0";
    }
    else if (operator.at(-1) === "+" || operator.at(-1) === "-" || operator.at(-1) === "*" || operator.at(-1) === "/" || operator.at(-1) === "(" || operator.at(-1) === ".") {
        operator = operator;
    }
    else if (difference > 0) {
        operator = `${operator})`
    }           
    
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("=").onclick = function() {            
    if (operator === "0") {
        operator = "0";
    }
    else {operator = `${operator}=`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById(".").onclick = function() {            
    if (operator === "0") {
        operator = "0.";
    }
    else if (operator.at(-1) === "+" || operator.at(-1) === "-" || operator.at(-1) === "*" || operator.at(-1) === "/" || operator.at(-1) === "(") {
        operator = `${operator}0.`;
    }
    else if (operator.at(-1) === ".") {
        operator = operator;
    }            
    else {operator = `${operator}.`}
    document.getElementById("display").innerHTML = operator;
}

document.getElementById("C").onclick = function() {
    operator = "0";            
    document.getElementById("display").innerHTML = operator;
    document.getElementById("history").style.display ="block";
    document.getElementById("history-frame").style.display ="block";
}

document.getElementById("del").onclick = function() {
    if (operator.length === 1) {
        operator = "0";
        console.log("operator.length = "+operator.length);
        console.log("operator = "+operator);
        document.getElementById("display").innerHTML = operator;
    }
    else {operator = operator.slice(0,-1);            
    document.getElementById("display").innerHTML = operator;
    }
}

const history =[];
let logHistory ="";

document.getElementById("=").onclick = function() {            
    let result = "0";            
    try {
        console.log("number of opening (: "+(operator.split("(").length - 1));
        let difference = (operator.split("(").length - 1) - (operator.split(")").length - 1);
        console.log("difference (-): "+difference);
        let append = ")".repeat(difference);
        console.log("append: "+append);
        operator = `${operator}${append}`;
        result = eval(operator);
        console.log("operator: "+operator);
        console.log("result: "+result);                
        document.getElementById("display").innerHTML = `${operator}<br>=<br>${result}`;
        let interim = `${operator}=${result}<br>-<br>`
        console.log("interim: "+interim);
        history.push(interim);
        console.log("history: "+history);
        logHistory = history.toString().replaceAll(",", "");
        console.log("logHistory: "+logHistory);
        document.getElementById("history").innerHTML = "history<br>-<br>"+logHistory;
    } catch (error) {
        result = "0";
        operator = "0";
        document.getElementById("display").innerHTML = "Oops!<br>Please try<br>again.";
        console.error(error);
    }            
}

document.getElementById("color-button-1").onclick = function() {
    document.body.classList.remove("blueish-mode", "greenish-mode")
    document.body.classList.toggle("reddish-mode")
};

document.getElementById("color-button-2").onclick = function() {
    document.body.classList.remove("reddish-mode", "greenish-mode")
    document.body.classList.toggle("blueish-mode")
};

document.getElementById("color-button-3").onclick = function() {
    document.body.classList.remove("blueish-mode", "reddish-mode")
    document.body.classList.toggle("greenish-mode")
};
