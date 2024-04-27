let InvitedGuests = ["Ali", "Ahmed", "Narmeen", "Hooriya", "Basit", "Qasim"]
console.log(`Sorry! I can invite only two guests for dinner.`);
while (InvitedGuests.length > 2) {
    let RemovedGuests = InvitedGuests.pop()
    console.log(`Sorry ${RemovedGuests}! I can't invite you for dinner.`);
}
InvitedGuests.forEach(InvitedGuests => {
    console.log(`Dear ${InvitedGuests}! you are still invited for dinner party.`);
});