'use strict';

// Create array to store objects
var allItems = [];
var current = [];
var previous = [];
// Get <img> elements from DOM
var htmlLoc = [];
htmlLoc[0] = document.getElementById('item-one');
htmlLoc[1] = document.getElementById('item-two');
htmlLoc[2] = document.getElementById('item-three');

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

  current = [];

  current.push(randomNum());
  while (previous.includes(current[0])) {
    current[0] = randomNum();
  }

  current.push(randomNum());
  while (current[0] === current[1] || previous.includes(current[1])) {
    current[1] = (randomNum());
  }

  current.push(randomNum());
  while (current[0] === current[2] || current[1] === current[2] || previous.includes(current[2])) {
    current[2] = (randomNum());
  }

  previous = current;

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
  console.log(allItems);
}

getRandoms();
