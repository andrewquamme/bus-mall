'use strict';

// *********************
// GLOBALS
// *********************

var allItems = [];
var displayedItems = [];
var voteCounter = 1;

// var itemContainer = document.getElementById('item-container');
var left = document.getElementById('item-one');
var center = document.getElementById('item-two');
var right = document.getElementById('item-three');
// var itemList = document.getElementById('item-list');

// *********************
// OBJECTS
// *********************

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

// *********************
// FUNCTIONS
// *********************

function randomNum() {
  return Math.floor(Math.random() * allItems.length);
}

function getThreeUniques () {
  // Clear blank  array for uniique numbers
  var output = [];
  // Push first random number and check if it's in previous array
  output.push(randomNum());
  while (displayedItems.includes(output[0])) {
    output[0] = randomNum();
  }
  // Push second random, check against the first and previous array
  output.push(randomNum());
  while (output[0] === output[1] || displayedItems.includes(output[1])) {
    output[1] = (randomNum());
  }
  // Push third random, check against first, second, and previous array
  output.push(randomNum());
  while (output[0] === output[2] || output[1] === output[2] || displayedItems.includes(output[2])) {
    output[2] = (randomNum());
  }

  return output;
}

function displayItems() {
  var current = getThreeUniques();

  var htmlLoc = [];
  htmlLoc[0] = left;
  htmlLoc[1] = center;
  htmlLoc[2] = right;

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
  console.log(event.target.id);
  if (voteCounter < 25) {
    switch (event.target.id) {
    case 'item-one':
      console.log('item 1 click');
      allItems[displayedItems[0]].clicks++;
      break;
    case 'item-two':
      console.log('item 2 click');
      allItems[displayedItems[1]].clicks++;
      break;
    case 'item-three':
      console.log('item 3 click');
      allItems[displayedItems[2]].clicks++;
    }
    voteCounter++;
    displayItems();
  } else {
    alert('Thank you!') ;
    console.table(allItems);
  }
}

// *********************
// RUN ON PAGE LOAD
// *********************

displayItems();

// itemContainer.addEventListener('click', handleItemClick);
left.addEventListener('click', handleItemClick);
center.addEventListener('click', handleItemClick);
right.addEventListener('click', handleItemClick);
