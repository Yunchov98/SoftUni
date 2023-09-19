function cutAndReverse(string) {
    let reversedString = string.split('').reverse().join('');
    
    const firstHalf = reversedString.substring(0, reversedString.length / 2);
    const secondHalf = reversedString.substring(reversedString.length / 2);

    console.log(secondHalf);
    console.log(firstHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');