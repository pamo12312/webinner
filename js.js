function displayInnerText() {
    let resultElement = document.querySelector('#result');
    let testElement = document.querySelector('#testElement');
    resultElement.innerText = 'innerText: ' + testElement.innerText;
}

// Function to get and display textContent using querySelector
function displayTextContent() {
    let resultElement = document.querySelector('#result');
    let testElement = document.querySelector('#testElement');
    resultElement.textContent = 'textContent: ' + testElement.textContent;
}


// Run both functions
displayInnerText();
displayTextContent();