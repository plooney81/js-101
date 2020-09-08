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