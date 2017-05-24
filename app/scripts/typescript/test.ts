/**
 * Table class
 * @import Student class
 */

 /**
  * Import JQuery definition plugin
  * @import jQuery
  */
import * as $ from 'jquery';

/**
 * Import Student class
 * @import Student
 */
import {Student} from './Student';

/**
 * Create class Table
 * @extends Student class
 */
class Table extends Student {

    /**
     * Table class variables: type
     */
      public table: HTMLTableElement;
      public thead: HTMLTableSectionElement;
      public tbody: HTMLTableSectionElement;
      private rows: number = 0;

      /**
       * Creating Class constructor
       * @body Table class
       * can be empty but still need to be called
       * callimg new Table() return build table in #wrapper
       */
      constructor(public id: JQuery  = $('#wrapper')) {
        super();
        this.table = <HTMLTableElement> document.createElement('table');
        this.thead = <HTMLTableSectionElement> this.table.createTHead();
        this.tbody = <HTMLTableSectionElement> this.table.createTBody();
        this.id.append(this.table);
        const hrow = <HTMLTableRowElement> this.table.tHead.insertRow(0);
        const data: string[] = ['#', 'Name', 'LastName', 'City', 'Greeter', 'del'];
        for (let i = 0; i <= 5; i = i + 1) {
          if (data != null)  {
            const cell = hrow.insertCell(i);
            cell.innerText = data[i];
          }
        }
      }

      public add(): void {
        super.getData();
        const newPerson = this.table.tBodies[0].insertRow(this.rows);
        const personData: string[] = [this.rows.toString(), this.firstName, this.lastName, this.city, this.greetingWith(), 'delete'];
        for (let i = 0; i <= 5; i = i + 1) {
          if (personData != null && i === 5)  {
            const cell = newPerson.insertCell(i);
            cell.id = 'delete';
            const button = <HTMLElement> document.createElement('button');
            button.onclick = () => this.deleteRow(event);
            cell.appendChild(button);
          } else if (personData != null) {
            const cell = newPerson.insertCell(i);
            cell.innerText = personData[i];
          }
        }
        this.rows = this.rows + 1;
      }
      public deleteRow(e: Event): MouseEvent {
        const target = <HTMLElement> e.target;
        target.parentElement.parentElement.style.display = 'none';
        return;
      }
  }

  class Timer {
    private clockHandler: number;
    private target: HTMLElement;

  constructor(el: HTMLElement) {
    this.target = el;
    this.target.innerText = 'Time is now:' + this.getTime();
  }

   private getTime() {
      let date;
      return  date = new Date();
      //  return date;
   }

   public start(): void {
       this.clockHandler = setInterval((parent) => {
           this.target.innerText = 'Time is now: ' + this.getTime();
       }, 1000);
   }

   private stop(): void {
       clearInterval(this.clockHandler);
   }

}

  // ToDO
  const firstOne = new Student();
  firstOne.greet();
  const newTab = new Table();
  const timeEl = document.getElementById('cityTime');
  const timer = new Timer(timeEl).start();
  // Click greet
  const greeting = document.getElementById('greet');
  greeting.addEventListener('click', () => {
    firstOne.greet();
    newTab.add();
  });
