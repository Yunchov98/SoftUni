function numberPyramid(input) {

    let n = Number(input[0]);

    let printNum = 1;
    let buff = '';
    let isFinish = false;

    for (let x = 1; x <= n; x++) {
        for (let y = 0; y < x; y++) {
            if (printNum > n) {
                isFinish = true;
                break;
            }
            buff += printNum + ' ';
            printNum++;
        }
        console.log(buff);
        buff = '';
        if (isFinish) {
            break;
        }
    }

}


numberPyramid(['15']);    