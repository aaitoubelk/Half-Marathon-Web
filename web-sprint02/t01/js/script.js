let jInt = 11;
let bigInt = BigInt(9007199254740991);
let str = "String";
let bool = true;
let someNull = null;
let isUnderfined = undefined;
let ob = new Object();
let someSumbol = Symbol('symbol');
let funct = function myFunc() {};

chekTyp("jInt", jInt);
chekTyp("bigInt", bigInt);
chekTyp("str", str);
chekTyp("bool", bool);
chekTyp("someNull", someNull);
chekTyp("isUnderfined", isUnderfined);
chekTyp("ob", ob);
chekTyp("someSumbol", someSumbol);
chekTyp("funct", funct);

function chekTyp(name, value) {
    if (typeof value == "function") {
        alert(`${name} is ${typeof value}\n`);
    } else {
        if(value === null) {
            alert(`${name} is null\n`);
        }
        else {
            alert(`${name} is ${typeof value}\n`);
        }
    }
}
