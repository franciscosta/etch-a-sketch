function createSquares(n) {

    let container = document.querySelector('.container');
    let counter = 0;

    for (let i = 0; i < n; i++) {

        let innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-container')

        for (let i = 0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add('square');

            // Set Attribure
            let attr = document.createAttribute("data-counter");
            attr.value = counter;
            square.setAttributeNode(attr);
            square.style.cssText += `height:${window.innerHeight / n}px`;

            innerContainer.appendChild(square);
            counter++;
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