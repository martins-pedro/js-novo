//Diferença entre Break e Continue

// Break

/* 
let n=0
let max=100

for(let i=n; i<max; i++) {
    console.log(i)
    if(i>15) {
        break
    }
}
console.log("Fim do Programa") 
*/

//Continue 

let n=0
let max=100
let numPares=0

for(let i=n; i<max; i++) {
    if(i%2!==0) {
        continue
    }
    numPares++
}
console.log("Número Pares - " + numPares)