/**
	* TypeScript file
  */
module Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

function printLabel(labelledObj: {label: string}) {
  console.log(labelledObj.label);
}
let myObj = {size: 20, label: 'Size 20 Object'};
printLabel(myObj);

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

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
