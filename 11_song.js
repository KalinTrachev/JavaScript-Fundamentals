function song(input){

    class Song {
        constructor(playlist, name, duration){
            this.playlist = playlist;
            this.name = name;
            this.duration = duration;
        }
    }
    let songs = [];
    let numberOfSongs = input.shift();
    let typePlaylist = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [playlist, name, duration] = input[i].split('_');
        let song = new Song(playlist, name, duration)
        songs.push(song)
    }
    if(typePlaylist === 'all') {
        songs.forEach((title) => console.log(title.name));
    } else {
        let filtered = songs.filter((j) => j.playlist === typePlaylist);
        filtered.forEach((j) => console.log(j.name))
    }
}
song([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']    
    )