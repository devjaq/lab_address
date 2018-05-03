"use strict";
{



class AddressBook {
  constructor (contacts) {
   this.contacts = [
    "Alyssa Juday", "John Doe", "Mark Morrow"
   ];
  };

  // AddressBook methods
  add(info) { // creates an object and puts it in contacts array
    let newContact = new Contact (info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
    console.log(this.contacts);
  };
  deleteAt(index) { // deletes something by index
    // let deletePrompt = prompt("Which index should be removed?");
    this.contacts.splice(index, 1);
    
  };
  printIt() { // console.log all AddressBook contents
    console.log(this.contacts);
  };
  deleteByName(deletePrompt) { // deletes something by name instead of index
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === deletePrompt) {
        console.log(this.contacts[i].name);
        this.contacts.splice(i,1);
        console.log(`${deletePrompt} was deleted.`);
      }
    }
  }
}

// Subclass Contact
class Contact {
  constructor (name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone; 
    this.relation = relation;
  };
};

const openBook = new AddressBook();

// console.log(openBook);
// const test1 = {"John Doe", "jodo@gmail.com", "313-123-1234", "acquaintance"};
// openBook.add(info);

// Prompt Loop
while (true) {
  let query = prompt("Would you like to add (A), delete (D), print (P), or quit (Q)?");
  if (query === 'a') { // Case: Add
    let info = {
    name: prompt("Please enter the Contact's full name."),
    email: prompt("Please enter the Contact's email."),
    phone: prompt("Please enter the Contact's phone number."),
    relation: prompt("Please enter your relationship with this Contact.")
    }
    openBook.add(info);
    }  else if (query === 'd') { // Case: Delete
      // let deletePrompt = prompt("Which index should be removed?");
      // openBook.deleteAt(deletePrompt);
    let deletePrompt = prompt("Which name should be removed?");
    openBook.deleteByName(deletePrompt);
  } else if (query === 'p') { // Case: Print
    openBook.printIt();
  } else if (query === 'q'){
    console.log("Goodbye!");
    break;
  };
};




// The End
}