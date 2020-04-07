let array = [9,1, 5, 10] 
let indice = 1
function buscarMenorPorPosicion(indice,array){
    let element=array[indice]
    for (let index = indice; index < array.length; index++) {    
        console.log("indice" + index)    
        
        if(element > array[index+1])
        {
            element = array[index+1]
        }
    }
    return element
}

console.log(buscarMenorPorPosicion(indice,array))