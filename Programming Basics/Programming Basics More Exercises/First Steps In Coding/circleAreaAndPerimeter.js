function circleAreaAndPerimeter(input) {

    let r = Number(input[0]);

    let area = r * r * Math.PI;
    let p = 2 * Math.PI * r;

    console.log(area.toFixed(2));
    console.log(p.toFixed(2));
}

circleAreaAndPerimeter(['3']);