nameCheker();

function nameCheker(){
    let first = prompt("Enter Name", "Name");
    let last = prompt("Enter Surname", "Surname")
    first.trim;
    last.trim;
    if (!(/^[a-z]+$/i.test(first)) || !(/^[a-z]+$/i.test(last))) {
        alert("Invalid input");
        return null;
    }
    first = first.charAt(0).toUpperCase() + first.slice(1);
    last = last.charAt(0).toUpperCase() + last.slice(1);
    alert(first + " " + last);
}