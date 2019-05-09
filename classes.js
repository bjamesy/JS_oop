class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true; 
    }
    // statics function the same way as seperately defined prototype methods 
    // dont get instatiated automatically - must be called on class (Book)
    static topBookShelf() {
        return 'Chapters';
    }
}

// instantiate an object
const book1 = new Book('being and time', 'martin heidegger', '1927');
book1.revise('1980');
console.log(book1);

// calling something defined as static 
console.log(Book.topBookShelf());