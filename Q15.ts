let Guests = ["Ali", "Ahmed", "Hamza", "Hooriya"];
let UnableToAttend = "Hooriya";
console.log(`${UnableToAttend} is not coming for dinner.`);
let NewGuest = "Narmeen";
Guests[Guests.indexOf(UnableToAttend)] = NewGuest;
Guests.forEach((Guests) => {
  console.log(`${Guests}! would you like to join me for dinner?`);
});
