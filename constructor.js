function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    let status = read ? "already read" : "not read yet"
    console.log(title + " by " + author + ", " + pages + "pages, " + status)
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"