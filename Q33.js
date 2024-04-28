var position_numbers = [1, 2, 3, 4, 5, 6];
position_numbers.forEach(function (positionNumber) {
    var suffix = "th";
    if (positionNumber === 1) {
        suffix = "st";
    }
    else if (positionNumber === 2) {
        suffix = "nd";
    }
    else if (positionNumber === 3) {
        suffix = "rd";
    }
    console.log("".concat(positionNumber).concat(suffix));
});
