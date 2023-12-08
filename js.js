function displayInnerText() {
    let resultElement = document.querySelector('#result');
    let testElement = document.querySelector('#testElement');
    resultElement.innerText = 'innerText: ' + testElement.innerText;
}


function displayTextContent() {
    let resultElement = document.querySelector('#result');
    let testElement = document.querySelector('#testElement');
    resultElement.textContent = 'textContent: ' + testElement.textContent;
}
displayInnerText();
displayTextContent();