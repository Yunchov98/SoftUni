function oldBooks(input) {

    let index = 0;

    let favoriteBook = input[index];
    index++;
    let nextBook = input[index];
    index++;
    let bookIsFound = false;

    let counter = 0;

    while (nextBook !== 'No More Books') {
        if (nextBook === favoriteBook) {
            bookIsFound = true;
            break;
        }
        counter++;
        nextBook = input[index];
        index++;
    }

    if (!bookIsFound) {
        console.log('The book you search is not here!');
        console.log(`You checked ${counter} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }

}

oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);