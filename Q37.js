function Make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Make shirt of size ".concat(size, " with message ").concat(message));
}
Make_shirt();
Make_shirt("medium");
Make_shirt("small", "I love Typescript and Javascript");
