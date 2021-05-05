// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring to complete this task.

const foodItems = ["banana", "cucumber", "bread", "cakes", "pizza"];
const [fruit, vegetable, ...food] = foodItems;

console.log(fruit);
console.log(vegetable);
console.log(food);


// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`. Assign each value to a variable. Print out the values.

const suspects = {
    "kilo Jugg": "Davy Jones",
    Dodgy: "Bane",
    Offica: "Darth Sidious",
    Lucii: "Saw",
};

const { "kilo Jugg": sub1, Dodgy: sub2, Offica: sub3, Lucii: sub4 } = suspects;
console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(sub4);


// #### 3. Parameters: Object Destructuring
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// * Then, create a function to print all of the band/musician's data.

const drillers = {
    Artist: "Pete & Bas",
    Song: "Plugged In W/Fumez",
    Nationality: "United Kingdom",
    Genre: "UK Drill",
};

const getData = ({ Artist, Song, Nationality, Genre }) => {
    console.log(
        `${Artist} are rappers from the ${Nationality}. They are making noise in the ${Genre} scene. They released their hit song ${Song} few weeks ago, which has just under 4 mil. hits you YouTube.`
    );
};

getData(drillers);
