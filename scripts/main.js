/*
Commenting is classic in every programming language
*/
// This is also the same lol
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/alaskan-malamute-happy.jpg') {
      myImage.setAttribute('src','images/alaskan-malamute-normal.jpg');
    } else {
      myImage.setAttribute('src','images/alaskan-malamute-happy.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(myName) {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Alaskan malamutes are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Alaskan malamutes are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
