let myName: string = 'Jillian';

console.log(name);

const theseStates: number = 50;

console.log(states);

let sumOf: number = (5 + 4);

console.log(sum);
//this function is to add 5 + 4

function sayHello(): void {
    console.log("Hello World!");
}
sayHello();

function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry " + name + " You're too young to enter")
    }
}

checkAge('Charles', 27);
checkAge("Abby", 18);
checkAge("James", 27);
checkAge('John', 17)


let favVeggies = ["broccolli", "brussel sprouts", "beets", "carrot"]
for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])
}

interface Person {
    name: string,
    age: number
}

let peopleArr = [
    {
        name: 'Jaqueese',
        age: 25
    },
    {
        name: 'Young MA',
        age: 61
    },
]

checkAge(peopleArr[0].name, peopleArr[0].age);

function getLength(word:string):void {
   return word.length
}

let wordLength = getLength('Hello World');
if (wordLength % 2 === 0) {
    console.log('The world is evAAAn');
} else {
    console.log('the world is euuuud');
}