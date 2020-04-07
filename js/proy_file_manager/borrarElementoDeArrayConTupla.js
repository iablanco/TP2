let array = [9,1, 5, 10]

function borrarElementoArrayConTupla(array,tupla)
{
    array.splice(1,tupla[0])
}
array.splice(1,1)

console.log(array)