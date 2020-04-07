/*
Recibe un array con strings, y una secuencia de caracteres para usar como separador.
Devuelve un único string que es la unión de todos los strings del array, intercalando la
secuencia separadora entre cada uno.
Ejemplo
Input: array = [‘123’, ‘456’, 789’, ‘10’] , separador = ‘,’
Output: ‘123,456,789,10’
*/

let arrayDeNros = [123, 456, 789, 10]
let separador = ","
let output = ""
let i = 0 
for (const carac of arrayDeNros) {   
    
        output = output + carac
        i++
        if(i < arrayDeNros.length)
        {
            output = output + separador            
        }
        console.log(output)
}

console.log(output)