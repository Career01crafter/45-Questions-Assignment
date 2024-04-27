var MyGuests = ["Ali", "Ahmed", "Hammad", "Saad", "Fazeel"];
while (MyGuests.length > 3) {
    var removedGuests = MyGuests.pop();
    console.log("Sorry ".concat(removedGuests, "! i can't invite you for dinner."));
}
MyGuests.forEach(function (MyGuests) {
    console.log("Dear ".concat(MyGuests, "! you are invited for dinner."));
});
console.log("".concat(MyGuests.length, " guests are invited for my dinner party."));
