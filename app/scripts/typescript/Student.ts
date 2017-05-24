/**
 * Student class
 * @export Student giving access to this class
 */

/**
 * Import JQuery definition plugin
 * @import jQuery
 */
import * as $ from 'jquery';

/**
 * Creating Class Student
 * @class name in pascal case
 */
export class Student {
    /**
     * Creating Class constructor
     * @body Student class
     * can be empty but still need to be called
     * callimg new Student() return string fields with '...'
     */
     constructor(public firstName: string = '...',
                 public lastName: string = '...',
                 public city: string = '...') {}

     /**
      * Creating Class methods
      * @methods
      */

      /**
       * Method getData()
       * return :string fields
       */
     public getData(): string {
       return this.firstName = $('#name').val() || ' X',
              this.lastName = $('#last').val() || 'Mr.',
              this.city = $('#city').val() || 'nowhere';
     }

     /**
      * Method greet()
      * @method getData()
      * return placed text to #root container
      */
     public greet(): any {
       this.getData();
       const greeting: string = 'Hello ' + this.printFullInfo() + '!';
       return $('#root').text(greeting);
     }

     /**
      * Method printStudentFullName()
      * return string text
      */
     private printStudentFullName(): string {
         return this.lastName + ' ' + this.firstName;
     }

     /**
      * Method printFullInfo()
      * return string text from @method printStudentFullName() adding string city
      */
     public printFullInfo(): string {
       return this.printStudentFullName() + ' from ' + this.city;
     }

     /**
      * Method greetingWith
      * call function
      * return string text from @method printFullInfo() adding extra text
      */
     public greetingWith = (): string => {
       return this.printFullInfo() + ' greeting with you!';
     }
 }
