'use strict';

// Create array to store objects
var allItems = [];

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
new CatalogItem('pet-sweep', 'pet-sweep.jpg');
new CatalogItem('scissors', 'img/scissors.jpg');
new CatalogItem('shark', 'img/shark.jpg');
new CatalogItem('sweep', 'img/sweep.png');
new CatalogItem('tauntaun', 'img/tauntaun.jpg');
new CatalogItem('unicorn', 'img/unicorn.jpg');
new CatalogItem('usb', 'img/usb.gif');
new CatalogItem('water-can', 'img/water-can.jpg');
new CatalogItem('wine-glass', 'img/wine-glass.jpg');


console.table(allItems);
