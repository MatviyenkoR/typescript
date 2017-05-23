/**
	* TypeScript file
  */
let alice: SomeType = new Employee('Microsoft', 'Alice');

class SomeType {
    public name: string;
    constructor(userName: string) {
        this.name = userName;
    }
}

class Employee extends SomeType {
    public company: string;
    constructor(employeeCompany: string, userName: string) {
        super(userName);
        this.company = employeeCompany;
    }
}

function getUserName(user: SomeType): string {
    return user.name;
}

function userFactory(name: string): SomeType {
    return new Employee('не установлено', name);
}

let alice: Employee = new Employee('Microsoft', 'Alice');
let userName = getUserName(alice);
console.log(userName);

let tom = userFactory('Tom');
userName = getUserName(tom);
console.log(userName);

// module User {
//   class SomeType {
//     constructor(public firstName: string = ' ',
//                 public lastName: string = ' ',
//                 public city: string = ' ') {
//                   this.firstName = ();
//                   this.lastName = ();
//                   this.city = ();
//                 }
//   }
