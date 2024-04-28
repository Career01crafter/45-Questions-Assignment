var current_user = ["Ahmed", "Ali", "Saad", "Hammad", "Owais"];
var new_user = ["Zohaib", "Ali", "Sabir", "Rehan", "Owais"];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
