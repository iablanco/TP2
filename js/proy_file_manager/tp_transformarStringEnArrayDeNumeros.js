function transformStringIntoArray(cadenaCaracteres){
    let symbolsArray = [',','|',';','.']
    let onlyWordsArr = []
    for (const letra of cadenaCaracteres) {
        if (!symbolsArray.includes(letra) ) {
            onlyWordsArr.push(letra)        
        }    
    }

    console.log(onlyWordsArr)

}


transformStringIntoArray("random,chaing,asdf,ds,2,123,213.123.;")