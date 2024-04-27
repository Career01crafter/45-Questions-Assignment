var Guests = ["Ali", "Ahmed", "Hamza", "Hooriya"];
var UnableToAttend = "Hooriya";
console.log("".concat(UnableToAttend, " is not coming for dinner."));
var NewGuest = "Narmeen";
Guests[Guests.indexOf(UnableToAttend)] = NewGuest;
Guests.forEach(function (Guests) {
    console.log("".concat(Guests, "! would you like to join me for dinner?"));
});
