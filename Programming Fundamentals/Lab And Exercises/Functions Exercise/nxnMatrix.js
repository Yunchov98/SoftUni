function nxnMatrix(number) {

    let rowGenerator = () => {
        let myArr = [];
        for (let i = 0; i < number; i++) {
            myArr.push(number);
        }
        return myArr.join(' ');
    }

    for (let k = 0; k < number; k++) {
        console.log(rowGenerator());
    }
}

nxnMatrix(3);