const titleInput = document.querySelector('#titleInput')
const authorInput = document.querySelector('authorInput')
const isbnInput = document.querySelector('isbnInput')
const form = document.querySelector('form')

form.addEventListener('submit', addBook)

function addBook(event){
    const title = titleInput.value
    const author = authorInput.value
    const isbn = isbnInput.value
    event.preventDefault()
}




