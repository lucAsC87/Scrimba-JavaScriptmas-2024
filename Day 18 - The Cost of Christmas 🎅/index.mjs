import shoppingCartData from "./data.mjs"

/*
😱 Christmas can get expensive!

You've been on a shopping trip and spent too much money.
But how much of that can you blame on Christmas?

**Task**

- Calculate and return the total cost of only the gifts in the shopping cart.
- Each gift has the isGift boolean set to true.
- The total cost of gifts should be given to two decimal places.

Expected output: 559.93

**Stretch Goal**

- Use the reduce() method to complete this challenge.
*/

function calculateCost(arr){
    // Your code here!
    const totalCost = arr
                    .filter(item => item.isGift)
                    .reduce((sum, item) => sum + item.price, 0)
                    .toFixed(2);
    return (totalCost);
}

console.log(calculateCost(shoppingCartData)) //559.93

