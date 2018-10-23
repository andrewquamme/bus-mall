'use strict';

// Create array to store objects
var allItems = [];
var current = [];
var previous = [];
var displayCounter = 1;
// Get <img> elements from DOM
var htmlLoc = [];
var itemOne = document.getElementById('item-one');
var itemTwo = document.getElementById('item-two');
var itemThree = document.getElementById('item-three');
htmlLoc[0] = itemOne;
htmlLoc[1] = itemTwo;
htmlLoc[2] = itemThree;

// Object constructor
function CatalogItem (name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this);
}

// Make instances of items
new CatalogItem('bag', 'img/bag.jpg');
new CatalogItem('banana', 'img/banana.jpg');
new CatalogItem('bathroom', 'img/bathroom.jpg');
new CatalogItem('boots', 'img/boots.jpg');
new CatalogItem('breakfast', 'img/breakfast.jpg');
new CatalogItem('bubblegum', 'img/bubblegum.jpg');
new CatalogItem('chair', 'img/chair.jpg');
new CatalogItem('cthulhu', 'img/cthulhu.jpg');
new CatalogItem('dog-duck', 'img/dog-duck.jpg');
new CatalogItem('dragon', 'img/dragon.jpg');
new CatalogItem('pen', 'img/pen.jpg');
new CatalogItem('pet-sweep', 'img/pet-sweep.jpg');
new CatalogItem('scissors', 'img/scissors.jpg');
new CatalogItem('shark', 'img/shark.jpg');
new CatalogItem('sweep', 'img/sweep.png');
new CatalogItem('tauntaun', 'img/tauntaun.jpg');
new CatalogItem('unicorn', 'img/unicorn.jpg');
new CatalogItem('usb', 'img/usb.gif');
new CatalogItem('water-can', 'img/water-can.jpg');
new CatalogItem('wine-glass', 'img/wine-glass.jpg');

function randomNum() {
  return Math.floor(Math.random() * allItems.length);
}

function getRandoms () {
  // Clear current array
  current = [];
  // Push first random number and check if it's in previous array
  current.push(randomNum());
  while (previous.includes(current[0])) {
    current[0] = randomNum();
  }
  // Push second random, check against the first and previous array
  current.push(randomNum());
  while (current[0] === current[1] || previous.includes(current[1])) {
    current[1] = (randomNum());
  }
  // Push third random, check against first, second, and previous array
  current.push(randomNum());
  while (current[0] === current[2] || current[1] === current[2] || previous.includes(current[2])) {
    current[2] = (randomNum());
  }
  // All 3 are unique, set previous to current
  previous = current;
  // Display current items
  displayItems();
}

function displayItems() {
  for (var i = 0; i < current.length; i ++) {
    var idx = current[i];
    htmlLoc[i].src = allItems[idx].filepath;
    htmlLoc[i].title = allItems[idx].name;
    htmlLoc[i].alt = allItems[idx].name;
    allItems[idx].views++;
  }
}

function handleItemClick (event) {
  if (displayCounter < 25) {
    switch (event.target.id) {
    case 'item-one':
      console.log('item 1 click');
      allItems[current[0]].clicks++;
      break;
    case 'item-two':
      console.log('item 2 click');
      allItems[current[1]].clicks++;
      break;
    case 'item-three':
      console.log('item 3 click');
      allItems[current[2]].clicks++;
    }
    displayCounter++;
    getRandoms();
  } else {
    alert('Thank you!') ;
    console.table(allItems);
  }
}

getRandoms();

itemOne.addEventListener('click', handleItemClick);
itemTwo.addEventListener('click', handleItemClick);
itemThree.addEventListener('click', handleItemClick);
