let random = Math.random
let a=prompt("enter the first no.")
let b=prompt("enter the second no.")
let c=prompt("perform operations")

let obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"**"
}

if(random>0.1){
    //perform correct operations
    alert(`the result is ${eval(`${a} ${c} ${b}`)} `)
    
}
else{
    //perform wrong operations
    c=obj[c]
     alert(`the result is ${eval(`${a} ${c} ${b}`)} `)
}