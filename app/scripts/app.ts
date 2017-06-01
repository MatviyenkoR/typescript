/**
 * Basse class
 */
/**
* @imports
*/
import {Timer} from './typescript/Timer';
import {Student} from './typescript/Student';
import {Table} from './typescript/Table';
import {ParallaxContainer} from './typescript/parallax';
/**
* End @imports
*/

if (window.location.pathname.indexOf('Index') > -1) {
  // ToDO
  const firstOne = new Student();
  firstOne.greet();
  const newTab = new Table();
  // Click greet
  const greeting = document.getElementById('greet');
  greeting.addEventListener('click', () => {
    firstOne.greet();
    newTab.add();
  });
  const timeEl = document.getElementById('cityTime');
  const timer = new Timer(timeEl).start();
}
// Stars
if (window.location.pathname.indexOf('parallax') > -1) {
  const starFall = new ParallaxContainer(<HTMLCanvasElement> document.getElementById('starfield'), 20);
}
