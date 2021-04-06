function concat() {
    if(arguments.length === 2) return arguments[0] + " " + arguments[1];
    let firstString = arguments[0];
    function detectPhrase() {
        ++detectPhrase.count;
        let secondString = prompt('Введите вторую часть строки!');
        console.log(firstString + " " + secondString);
    }
    detectPhrase.count = 0;
    return detectPhrase;
}
