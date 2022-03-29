


const matr = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]

const dia = (matr) => {

    for(let i = 0; i < matr.length; i++){
        for(let j = 0; j < matr[i].length; j++){
            if((i === j && matr[i][j] !== 1) || (matr[i][j] !== 0 && i !== j)){
                return false
            }
        }
    }
    return true
}


console.log(dia(matr))
