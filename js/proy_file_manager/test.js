function buscarMenorEnArray(array){    
    let element = [9999,9999]
    for (let index = 0; index < array.length; index++) {            
        if( array[index] < element[0])
        {
            element = [array[index],index]
        }
    }
    return element
}


let array = [9,1, 5, 10] 
let tupla = buscarMenorEnArray(array)
console.log(buscarMenorEnArray(array))