function hello(name = 'world') {
    console.log('Hello, ' + name + '!');
}
// prompt('Whats your name?') cant use this because it doesn't exist for node
hello();

function madLib(name = 'Pete', subject = 'Stem') {
    const newString = name + '\'s favorite subject in school is ' + subject + '.';
    return newString;
}
console.log(madLib());

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
console.log(example)