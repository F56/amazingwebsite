function count(string, char) {
    let counter = 0;
    for(let i = 0; i <= string.length; i++) {
        if(string.charAt(i) === char) {
            counter++;
        } 
    }
    return counter;
}

function filter(array) {
    let filteredNumbers = [];
    for(let i = 0; i <= array.length; i++) {
        if(array[i] >= 10) {
            filteredNumbers.push(array[i]);
        }
    }
    return filteredNumbers;
}

function hypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

// TESTING SECTION

// Char Counter
console.log(count("Hello", "l")); // return 2
console.log(count("Hola", "g")); // return 0

// Filtered Array Numbers
console.log(filter([3, 12, 45, 7])); // return [(12, 45)];
console.log(filter([3, 5])); // return []

// Hypotenuse
console.log(hypotenuse(3, 4)); // return 5
console.log(hypotenuse(10, 13)); // return 16.401219466856727
