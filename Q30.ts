let user_names = ["Admin", "User1", "User2", "User3", "User4"]
user_names.forEach((user_name) => {
    if(user_name == "Admin") {
        console.log("Hello Admin! would you like to see a status report?");
    } else {
        console.log(`Hello ${user_name}! thankyou for logging in again.`);
    }
})