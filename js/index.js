/*
1. LIST BOOKS
   When a user clicks the title of a book, display the book's thumbnail,
   description, and a list of users who have liked the book. This
   information should be displayed in the div#show-panel element.
2. SHOW DETAILS
   A user can like a book by clicking on a button. Display a LIKE button
   along with the book details. When the button is clicked, send a PATCH
   request to http://localhost:3000/books/:id with an array of users who
   like the book, and add a new user to the list.
3. After clicking the like button, the user's name should also be
   displayed along with the list of users who have liked the book in the
   book details section.

4. BONUS
   If a user has already liked a book, clicking the LIKE button a second
   time should remove that user from the list of users who have liked the
   book.
   Make a second PATCH request with the updated array of users, removing
   your user from the list. Also remove the user from the DOM.
*/


document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault()
  let bookList = document.getElementById("list")
  let showPanel = document.getElementById("show-panel")

  fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.forEach(renderBooksList)
    })

  const renderBooksList = (book) => {
    let title = document.createElement("li")
    title.textContent = book.title
    bookList.appendChild(title)

    title.addEventListener("click", (e) => {
      e.preventDefault()
      showPanel.innerHTML = ""
      const renderBookInfo = (info) => {
        let thumbnail = document.createElement("img")
        let title = document.createElement("h3")
        let subtitle = document.createElement("h3")
        let author = document.createElement("h3")
        let description = document.createElement("p")

        thumbnail.src = info.img_url
        title.textContent = info.title
        subtitle.textContent = info.subtitle
        author.textContent = info.author
        description.textContent = info.description

        showPanel.appendChild(thumbnail)
        showPanel.appendChild(title)
        showPanel.appendChild(subtitle)
        showPanel.appendChild(author)
        showPanel.appendChild(description)
      }
      renderBookInfo(book)

    })


  }


});
