/**
  * Timer class
  */
export class Timer {

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
