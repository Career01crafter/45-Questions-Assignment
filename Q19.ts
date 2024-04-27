let MyGuests = ["Ali", "Ahmed", "Hammad", "Saad", "Fazeel"]
while (MyGuests.length > 3) {
    let removedGuests = MyGuests.pop()
    console.log(`Sorry ${removedGuests}! i can't invite you for dinner.`);
}
MyGuests.forEach(MyGuests => {
    console.log(`Dear ${MyGuests}! you are invited for dinner.`);
});
console.log(`${MyGuests.length} guests are invited for my dinner party.`);