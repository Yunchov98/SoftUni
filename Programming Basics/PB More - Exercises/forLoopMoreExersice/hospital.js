function hospital(input) {

    let index = 0;

    let period = Number(input[index]);
    index++;

    let examinedPatients = 0;
    let unexaminedPatient = 0;
    let doctorsCount = 7;

    for (i = 1; i <= period; i++) {
        let patientCount = Number(input[index]);
        index++;
        if (i % 3 === 0 && examinedPatients < unexaminedPatient) {
            doctorsCount++;
        }
        if (patientCount <= doctorsCount) {
            examinedPatients += patientCount;
        } else if (patientCount > 7) {
            examinedPatients += doctorsCount;
            unexaminedPatient += patientCount - doctorsCount;
        }
    }

    console.log(`Treated patients: ${examinedPatients}.`);
    console.log(`Untreated patients: ${unexaminedPatient}.`);

}

hospital(['4', '7', '27', '9', '1']);