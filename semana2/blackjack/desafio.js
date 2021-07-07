function minhaFuncao(array, valor){
    let index
    for (let i = 0; i < array.length; i++){
        if (array[i] === valor){
            index = i
        }
    }
    return index
}
console.log(minhaFuncao("ABC", "DEF", "GHI", "JKL", "GHI"))