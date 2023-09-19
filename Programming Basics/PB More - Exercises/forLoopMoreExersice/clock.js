function clock() {

    for (let h = 0; h < 24; h++) {
        if (h >= 24) {
            h -= 24;
        }
        for (let m = 0; m < 60; m++) {
            if (m >= 60) {
                m -= 60;
                h++;
            }
            console.log(`${h} : ${m}`)
        }
    }
}

clock();