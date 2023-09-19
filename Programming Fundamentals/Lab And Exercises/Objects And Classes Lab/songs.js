function songs(array) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = Number(array[0]);
    let typeList = array[array.length - 1];
    let songs = [];

    for (let i = 1; i <= songsCount; i++) {
        let [type, name, time] = array[i].split('_');
        songs.push(new Song(type, name, time));
    }

    if (typeList === 'all') {
        songs.forEach(element => {
            console.log(element.name);
        })
    } else {
        let filtredSongs = songs.filter(el => el.type === typeList);
        filtredSongs.forEach(element => {
            console.log(element.name);
        })
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
console.log(`---------------------`)
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)
console.log('---------------------');
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)