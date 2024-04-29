let Magicians: string[] = ["David", "Robin", "Roy"]
function show_Magicians(Magicians: string[]) {
    Magicians.forEach((Magician) => {
        console.log(Magician);
    })
}
function make_great(Magicians: string[]) {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i]  + "the Great!"
    }
}
make_great(Magicians);
show_Magicians(Magicians);