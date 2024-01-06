class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  // Метод changeEmail

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
console.log("user", User);
