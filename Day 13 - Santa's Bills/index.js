// Santa needs your help to figure out if he has enough money to give everyone change!
// Your goal will be to return true if everyone gets their correct change, and false if at least one person does not receive their correct change! Use the function below to get started!

// Good luck and happy coding!!
function correctChangeFromSanta(bills) {
    let fiveBills = 0;
    let tenBills = 0;

    for (let bill of bills) {
        if (bill === 5) {
            fiveBills++;
        } else if (bill === 10) {
            if (fiveBills > 0) {
                fiveBills--;
                tenBills++;
            } else {
                return (false);
            }
        } else if (bill === 20) {
            if (tenBills > 0 && fiveBills > 0) {
                tenBills--;
                fiveBills--;
            } else if (fiveBills >= 3) {
                fiveBills -= 3;
            } else {
                return (false);
            }
        }
    }
    return (true);
}

// You can leave this code as is, this will simply console.log() different text depending on if the test case returns true or false. Feel free to add additional test cases if you would like!

// Should return true
if (correctChangeFromSanta([5,5,5,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}

// Should return false
if (correctChangeFromSanta([5,5,10,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}