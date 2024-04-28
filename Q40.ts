function make_album(artist: string, title: string, tracks?: number) {
    let album: object = {
        name: artist,
        music_Title: title,
        no_Of_Tracks: tracks
    }
    console.log(album);
}
make_album("Artist 1", "Album 1", 3);
make_album("Artist 2", "Album 2", 4);