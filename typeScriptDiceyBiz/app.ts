// all my variables, created buttons, created array
let btnSubmit = $('#btnSubmit');
let btnRoll = $(`#btnRoll`);
let btnSum = $(`#btnSum`);
let diceContainer = document.getElementById('dice-container');
let numOfDice = 0;
diceArray = [];
// adds click functions and adds new functionality
btnSubmit.click(() => {
    new Die();
});
btnRoll.click(() => {
    diceArray.forEach(die => die.roll())
});
btnSum.click(() => {
    let sum = 0;

    diceArray.forEach(die => {
        sum = sum + die.value;
    })
    alert(sum);
});
// this is where the die gets all it's values
class thisDie {
    value: any;
    div: HTMLDivElement;
    
    constructor() {
        this.value = this.value;
        this.div = document.createElement('div');
        this.div.className = 'thisDie';
        this.div.id = (numOfDice++).toString();
        this.roll();
        this.div.textContent = this.value;
        this.div.addEventListener('dblclick', () => {
            const index: number = diceArray.indexOf(this);
            if (index > 1) {
                diceArray.splice(index, 1);
                container.removeChild(this.div);
            }
            
        })
        diceContainer.appendChild(this.div);
        diceArray.push(this);
    }
    roll() {
        let randomVal: number = (Math.floor(Math.random() * 6 + 1))
        this.value = randomVal;
        this.div.innerText = this.value;
    }
}
//I DIDN'T KNOW HOW TO FIX THE BUTTON ERRORS, WILL ASK ABOUT THAT - OR THE DICEARRAY/CONTAINERS, OTHERWISE MOSTLY EVERYTHING SHOULD BE CONVERTED AND FIXED 