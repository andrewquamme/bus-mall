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
// var itemList = document.getElementById('item-list');

var chartLabels = [];
var chartVotes = [];
var chartViews = [];

// +++++++++++++++++++++++++++++++++
// OBJECTS
// +++++++++++++++++++++++++++++++++

function CatalogItem (name, views, votes) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.views = views;
  this.clicks = votes;
  allItems.push(this);
}

// +++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++

function createItems() {
  var itemNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

  for (var i = 0; i < itemNames.length; i ++ ) {
    new CatalogItem(itemNames[i], 0, 0);
  }
}

function randomNum() {
  return Math.floor(Math.random() * allItems.length);
}

function getThreeUniques () {
  var output = [];

  for (var i = 0; i < 3; i++) {
    var number = randomNum();
    while (output.includes(number) || displayedItems.includes(number)) {
      number = (randomNum());
    }
    output.push(number);
  }

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
    return showChart();
  }
  displayItems();
}

function disableAndHideImages() {
  itemContainer.removeEventListener('click', handleItemClick);
  alert('Thank you for your input!') ;
  // console.table(allItems);
  itemContainer.innerHTML = '';
}

// function showList() {
//   for (var i = 0; i < allItems.length; i ++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${allItems[i].name} has ${allItems[i].views} views and ${allItems[i].clicks} votes`;
//     itemList.appendChild(liEl);
//   }
// }

function showChart() {
  disableAndHideImages();
  makeChartArrays();
  var ctx = document.getElementById('chart').getContext('2d');

  var data = {
    labels: chartLabels, // labels array declared earlier
    datasets: [{
      label: 'Votes',
      data: chartVotes, // votes array declared earlier
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderWidth: 1,
      borderColor: 'red',
    },{
      label: 'Views',
      data: chartViews, // views array declared earlier
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      borderWidth: 1,
      borderColor: 'blue',
    }]
  }

  var options = {
    responsive: false,
    animation: {
      duration: 2000,
      easing: 'linear'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: options,
  });
}

function makeChartArrays() {
  for (var i = 0; i < allItems.length; i ++) {
    chartLabels.push(allItems[i].name);
    chartVotes.push(allItems[i].clicks);
    chartViews.push(allItems[i].views);
  }
}

// +++++++++++++++++++++++++++++++++
// RUN ON PAGE LOAD
// +++++++++++++++++++++++++++++++++

createItems();
displayItems();

itemContainer.addEventListener('click', handleItemClick);
