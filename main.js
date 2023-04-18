function User(firstName, lastName, age, comment){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.comment = comment;
}
let  author = new User("Bach", "Thien", 18, "Toi la mot nguoi code do");
console.log(author);