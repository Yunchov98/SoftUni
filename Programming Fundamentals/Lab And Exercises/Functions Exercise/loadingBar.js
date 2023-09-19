function loadingBar(number) {

    let percentsCount = '%'.repeat(number / 10);
    let dotsCount = '.'.repeat(10 - percentsCount.length);

    if (number < 100) {
        console.log(`${number}% [${percentsCount}${dotsCount}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
    }
}

loadingBar(30);