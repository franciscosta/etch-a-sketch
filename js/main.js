function createSquares(n) {

    document.getElementById("input").value = n;

    let container = document.querySelector('.container');
    let counter = 0;

    for (let i = 0; i < n; i++) {

        let innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-container');

        for (let i = 0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add('square');

            // Set Attribure
            let attr = document.createAttribute("data-counter");
            attr.value = counter;
            square.setAttributeNode(attr);
            square.style.cssText += `height:${window.innerWidth / n}px; width: ${window.innerWidth / n}px`;

            innerContainer.appendChild(square);
            counter++;

            if (n === n * 0.75) {
                break;
            }
        }

        container.appendChild(innerContainer);
    }

}

createSquares(50);

function clear() {

    let button = document.querySelector('.clear');
    button.addEventListener('click', function() {
        let paintedElements = document.querySelectorAll('.selected');
        for (let i = 0; i < paintedElements.length; i++) {
            paintedElements[i].classList.remove('selected');
        }
    });

}

clear()


function paint(target) {
    document.querySelector(`[data-counter="${target}"]`).classList.add('selected');
}

function errase(target) {
    document.querySelector(`[data-counter="${target}"]`).classList.remove('selected');
}


function deleteGrid() {
    let container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function refreshGrid(e) {
    e.addEventListener('click', function() {

        let input = document.getElementById("input").value;

        if (input === "") {
            return;
        }

        input = Number(input);
    
        deleteGrid();

        console.log(input);
    
        if (input <= 200) {
            createSquares(input);
        } else if (input > 200) {
            createSquares(200);
        } else if (input <= 0) {
            createSquares(10)
        }
        
    });
}

// Change grid

let button = document.querySelector(".changeGrid");
refreshGrid(button);


// Style change

function styleChange(n) {

    let selected = document.querySelectorAll('.selected');
    selected.forEach(s => s.classList.add(`b${n}`));


}

window.addEventListener('click', function(e) {
    if (e.target.attributes['data-back']) {
        console.log(e.target.attributes['data-back'].value);
        styleChange(e.target.attributes['data-back'].value)
    }
});





window.addEventListener('mouseover', function(e){

    if (e.shiftKey) {
        let target = e.target.attributes["1"].value;
        paint(target);
    } 
    
    if (e.altKey) {
        let target = e.target.attributes["1"].value;
        errase(target);
    }
})


// let input = document.querySelector('#input');

// input.addEventListener('keypress', function(e) {

//     if (e.key === "Enter") {
//         location.reload();
//         createSquares(Number(input.value)); 
//     }

    

// });