const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/googlebooks")

const bookSeed =
{
    authors: ["JK Rowling"],
    description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    image: "https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71KZ7UyMWYTAxvHEOScRJmhfS4bc-46VOD1Q6xY6BXWaLIIO9QisdXZzt3bjJUGVkDrLEiAK4ufXEpu7CkkBgE_FCGuQd_mDsvrrHzfmX5Y-kvRBzcDnlkG4tiMMoWGbtOb2EM8",
    link: "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?id=wrOQLV6xB-wC",
    title: "Harry Potter and the Sorcerer's Stone",
}
db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
