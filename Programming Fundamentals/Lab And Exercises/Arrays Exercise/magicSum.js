function magicSum(array, number) {

    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        for (let k = i + 1; k < arrayL; k++) {
            if ((array[i] + array[k]) === number) {
                console.log(`${array[i]} ${array[k]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);