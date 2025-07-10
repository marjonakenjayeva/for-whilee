let sonlar =[12, 23, 44, 63, 74, 85, 96, 79, 90,13]

let juft =[]
let toq =[]

for (let i = 0; i < sonlar.length; i++){

    if (sonlar[i] % 2 === 0){
        juft.push(sonlar[i])
    }
    else{
        toq.push(sonlar[i])
    }
}

console.log(sonlar)
console.log(juft)
console.log(toq)