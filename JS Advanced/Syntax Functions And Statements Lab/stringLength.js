function stringLength(firstString, secondString, thirdString) {
    const total = firstString.length + secondString.length + thirdString.length;
    const avg = Math.floor(total / 3);

    console.log(total);
    console.log(avg);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');