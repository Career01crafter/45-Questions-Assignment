let GuestsComing = ["Ali", "Ahmed", "Narmeen", "Hooriya"];
console.log(`Great news! i found a bigger dinning table.`);
GuestsComing.unshift("Basit");
GuestsComing.splice(GuestsComing.length / 2, 0, "Laraib");
GuestsComing.push("Qasim");
GuestsComing.forEach((GuestsComing) => {
  console.log(`Dear ${GuestsComing}! would you like to join me for dinner?`);
});
