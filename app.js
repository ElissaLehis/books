//user input form
const form = document.querySelector('form');
form.addEventListener('submit', addBook);
const taskList = document.querySelector('.table');
taskList.addEventListener('click',deleteBook);
document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage);

//get form submit value from form input
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn');



function getBooksFromLocalStorage(){
    let books;

    if (localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.forEach(function (book){
        const tr = document.createElement('tr');
        const trContent = `<td>${book[0]}</td>
                       <td>${book[1]}</td>
                       <td>${book[2]}</td>
                       <td><a href="#">X</a></td>
                    `
        tr.innerHTML = trContent
        bookList = document.querySelector('#books-list');
        bookList.appendChild(tr);
    });
}

//add book function
function addBook(event) {
    const title = titleInput.value
    const author = authorInput.value
    const isbn = isbnInput.value


//create tr DOM element
    const tr = document.createElement('tr');
    const trContent = `<td>${title}</td>
                       <td>${author}</td>
                       <td>${isbn}</td>
                       <td><a href="#">X</a></td>
                      `
    tr.innerHTML = trContent
    bookList = document.querySelector('#books-list');
    bookList.appendChild(tr);

//clear form input value
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''

//add book
    addBookToLocalStorage(title,author,isbn);
    event.preventDefault();
}

function deleteBook(event){
    if(event.target.textContent == 'X'){
        if(confirm("Do you want to delete this task?")){
            console.log(event.target.closest('tr').remove());
            book = event.target.closest('tr').remove();

            deleteBookFromLocalStorage(book);
        }
    }
}
function deleteBookFromLocalStorage(book){
    let books;
    if (localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.forEach(function (bookElement,index){
        if(bookElement.book === book){
            books.splice(index,1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
}

//add book to LS function
function addBookToLocalStorage(title,author,isbn){
    let books;
    if (localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }

    books.push([title,author,isbn])
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books)
}



