const titleInput = document.querySelector('#titleInput')
const authorInput = document.querySelector('authorInput')
const isbnInput = document.querySelector('isbnInput')
const form = document.querySelector('form')

form.addEventListener('submit', addBook)

function addBook(event){
    const title = titleInput.value

    const tr = document.createElement('tr')
    tr.className ="andmed"
    const text = document.createTextNode(title)
    tr.appendChild(text)
    console.log(tr)

    event.preventDefault()
}
/*function addBook(event){
    const author = authorInput.value
    const tr = document.createElement('tr)
    tr.className = 'andmed'
    const text = document.createTextNode(author)
    tr.appendChild(text)

    event.preventDefault()

}
function addBook(event){
    const isbn = isbnInput.value
    const tr = document.createElement('tr')
    tr.className = 'andmed'
    const text = document.createTextNode(isbn)
    tr.appendChild(text)

    event.preventDefault()
}*/



