function schoolLibrary(array) {

    let books = array[0].split('&');

    for (let i = 1; i < array.length; i++) {
        let line = array[i].split(' | ');
        let command = line[0];
        let firstBook = line[1];
        let secondBook = line[2];

        switch (command) {
            case 'Add Book':
                if (!books.includes(firstBook)) {
                    books.unshift(firstBook);
                }
                break;
            case 'Take Book':
                if (books.includes(firstBook)) {
                    let indexOfCurrentBook = books.indexOf(firstBook);
                    books.splice(indexOfCurrentBook, 1);
                }
                break;
            case 'Swap Books':
                if (books.includes(firstBook) && books.includes(secondBook)) {
                    let indexOfFirstBook = books.indexOf(firstBook);
                    let indexOfSecondBook = books.indexOf(secondBook);
                    let temp = books[indexOfFirstBook];
                    books[indexOfFirstBook] = books[indexOfSecondBook];
                    books[indexOfSecondBook] = temp;
                }
                break;
            case 'Insert Book':
                if (!books.includes(firstBook)) {
                    books.push(firstBook);
                }
                break;
            case 'Check Book':
                let indexOfCheckedBook = Number(firstBook);
                if (indexOfCheckedBook >= 0 && indexOfCheckedBook < books.length) {
                    console.log(books[indexOfCheckedBook]);
                }
                break;
            case 'Done':
                console.log(books.join(', '));
                break;
        }
    }
}

schoolLibrary((["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])
);