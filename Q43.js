var mAgicians = ["Alice", "David", "Chris"];
function make_great(mAgicians) {
    var greatMAgicians = [];
    mAgicians.forEach(function (mAgician) {
        greatMAgicians.push("".concat(mAgician, " the Great"));
    });
    return greatMAgicians;
}
function show_mAgicians(mAgicians) {
    mAgicians.forEach(function (mAgician) {
        console.log(mAgician);
    });
}
var greatMAgicians = make_great(mAgicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_mAgicians(mAgicians); // Shows original names
console.log("Great magicians:");
show_mAgicians(greatMAgicians); // Shows modified names
