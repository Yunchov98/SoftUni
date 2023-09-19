function extractFile(path) {
    const pathArr = path.split('\\');

    const file = pathArr.pop().split('.');
    const extension = file.pop();
    const fileName = file.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');