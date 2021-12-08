//user input form
const form = document.querySelector('form')
form.addEventListener('submit', addBook)
const taskList = document.querySelector('.table')
taskList.addEventListener('click',deleteBook)

//get form submit value from form input
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const isbnInput = document.querySelector('#isbn')


//add book function
function addBook(event) {
    const title = titleInput.value
    const author = authorInput.value
    const isbn = isbnInput.value


//create tr DOM element
    const tr = document.createElement('tr')
    const trContent = `<td>${title}</td>
                      <td>${author}</td>
                      <td>${isbn}</td>
                      <td><a href="#">X</a></td>
                      `
    tr.innerHTML = trContent
    bookList = document.querySelector('#books-list')
    bookList.appendChild(tr)

//clear form input value
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
    event.preventDefault()
}

function deleteBook(event){
    if(event.target.textContent == 'X'){
        if(confirm("Do you want to delete this task?")){
            console.log(event.target.closest('tr').remove());
        }
    }

}


