function checkDevision(beginRange = 1, endRange = 100){
    for (let i = `${beginRange}`; i <= `${endRange}`; i++) {
        let str = "";

        str += i;
        if (i % 2 === 0) {
            str += " is even";
        }
        if (i % 3 === 0) {
            if (str.length > 3)
                str += ",";
            str += " is multiple of 3";
        }
        if (i % 10 === 0) {
            if (str.length > 3)
                str += ",";
            str += " is multiple of 10";
        }
        if (str.length <= 3)
            str += " -";
        str += "\n";
        console.log(str);
    }
}

let beginRange = +prompt("Enter beginning of the range", '1');
let endRange = +prompt("Enter end of the range", '100');

if (!(+beginRange || +endRange)) {
    checkDevision();
}
else    
    checkDevision(beginRange, endRange);