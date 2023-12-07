



const createTombolaTable = function() {
    const mainDiv = document.getElementById('mainStructure');

    for (let i=0; i<90; i++) {
        const cellDiv = document.createElement('div');
        const cellValue = document.createElement('h3');
        cellValue.innerHTML = i+1

        cellDiv.appendChild(cellValue);
        mainDiv.appendChild(cellDiv);
    }
}


function SearchNumber() {
    let randomValue = Math.floor(Math.random() * 90 + 1);
    let containers = document.querySelectorAll("h3");

    containers.forEach((element) => {
        if (element.innerHTML == randomValue) {
            if (element.style.backgroundColor == 'red') 
                SearchNumber();

            element.style.backgroundColor = 'red';
        }
    });
}



window.addEventListener("load", (event) => {
    createTombolaTable()

    const btnSelector = document.getElementById('btn-select');
    
    btnSelector.addEventListener("click", (e) => {
        SearchNumber();
    });
});



/**
var AlreadyChecked = []

function SearchNumber_Checked(randomValue) {
    let containers = document.querySelectorAll("h3");

    containers.forEach((element) => {
        if (element.innerHTML == randomValue) {

            if (AlreadyChecked.length < 91 && AlreadyChecked.find((element) => { element === randomValue })) {
                SearchNumber(Math.floor(Math.random() * 90));
            }

            element.style.backgroundColor = 'red';
            AlreadyChecked.push(randomValue);
        }
    });
}

*/

