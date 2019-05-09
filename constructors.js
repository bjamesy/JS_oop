// constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

// instantiate an object
const book2 = new Book('stalker', 'james', '1993');
const book1 = new Book('elmo', 'jon', '1980');

console.log(book1.getSummary());
console.log(book2);