function distinctArray(array) {

    let result = [];

    for(let i =0; i < array.length; i++){

        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }

    console.log(result.join(' '));

}

distinctArray([1, 2, 3, 4]);