 let clickCount = 0;
var actionList = [""];
 
function addAction(action) {
    actionList.push(action)

    var jacksonsBlackMagic = actionList.slice().reverse().join("\n");
    var terminal = document.getElementById("terminal")

    terminal.value = jacksonsBlackMagic
}

function changeText() {
    // change the id in the parantheses 
    const headingElement = document.getElementById("bigButton");

    // you can change the replacement text here
    clickCount += 1;
    headingElement.textContent = "that other button was clicked " + clickCount + " times";

    if (clickCount > 20) {
        headingElement.textContent = headingElement.textContent + " youre a nerd btw"
    }
}