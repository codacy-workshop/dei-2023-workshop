function getSeason(month) {
    // Ensure that the month is a number and within the valid range
    if (typeof month !== 'number' || month < 1 || month > 12) {
        console.log("Invalid month number.");
        return;
    }

    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("It's winter.");
            break; // Added break statements to prevent fall-through
        case 3:
        case 4:
        case 5:
            console.log("It's spring.");
            break;
        case 6:
        case 7:
        case 8:
            console.log("It's summer.");
            break;
        case 9:
        case 10:
        case 11:
            console.log("It's autumn.");
            break;
        default:
            // This default case is now redundant due to the initial check
            console.log("Invalid month number.");
    }
}

var x = 20; // Declare the variable before calling the function
getSeason(x); // Function called after x is defined
