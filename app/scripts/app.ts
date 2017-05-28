/**
 * Basse class
 */
/**
* @imports
*/
import {Timer} from './typescript/Timer';
import {Student} from './typescript/Student';
import {Table} from './typescript/Table';

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
