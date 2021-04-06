let animal = prompt("Enter an animal name\nlength <= 20, only one word that contains only letters", "bat");
let gender = prompt("Enter gender\naccepts only male, female, or blank (not case sensitive)", "male");
let age = prompt("Enter age\n length <= 5, only digits, cannot start with a zero", "25");

function mkName(animal, gender, age) {
    if (!/^[A-Z]{1,20}$/ig.test(animal)) {
        alert("Invalid animal input");
        animal = null;
    }
    if (!(/^[1-9][0-9]{0,4}$/g.test(age))) {
        alert("Invalid age input");
        age = null;
    }
    if (!/^male$/i.test(gender) && !/^female$/i.test(gender) &&
    !/^$/.test(gender)) {
        alert("Invalid gender input");
        gender = null;
    }
    if (animal == null ||age == null || gender == null) {
        return null;
    }

    let result;
    if (gender === `male` && +age < 18) {
        result = "boy";
    }
    if (gender === `male` && +age >= 18) {
        result = "man";
    }
    if (gender === `female` && +age < 18) {
        result = "girl";
    }
    if (gender === `female` && +age >= 18) {
        result = "woman";
    }   
    if (gender.length == 0 && +age < 18) {
        result = "kid";
    }
    if (gender.length == 0 && +age >= 18) { 
        result = "hero";
    }
    alert(`The superhero name is: ${animal}-${result}!`);
    return 1;
}

mkName(animal, gender, age);
