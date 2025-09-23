var actionList = [0, 0, 0, 0, 0]

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
    const element = document.getElementById("terminal")

    element.value += action

    element.value += "\n"
    addToCompressList(id)
}

function addToCompressList(id) {
    actionList[id] += 1

    console.log(actionList)
}