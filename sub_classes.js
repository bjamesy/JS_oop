class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

// subClass of Magazine
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// instantiate Magazine
const mag1 = new Magazine('SI', 'peter King', '2018', 'Jan');

 console.log(mag1.getSummary());