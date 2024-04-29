var Magicians = ["David", "Robin", "Roy"];
function show_Magicians(Magicians) {
    Magicians.forEach(function (Magician) {
        console.log(Magician);
    });
}
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + "the Great!";
    }
}
make_great(Magicians);
show_Magicians(Magicians);
