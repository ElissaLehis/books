const titleInput = document.querySelector('#titleInput')
const authorInput = document.querySelector('#authorInput')
const isbnInput = document.querySelector('#isbnInput')
const form = document.querySelector('form')

form.addEventListener('submit', addBook)

function addBook(event) {
    const title = titleInput.value
    const author = authorInput.value
    const isbn = isbnInput.value

    const tr = document.createElement('tr')
    tr.className = "andmed"
    const text1 = document.createTextNode(title)
    const text2 = document.createTextNode(author)
    const text3 = document.createTextNode(isbn)
    tr.appendChild(text1)
    tr.appendChild(text2)
    tr.appendChild(text3)


    event.preventDefault()
}



