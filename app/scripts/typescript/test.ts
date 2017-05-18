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
      public deleteRow(): MouseEvent {
        return;
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
        button.onclick = () => this.deleteRow();
        del.appendChild(button);
        this.rows = this.rows + 1;
      }
  }
  class Timer {
    private element: HTMLElement;
    private span: HTMLElement;
    private timerToken: number;

    constructor (element: HTMLElement) {
        this.element = element;
        this.element.innerText = 'The time is: ';
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        const t = new Date();
        t.setUTCDate(3);
        this.span.innerText = t.toString();
    }

    public start() {
        this.timerToken = setInterval(() => { const t = new Date();
                                              t.setUTCDate(3);
                                              this.span.innerText = t.toString();
                                            }, 1000);
    }

    private stop() {
        clearTimeout(this.timerToken);
    }

}

  // ToDO
  const firstOne = new Student().greet();
  const newTab = new Table();
  const timeEl = document.getElementById('cityTime');
  const timer = new Timer(timeEl);
  timer.start();
  // Click greet
  const greeting = document.getElementById('greet');
  greeting.addEventListener('click', () => {
    const newOne = new Student().greet();
    newTab.add();
  });
}
