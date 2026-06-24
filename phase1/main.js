let names = [];
let isOver = false;
while (!isOver) {
    let name = Prompt("Enter another name or press cancel.")
    if (name != null) {
     names.push(name);
    } else {
     isOver = true;
    }
}
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}