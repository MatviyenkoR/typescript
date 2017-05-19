/**
	* TypeScript file
  */
// function greeter(person : string) {
//     return 'Hello,'  + person;
// }
// let users = 'Jane User';

// document.body.innerText = greeter(users);

interface Person {
  firstName: string;
  lastName: string;
}

class Student implements Person {
  public fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
      // document.body.innerText = this.fullName;
  }
  public greetersy(): string {
    return 'Hello, ' + this.fullName;
  }
}
let user = new Student('Jane', 'M.', 'User');

document.body.innerText = user.greetersy();
