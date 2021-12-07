let temp = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
function rotateMatrix(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j], i, j, j, arr[i].length - 1 - i)
            temp[j][arr[i].length - 1 - i] = arr[i][j]
            // arr=swap(arr,i,j,arr[i].length-1-i,j)
        }
    }
    return temp;
}


function swap(mat, i1, j1, i2, j2) {
    let temp = mat[i1][j1];
    mat[i1][j1] = mat[i2][j2];
    mat[i2][j2] = temp;
    return mat;
}

// i is y coordinate
// j is x coordinate

arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
expectedAnswer = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

console.log(rotateMatrix(arr));