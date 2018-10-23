'use strict';

// +++++++++++++++++++++++++++++++++
// GLOBALS
// +++++++++++++++++++++++++++++++++

var allItems = [];
var displayedItems = [];
var totalVotes = 0;

var itemContainer = document.getElementById('item-container');
var left = document.getElementById('left-item');
var center = document.getElementById('center-item');
var right = document.getElementById('right-item');
var itemList = document.getElementById('item-list');
var ctx = document.getElementById('chart').getContext('2d');

// +++++++++++++++++++++++++++++++++
// OBJECTS
// +++++++++++++++++++++++++++++++++

function CatalogItem (name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this);
}

var itemNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for (var i = 0; i < itemNames.length; i ++ ) {
  new CatalogItem(itemNames[i]);
}

// +++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++

function randomNum() {
  return Math.floor(Math.random() * allItems.length);
}

function getThreeUniques () {
  var output = [];

  var firstNum = randomNum();
  while (displayedItems.includes(firstNum)) {
    firstNum = randomNum();
  }
  output.push(firstNum);

  var secondNum = randomNum();
  while (output.includes(secondNum) || displayedItems.includes(secondNum)) {
    secondNum = (randomNum());
  }
  output.push(secondNum);

  var thirdNum = randomNum();
  while (output.includes(thirdNum) || displayedItems.includes(thirdNum)) {
    thirdNum = (randomNum());
  }
  output.push(thirdNum);
  console.log(output);
  return output;
}

function displayItems() {
  var current = getThreeUniques();

  var htmlLoc = [left, center, right];

  for (var i = 0; i < current.length; i ++) {
    var idx = current[i];
    htmlLoc[i].src = allItems[idx].filepath;
    htmlLoc[i].title = allItems[idx].name;
    htmlLoc[i].alt = allItems[idx].name;
    allItems[idx].views++;
  }
  displayedItems = current;
}

function handleItemClick (event) {
  if (event.target.id === 'item-container') {
    alert('Please click directly on an item')
    return;
  }

  for (var i = 0; i < allItems.length; i++){
    if (event.target.alt === allItems[i].name) {
      allItems[i].clicks++;
    }
  }
  totalVotes++;

  if (totalVotes === 25) {
    disableAndHideImages();

    // var votes = 0;
    // for (i = 0; i < allItems.length; i++) {
    //   votes += allItems[i].clicks;
    // }
    // console.log(votes);

    return showList();
  }
  displayItems();
}

function disableAndHideImages() {
  itemContainer.removeEventListener('click', handleItemClick);
  alert('Thank you for your input!') ;
  console.table(allItems);
  itemContainer.textContent = '';
}

function showList() {
  for (var i = 0; i < allItems.length; i ++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allItems[i].name} has ${allItems[i].views} views and ${allItems[i].clicks} votes`;
    itemList.appendChild(liEl);
  }
}

// +++++++++++++++++++++++++++++++++
// RUN ON PAGE LOAD
// +++++++++++++++++++++++++++++++++

displayItems();

itemContainer.addEventListener('click', handleItemClick);
