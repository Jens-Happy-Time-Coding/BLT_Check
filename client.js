//Check if sandwich is BLT

//input is array of ingredients
//output is boolean (t/f) stating if sandwich is BLT

    /* TEST DATA
    ["bread", "bacon", "lettuce", "blue cheese", "tomatoes", "bread"] --> true
    ["bread", "lettuce", "bacon", "tomatoes"] --> false (missing "bread" at end)
    ["bread", "lettuce", "tomatoes", "bacon", "bread"] --> true
    ["bread", "lettuce", "tomatoes", "bacon", "bread", "cheese"] --> false ("cheese" is outside the "bread")
    */
let sandwich = ["bread", "lettuce", "tomatoes", "bacon", "bread"];

if ( isBLT( sandwich ) ) {
    console.log("True BLT!!");
} else {
    console.log("Imposter BLT!");
}

function isBLT( ingredients ) {

    let numIngredients = ingredients.length;

    const TRUE_BLT = 3; //need 3 ingredients in the sandwich
    let ingredientFound = 0; //counter to make sure we have the 3 req ingredients

    if ( ingredients[0] === "bread" && ingredients[numIngredients-1] === "bread" ) {

    //loop through ingredients to see if lettuce, tomatoes and cheese are in the middle
    for ( let i = 1; i < numIngredients - 1; i++ ) {
        if ( ingredients[i] === "bacon" ||
             ingredients[i] === "lettuce" ||
             ingredients[i] === "tomatoes" ) {
                ingredientFound++;
        }//end if for ingredients
    }//end for loop
    } 

    if ( ingredientFound === TRUE_BLT ) {
        return true;
    } else {
        false;
    }
}