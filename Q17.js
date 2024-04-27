var InvitedGuests = ["Ali", "Ahmed", "Narmeen", "Hooriya", "Basit", "Qasim"];
console.log("Sorry! I can invite only two guests for dinner.");
while (InvitedGuests.length > 2) {
    var RemovedGuests = InvitedGuests.pop();
    console.log("Sorry ".concat(RemovedGuests, "! I can't invite you for dinner."));
}
InvitedGuests.forEach(function (InvitedGuests) {
    console.log("Dear ".concat(InvitedGuests, "! you are still invited for dinner party."));
});
