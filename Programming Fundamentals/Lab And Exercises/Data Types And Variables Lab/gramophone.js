function gramophone(name, album, song) {

    let time = (name.length * album.length) * song.length / 2;

    let rotations = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotations} times.`)

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');