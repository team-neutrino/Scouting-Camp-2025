function changeText(id) {
    // change the id in the parantheses
    const headingElement = document.getElementById(id);
    // you can change the replacement text here
    headingElement.textContent = "Text Changed Using Javascript";

    for (var i = 0; i < 5; i++) {
        console.log("hello")
    }
}

function clickButton(id, action) {
    var actionList = []

    actionList.push(action)

    const element = document.getElementById("terminal")
    console.log("here")

    element.textContent = actionList;
}