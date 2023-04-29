
    arr => arr.reduce((a, v, i) => a + v[i], 0)
    return `${calcDiagonal(arr)} ${calcDiagonal(arr.reverse())}`;

foo([[3, 5, 17],[-1, 7, 14], [1, -8, 89]])