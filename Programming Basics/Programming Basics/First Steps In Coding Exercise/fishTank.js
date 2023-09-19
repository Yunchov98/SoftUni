function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = length * width * height;
    let volumeInLiters = aquariumVolume / 1000;

    let requiredLiters = volumeInLiters * (1 - (percent / 100));

    console.log(requiredLiters);

}

fishTank(['85', '75', '47', '17']);