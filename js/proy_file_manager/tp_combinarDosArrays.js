let array1 = [1, 5, 10] 
let array2 = [2, 3, 8, 11]

combinarDosArrays(array1, array2)

function combinarDosArrays(array1, array2){
    let arrayDeBsuqueda = [array1,array2]
    let arrayAux = []
    let arrayCobminado = []

    for (const array of arrayDeBsuqueda) {
        
        for (let index = 0; index < array.length; index++) {           
            arrayAux.push(array[index])           
        }
        console.log(arrayAux)
    }

    for (let index = 0; index < arrayAux.length; index++) {        
        
        elementoMenor = buscarMenorEnArray(arrayAux)

        borrarElementoArrayConTupla(arrayAux,elementoMenor[1])
        console.log(arrayAux)
        //arrayCobminado.push(elementoMenor[0])
        
    }

    console.log(arrayCobminado)
        
        
    
}

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


function borrarElementoArrayConTupla(array,indice)
{
    array.splice(1,indice)
    console.log(array)
}