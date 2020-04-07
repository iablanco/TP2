const fs = require('fs')


function writeFile(pathFile, nameFile, inputData,crearArchivo){

    if(pathExists(pathFile)){
        console.log("carpeta existe")
        if(fileExists(pathFile +"/"+ nameFile)){
            console.log("archivo existe")
            fs.appendFileSync(pathFile +"/"+ nameFile, "̣̣\n" + inputData)
            
            console.log("archivo escrito")
            console.log(fs.readFileSync(pathFile +"/"+ nameFile,'utf-8'))
            } else if (crearArchivo) {
                console.log("entra a crear archivo")
                console.log("crea archivo")
                fs.writeFileSync(pathFile+"/"+ nameFile,inputData)
                            
                console.log("escribe archivo")
                console.log(fs.readFileSync(pathFile +"/"+ nameFile,'utf-8'))
            } else {
                console.log("ARCHIVO NO EXISTE")
        }  
    }
    console.log("sale de la funcion")
}

function pathExists(pathFile){
    try {
        exist = fs.statSync(pathFile).isDirectory()    
    } catch (error) {
        exist = false       
    }
    return exist  
}

function fileExists(pathFile){
    try {        
        existt = fs.statSync(pathFile).isFile()
        console.log(exist)
        
    } catch (error) {        
        existt = false
    }
    
    return existt
}



//b = fileExists('./test_file')


//a = pathExists('./escribir_archivo_en_carpeta/')
//console.log(pathExists('./escribir_archivo_en_carpeta'))
//p = "./escribir_archivo_en_carpeta"
//console.log(fileExists(p+"/"+"testFile"))
//console.log(fileExists(pathFile+"/"+"testFile"))
//writeFile("/home/kiu/Documents/ort/pr2/js/proy_file_manager/escribir_archivo_en_carpeta","TEST DATA",false)

writeFile("./escribir_archivo_en_carpeta","testFile","TEST DATA",false)

//writeFile("./escribir_archivo_en_carpeta","testFileNotExist","TEST DATA",false)

//writeFile("./escribir_archivo_en_carpeta","testFileNotExist","TEST DATA",true)