document.addEventListener('DOMContentLoaded', () => { //element.addEventListener() method to attach an event handler to the document a specified element.
    const squares = document.querySelectorAll('.grid div')//The querySelectorAll() method returns all elements in the document that matches a specified CSS selector.
    const playerDisplay = document.querySelector('#player') //The querySelector() method returns the first element that matches a specified CSS selector in the document 

    let currentPlayer = 'playerX'

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)// Events: clicks the mouse
    })

    function clickOutcome(e) { // Events: when a user clicks the mouse
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer

        if (currentPlayer === 'playerX') {
            squares[index].classList.add('playerX')
            currentPlayer = 'playerO'
        } else {
            squares[index].classList.add('playerO')
            currentPlayer = 'playerX'
        }
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(users => {
            console.log(users)
        })

})