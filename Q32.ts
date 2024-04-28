let current_user: string[] = ["Ahmed", "Ali", "Saad", "Hammad", "Owais"]
let new_user: string[] = ["Zohaib", "Ali", "Sabir", "Rehan", "Owais"]
new_user.forEach((newUser) => {
    if(
        current_user.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});