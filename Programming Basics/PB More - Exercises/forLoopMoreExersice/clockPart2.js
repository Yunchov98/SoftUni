function clockPart2() {

    for (let h = 0; h < 24; h++) {
        if (h >= 24) {
            h -= 24;
        }
        for (let m = 0; m < 60; m++) {
            if (m >= 60) {
                m -= 60;
                h++;
            }
            for (let s = 0; s < 60; s++) {
                if (s >= 60) {
                    s -= 60;
                    m++;
                }
                console.log(`${h} : ${m} : ${s}`);
            }
        }
    }

}

clockPart2();