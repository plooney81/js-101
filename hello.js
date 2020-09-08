function hello(name = 'world') {
    console.log('Hello, ' + name + '!');
}
// prompt('Whats your name?') cant use this because it doesn't exist for node
// hello();

function madLib(name = 'Pete', subject = 'Stem') {
    const newString = name + '\'s favorite subject in school is ' + subject + '.';
    return newString;
}
// console.log(madLib());

function tipCalcOne(bill, service) {
    if (service === 'good'){
        return Math.round(bill * .2);
    } else if (service == 'fair'){
        return Math.round(bill * .15);
    } else if (service == 'bad') {
        return Math.round(bill * .1);
    } else {
        console.log('Something else happened')
    }
}

function tipCalcTwo(bill, service) {
    return tipCalcOne(bill, service) + bill
}

function tipCalcThree(bill, service='good', participants){
    return Math.ceil(tipCalcTwo(bill, service) / participants)
}
const example = tipCalcThree(40, 'fair', 2)
// console.log(example)

function printNumbers(start, end){
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
// printNumbers(1,10);

function printSquare(number){
    for (let i = 0; i < number; i++){
        // repeat will repeat the specified string the number of times you tell it to
        console.log('-'.repeat(number))
    }
}
// printSquare(5);

function printBox(width, height){
    // Top of box
    for(let i = 1; i <= height; i++){
        if(i === 1 || i === height){
            console.log(' ' + '-'.repeat(width - 2) + ' ')
        }else{
            console.log('|' + ' '.repeat(width-2) + '|')
        }
    }
}
// printBox(6, 4)

function printBanner(text){
    for (let i = 0; i < 3; i++){
        if (i === 0 || i === 2){
            console.log('-'.repeat(text.length + 4));
        } else {
            console.log('- ' + text + ' -');
        }
    }
}
printBanner('Welcome to DigitalCrafts')