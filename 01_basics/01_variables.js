const accountId = 144554
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Nashik"
let accountState;

// accountId = 2    // Not ALlowed

accountEmail = "hc@hcgmail.com"
accountPassword = "2137739"
accountCity = "Mumbai"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

// console.log(accountId);
console.table([accountCity, accountId, accountEmail, accountPassword, accountState])