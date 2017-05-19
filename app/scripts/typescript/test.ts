/**
	* TypeScript file
  */
module First {
  interface People {
    table: HTMLTableElement;
    thead: HTMLTableSectionElement;
    tbody: HTMLTableSectionElement;
  }
  class Student {
      // Constructor
      constructor(public firstName: string = '...',
                  public lastName: string = '...',
                  public city: string = '...') {}
      // Methods
      public getData(): string {
        return this.firstName = (<HTMLInputElement>document.getElementById('name')).value || ' X',
               this.lastName = (<HTMLInputElement>document.getElementById('last')).value || 'Mr.',
               this.city = (<HTMLInputElement>document.getElementById('city')).value || 'nowhere';
             }
      public greet(): string {
        this.getData();
        const greeting: string = 'Hello ' + this.printFullInfo() + '!';
        const container = <HTMLElement> document.getElementById('root');
        return container.innerText = greeting;
      }
      private printStudentFullName(): string {
          return this.lastName + ' ' + this.firstName;
      }
      public printFullInfo(): string {
        return this.printStudentFullName() + ' from ' + this.city;
      }
      public greetingWith = (): string => {
        return this.printFullInfo() + ' greeting with you!';
      }
  }

  class Table extends Student implements People {
      public table: HTMLTableElement;
      public thead: HTMLTableSectionElement;
      public tbody: HTMLTableSectionElement;
      private rows: number = 0;

      constructor(public id: HTMLElement  = document.getElementById('wrapper')) {
        super();
        this.table = <HTMLTableElement> document.createElement('table');
        this.thead = <HTMLTableSectionElement> this.table.createTHead();
        this.tbody = <HTMLTableSectionElement> this.table.createTBody();
        this.id.appendChild(this.table);
        const hrow = <HTMLTableRowElement> this.table.tHead.insertRow(0);
        const cell = hrow.insertCell(0);
        cell.innerText = '#';
        const cell1 = hrow.insertCell(1);
        cell1.innerText = 'Name';
        const cell2 = hrow.insertCell(2);
        cell2.innerText = 'LastName';
        const cell3 = hrow.insertCell(3);
        cell3.innerText = 'City';
        const cell4 = hrow.insertCell(4);
        cell4.innerText = 'Greeter';
        const cell5 = hrow.insertCell(5);
        cell5.innerText = 'del';
      }

      public add(): void {
        super.getData();
        const newPerson = this.table.tBodies[0].insertRow(this.rows);
        const id = newPerson.insertCell(0);
        id.innerText =  this.rows.toString();
        const name = newPerson.insertCell(1);
        name.innerText = this.firstName;
        const last = newPerson.insertCell(2);
        last.innerText = this.lastName;
        const city = newPerson.insertCell(3);
        city.innerText = this.city;
        const greet = newPerson.insertCell(4);
        greet.innerText = this.greetingWith();
        const del = newPerson.insertCell(5);
        del.id = 'delete';
        const button = <HTMLElement> document.createElement('button');
        button.onclick = () => this.deleteRow(event);
        del.appendChild(button);
        this.rows = this.rows + 1;
      }
      public deleteRow(e: Event): MouseEvent {
        const target = <HTMLElement> e.target;
        // return console.log(target.remove);
        // target.parentElement.parentElement.remove();
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
}
