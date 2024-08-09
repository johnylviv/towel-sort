module.exports = function towelSort (matrix) {
    let arrayResult = [];
    // Если матрица пустая, то возвращаем пустой массив

    if (!matrix)
    return [];

    if (matrix.length === 0)
    return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) 
        // Для чётных индексов добавляем исходный вариант
    {
        arrayResult = arrayResult.concat(matrix[i]);
    }
        else
        // Для нечётных индексов переворачиваем массив
        {
        let reverseMatrix = [];
        reverseMatrix = matrix[i].slice().reverse();
        arrayResult = arrayResult.concat(reverseMatrix);
        }
    }
  return arrayResult;
}
