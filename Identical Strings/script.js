console.log('Identical strings or not');    

function identicalString() {
    let string1 = "Hello World.";
    let string2 = "Hello world."; // The size of one letter doesn't allow the strings to be identical one to another.
    if (string1 === string2) {
        return ("Identical strings !");
    }
    else {
        return ("Strings are not identical !");
    }
}
console.log(identicalString());