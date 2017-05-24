/**
	* TypeScript file
  */

class Menu {
  public items: string[];
  public pages: number;

  constructor(itemList: string[], totalPages: number) {
    this.items = itemList;
    this.pages = totalPages;
  }
  public list(): void {
    console.log('Our menu for today: ');
    for ( let i = 0; i < this.items.length; i = i + 1 ) {
      console.log(this.items[i]);
    }
}

let sundayMenu = new Menu(['pancakes', 'waffles', 'orange juice'], 1);
  sundayMenu.list();
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
// let result1 = buildName();  //работает

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
