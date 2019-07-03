import React, { Component } from 'react';
import Data from './Data'
import './App.css';


const Hours = (a, b, c, d, e, f, g, h, i, j, k, l, m, n) => {
  return  ((Monday(a, b) + Tuesday(c, d) +
   Wednesday(e, f) + Thursday(g, h) +
   Friday(i, j) + Saturday(k, l) +
   Sunday(m, n) ) / 60)    
}

function Monday (mondayStartTime, mondayEndTime) {
  let start = mondayStartTime.split(':');
  let end = mondayEndTime.split(':');
  let total = (((+end[0]) * 60) + (+end[1])) -  (((+start[0]) * 60) + (+start[1]))
  return total >= 720 ? total - 40 
  : total >= 360 ? total - 20 
  : total;
}


function Tuesday (tuesdayStartTime, tuesdayEndTime) {
  let start = tuesdayStartTime.split(':');
  let end = tuesdayEndTime.split(':');
  let total = (((+end[0]) * 60) + (+end[1])) -  (((+start[0]) * 60) + (+start[1]))
  return total >= 720 ? total - 40 
  : total >= 360 ? total - 20 
  : total;
}

function Wednesday (wednesdayStartTime, wednesdayEndTime) {
  let start = wednesdayStartTime.split(':');
  let end = wednesdayEndTime.split(':');
  let total = (((+end[0]) * 60) + (+end[1])) -  (((+start[0]) * 60) + (+start[1]))
  return total >= 720 ? total - 40 
  : total >= 360 ? total - 20 
  : total;
}


function Thursday (thursdayStartTime, thursdayEndTime) {
  let start = thursdayStartTime.split(':');
  let end = thursdayEndTime.split(':');
  let total = (((+end[0]) * 60) + (+end[1])) -  (((+start[0]) * 60) + (+start[1]))
  return total >= 720 ? total - 40 
  : total >= 360 ? total - 20 
  : total;
}

function Friday (fridayStartTime, fridayEndTime) {
  let start = fridayStartTime.split(':');
  let end = fridayEndTime.split(':');
  let total = (((+end[0]) * 60) + (+end[1])) -  (((+start[0]) * 60) + (+start[1]))
  return total >= 720 ? total - 40 
  : total >= 360 ? total - 20 
  : total;
}


function Saturday (saturdayStartTime, saturdayEndTime) {
  let start = saturdayStartTime.split(':');
  let end = saturdayEndTime.split(':');
  let total = (((+end[0]) * 60) + (+end[1])) -  (((+start[0]) * 60) + (+start[1]))
  return total >= 720 ? total - 40 
  : total >= 360 ? total - 20 
  : total;
}

function Sunday (sundayStartTime, sundayEndTime) {
  let start = sundayStartTime.split(':');
  let end = sundayEndTime.split(':');
  let total = (((+end[0]) * 60) + (+end[1])) -  (((+start[0]) * 60) + (+start[1]))
  return total >= 720 ? total - 40 
  : total >= 360 ? total - 20 
  : total;
}

const working = (start, finish) => {
  return start === '00:00:00' && finish === '00:00:00' ? 'Not Working' : `${start} - ${finish}`
}

let passCode ="";

while (passCode!== "kitopi123")
  {
  passCode=prompt("please enter your password");
    if (passCode==="kitopi123") {
      window.href="main"; 
    }
    else {
      alert("Incorrect password-Try again");
    }
}

class App extends Component {
  render() {
    return (
      <div className="App" id = 'main'> 
      <h1>{Data.company}</h1>
      <h2>{Data.companyBio}</h2>
      <table>
      <tr>
      <th><h2>Role</h2></th>
      <th><h2>Name</h2></th>
      <th><h2>Monday</h2></th>
      <th><h2>Tuesday</h2></th>
      <th><h2>Wednesday</h2></th>
      <th><h2>Thursday</h2></th>
      <th><h2>Friday</h2></th>
      <th><h2>Saturday</h2></th>
      <th><h2>Sunday</h2></th>
      <th><h2>Hourly Pay</h2></th>
      <th><h2>Weekly Pay</h2></th>
      </tr>
      <tbody className = 'employees'>
      {Data.employees.map((item) => {
        return ( 
          <tr>
          <td><p>{item.role}</p></td>   
          <td><p>{item.employeeName}</p></td> 
          <td><p>{working(item.mondayStart, item.mondayEnd)}</p></td> 
          <td><p>{working(item.tuesdayStart, item.tuesdayEnd)}</p></td> 
          <td><p>{working(item.wednesdayStart, item.wednesdayEnd)}</p></td> 
          <td><p>{working(item.thursdayStart, item.thursdayEnd)}</p></td> 
          <td><p>{working(item.fridayStart, item.fridayEnd)}</p></td> 
          <td><p>{working(item.saturdayStart, item.saturdayEnd)}</p></td> 
          <td><p>{working(item.sundayStart, item.sundayEnd)}</p></td>           
          <td><p>£{item.pay}</p></td> 
          <td><p>£{Hours(item.mondayStart, item.mondayEnd, item.tuesdayStart, item.tuesdayEnd, item.wednesdayStart, 
                  item.wednesdayEnd, item.thursdayStart, item.thursdayEnd, item.fridayStart, item.fridayEnd, 
                  item.saturdayStart, item.saturdayEnd, item.sundayStart, item.sundayEnd
          ) * 9}</p></td> 
          </tr>
          
        )})}
      
      </tbody>  
      </table>

      <div>
        <h1>Total</h1>
        <p>£{Data.employees.map((item) => { 
            return (
            Hours(item.mondayStart, item.mondayEnd, item.tuesdayStart, item.tuesdayEnd, item.wednesdayStart, 
            item.wednesdayEnd, item.thursdayStart, item.thursdayEnd, item.fridayStart, item.fridayEnd, 
            item.saturdayStart, item.saturdayEnd, item.sundayStart, item.sundayEnd) * 9)
            }).reduce((total, numbers) => total + numbers, 0)} </p>
      </div>
      </div>
    );
  }
}

export default App;