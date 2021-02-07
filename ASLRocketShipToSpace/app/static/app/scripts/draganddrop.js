window.addEventListener('DOMContentLoaded', (e) => {
    const names = ["Amir", "Justin", "Burhan", "Mike", "Sina", "Josh", "Ali", "Jack"];
    const word = document.getElementById("word");
    const answer = document.getElementById("answer");
    const signBox = document.getElementById("signBox");
    const button = document.getElementById("submit");

    let chosenWord = names[Math.floor(Math.random() * names.length)];
    word.textContent = chosenWord;


    for (let i = 0; i < chosenWord.length; i++) {
        let img = document.createElement("img");
        img.src = `/static/app/signs/letter_${chosenWord[i].toUpperCase()}.png`;
        img.draggable = true;
        img.classList.add('handSymbol');
        img.alt = chosenWord[i].toUpperCase();
        img.addEventListener("dragstart", (e) => {
            img.classList.add('dragging');
        });
        img.addEventListener('dragend', (e) => {
            img.classList.remove('dragging');
        });
        signBox.appendChild(img);
    }


    const divs = [answer, signBox];


    divs.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            const elementAfter = getAfterDragIndex(container, e.clientX);
            const draggable = document.querySelector('.dragging');
            if (elementAfter) {
                container.insertBefore(draggable, elementAfter);
            } else {
                container.appendChild(draggable);
            }
        });
    });


    function getAfterDragIndex(container, x) {
        let notDraggingArr = [...container.querySelectorAll('img:not(.dragging)')];
        return notDraggingArr.reduce((closestAfter, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.right - box.width / 2;
            if (offset < 0 && offset > closestAfter.offset) {
                return {offset: offset, element: child};
            } else {
                return closestAfter;
            }
        }, {offset: Number.NEGATIVE_INFINITY}).element
    }

    button.addEventListener("click", () => {
        let isCorrect = true;
        for(let i = 0; i< chosenWord.length; i++){
            console.log(answer.children[i].alt);
            if(chosenWord[i].toUpperCase() != answer.children[i].alt){
                isCorrect = false;
                break;
            }
        }
        alert(isCorrect? 'CORRECT!': 'INCORRECT :(!')
    })

});
