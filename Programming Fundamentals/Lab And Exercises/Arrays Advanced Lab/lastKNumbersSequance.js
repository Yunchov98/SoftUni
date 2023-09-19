function lastKNumbersSequance(length, k) {

    let result = [1];

    for (let i = 1; i < length; i++) {
        
        let index = Math.max(result.length - k, 0);
        let finalElement = result.slice(index);
        let sum = 0;

        for (const el of finalElement) {
            sum += el;
        }

        result.push(sum);

    }

    console.log(result.join(' '));

}

lastKNumbersSequance(6, 3);