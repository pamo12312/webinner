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


const container = document.getElementById("container");
const button = document.getElementById("myButton");

function funkcePoKliknuti() {
    // Vytvoření nového div elementu
    const novyElement = document.createElement("div");

    // Nastavení náhodné barvy pozadí
    const nahodnaBarva = getRandomColor();
    novyElement.style.backgroundColor = nahodnaBarva;

    // Přidání textu
    novyElement.textContent = "Nový Element 🌈";

    // Přidání nového elementu do "container"
    container.appendChild(novyElement);

    // Přidání třídy pro zvýraznění
    novyElement.classList.add("highlighted");

    // Přidání event listeneru pro odstranění elementu po kliknutí
    novyElement.addEventListener("click", function () {
        container.removeChild(novyElement);
    });
}

button.addEventListener("click", funkcePoKliknuti);

// Funkce pro generování náhodné barvy
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}