class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
console.log("user", User);
