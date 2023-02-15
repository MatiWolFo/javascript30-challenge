// array of objects
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// array
const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// () => ();, and () =>  ; is the same to say () => return
const arrayFilter = inventors.filter((inventor) => (
    inventor.year >= 1500 && inventor.year <= 1600
));
//console.table(arrayFilter);

// Array.prototype.map()
// 2. Give us an array of the inventor data
const arrayMap = inventors.map((inventor) => (
    `${inventor.first} ${inventor.last}, was born in ${inventor.year}, and passed away in ${inventor.passed}`
));
//console.table(arrayMap);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const arraySort = inventors.sort((a, b) => (
    a.year > b.year
        ? 1
        : -1
));
//console.table(arraySort);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const arrayReduce = inventors.reduce((total, inventor) => {
    let years = inventor.passed - inventor.year;
    return total + years;
}, 0);
//console.log(arrayReduce);

// 5. Sort the inventors by years lived DESCENDENT
const yearSort = inventors.sort((a, b) => {
    const prevInv = a.passed - a.year;
    const nextInv = b.passed - b.year;
    return nextInv > prevInv
        ? 1
        : -1
});
//console.table(yearSort);

// 7. sort Exercise
// Sort the people alphabetically by last name, DESTRUCTURE
const lastNameSort = people.sort((a, b) => {
    const aLast = a.split(', ');
    const bLast = b.split(', ');
    return aLast > bLast ? 1 : -1;
});
// console.table(lastNameSort);

// 9. array Reduce
// Sum up the instances of each of these, creating an object from an array of multiple strings repeated
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const summary = data.reduce((acc, curr) => {
    acc[curr]
        ? acc[curr] += 1
        : acc[curr] = 1;
    return acc;
}, {}); // acc [] or acc {} is the equivalent to 0
console.table(summary);

// create a new array of unique values
const uniqueArray = [...new Set(data)];
console.table(uniqueArray);



const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

const minMaxFound = (sentences) => {

    let min = 100;
    let max = 0;

    for (let index = 0; index < sentences.length; index++) {
        let wordCount = sentences[index].split(' ').length;
        min = Math.min(wordCount, min)
        max = Math.max(wordCount, max)
    }
    return { min: min, max: max };
};

console.table(minMaxFound(sentences));

// 1. ordenar arrays sin usar sort

// const sortedArray = array2.sort((a, b) => {
//     return a - b
// });
// console.log(sortedArray);

// BIG O NOTATION

const array1 = [12, 9, 1, 8, 7];
// const array2 = [3, 6, 20, 1, -1];
// const array3 = [12, 9, 1, 8, 7];

function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(`BEFORE i= ${i}; j= ${j}; array[j] = ${array[j]}: array[i] = ${array[i]}; array ${array}`);
            if (array[j] > array[i]) {
                console.log('cumple');
                temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
            console.log(`AFTER i= ${i}; j= ${j}; array[j] = ${array[j]}: array[i] = ${array[i]}; array ${array}`);
            console.log('==================');
        }
    }
}
sortArray(array1)
// sortArray(array2)
// sortArray(array3)
