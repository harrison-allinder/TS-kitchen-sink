let name = 'Jillian';

console.log(name);

const states= '50';

console.log(states);

let sum = (5 + 4);

console.log(sum);
//this function is to add 5 + 4

function sayHello() {
    console.log("Hello World!");
}
sayHello();

function checkAge(name, age) {
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

let peopleArr = [
    {
        name: 'Josh',
        age: 25
    },
    {
        name: 'Carol',
        age: 61
    },
]

checkAge(peopleArr[0].name, peopleArr[0].age);

function getLength(word) {
   return word.length
}

let wordLength = getLength('Hello World');
if (wordLength % 2 === 0) {
    console.log('The world is evn and stuff');
} else {
    console.log('the world is odd and floppy');
}
