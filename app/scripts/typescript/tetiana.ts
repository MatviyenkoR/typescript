/**
	* TypeScript file
*/
class Student {
    private firstName: string;
    private lastName: string;
    public yearOfBirth: number;
    public schoolName: string;
    public city: string;

    constructor( firstName: string = '...', lastName: string = '...', schoolName: string = '...', city: string = '...', yearOfBirth: number = 1990 ) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
        this.schoolName = schoolName;
    }

    // public age() {
    //     return 2014 - this.yearOfBirth;
    // }

    public printStudentFullName(): void {
        console.log( this.lastName + ',' + this.firstName, + this.yearOfBirth);
    }

}

let student = new Student('Tom', 'Hanks', 'World Acting School');
// let age = student.age();
let fullName = student.printStudentFullName();
let schoolName = student.schoolName;

// class Menu {
//   public items: string[];
//   public pages: number;
//
//   constructor(itemList: string[], totalPages: number) {
//     this.items = itemList;
//     this.pages = totalPages;
//   }
//   public list(): void {
//     console.log('Our menu for today: ');
//     for ( let i = 0; i < this.items.length; i = i + 1 ) {
//       console.log(this.items[i]);
//     }
// }
//
// let sundayMenu = new Menu(['pancakes', 'waffles', 'orange juice'], 1);
//   sundayMenu.list();

// function buildName(firstName: string, ...restOfName: string[]) {
//  return firstName + ' ' + restOfName.join(' ');
// }
//
// let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
//
// console.log(employeeName);

// function buildName (firstName: string, lastName?: string) {
//     if (lastName) {return firstName + ' ' + lastName;
//       } else { return firstName; }
// }
//
// let result1 = buildName();

// interface ClockInterface {
//     h (hour: number, minute: number);
// }
//
// class Clock implements ClockInterface  {
//     public currentTime: Date;
//     constructor(hour: number, minute: number) {
//       this.hour();
//       this.minute();
//      }
// }

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
