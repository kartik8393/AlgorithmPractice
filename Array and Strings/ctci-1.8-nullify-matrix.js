function zeroMatrix(arr) {
    let rowZero = false
    let colZero = false;

    // CHECK IF FIRST ROW HAS ANY ZERO
    for (let i = 0; i < arr[0].length; i++) {
        if (arr[0][i] == 0) {
            rowZero = true;
            break;
        }

    }

    // CHECK IF FIRST COLUMN HAS ANY ZERO
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 0) {
            colZero = true;
            break;
        }
    }

    // CHECK WHOLE MATRIX AND SAVE 0 IN FIRST COL, ROW IF ZERO
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            if (arr[i][j] == 0) {
                arr[0][j] = 0;
                arr[i][0] = 0;
            }
        }
    }

    // NULLIFY COL IF ELE IN FIRST ROW IS ZERO
    for (let i = 1; i < arr[0].length; i++) {
        if (arr[0][i] == 0) {
            console.log("nullcol", i)
            arr = nullifyCol(arr, i)
        }
    }

    // NULLIFY ROW IF ELE IN FIRST COL IS ZERO
    for (let j = 1; j < arr.length; j++) {
        if (arr[j][0] == 0) {
            console.log("nullrow", j)
            arr = nullifyRow(arr, j)
        }
    }

    // NULLIFY FIRST ROW IF ZERO EXISTS
    if (rowZero) {
        arr = nullifyRow(arr, 0)
    }
    // NULLIFY FIRST COL IF ZERO EXISTS
    if (colZero) {
        arr = nullifyCol(arr, 0)
    }

    return arr;
}


function nullifyRow(arr, i) {
    for (let j = 0; j < arr.length; j++) {
        arr[i][j] = 0;
    }
    return arr;
}

function nullifyCol(arr, i) {
    for (let j = 0; j < arr.length; j++) {
        arr[j][i] = 0;
    }
    return arr;
}

arr = [
    [1, 0, 3],
    [4, 5, 6],
    [0, 8, 0]
]
expectedAnswer = [
    [0, 0, 0],
    [4, 0, 0],
    [0, 0, 0]
]

console.log(zeroMatrix(arr));