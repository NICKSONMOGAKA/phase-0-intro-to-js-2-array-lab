// Define the initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Appends a cat to the end of the cats array, returning a new array
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats.slice(); // return a copy of the cats array
}

// Prepends a cat to the beginning of the cats array, returning a new array
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats.slice(); // return a copy of the cats array
}

// Removes the last cat from the cats array, returning a new array
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats.slice(); // return a copy of the cats array
}

// Removes the first cat from the cats array, returning a new array
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats.slice(); // return a copy of the cats array
}

// Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name]; // return a new array with added cat
}

// Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats]; // return a new array with added cat
}

// Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1); // return a new array without the last cat
}

// Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1); // return a new array without the first cat
}

// Export the functions and the initial cats array if needed
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat,
};
