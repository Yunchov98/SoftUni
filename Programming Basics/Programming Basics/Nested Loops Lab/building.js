function building(input) {

    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);

    for (let floors = floorsCount; floors > 0; floors--) {
        let res = '';
        for (let rooms = 0; rooms < roomsCount; rooms++) {
            if (floors === floorsCount) {
                res += `L${floors}${rooms} `;
            } else if (floors % 2 !== 0) {
                res += `A${floors}${rooms} `;
            } else {
                res += `O${floors}${rooms} `;
            }
        }
        console.log(res);
    }

}

building(['6', '4']);