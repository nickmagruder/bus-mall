var containerElement = document.getElementById('images');
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var results = document.getElementById('results');

var products = [];
var randomNumbers = [];
var rounds = 0;

var Product = function (name, fileType) {
    this.filePath = `img/${name}.${fileType}`;
    this.alt = this.title = name;
    this.votes = 0;
    this.views = 0;

    products.push(this);
}

new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulhu', 'jpg');
new Product('dog-duck', 'jpg');
new Product('dragon', 'jpg');
new Product('pen', 'jpg');
new Product('pet-sweep', 'jpg');
new Product('scissors', 'jpg');
new Product('shark', 'jpg');
new Product('sweep', 'png');
new Product('tauntaun', 'jpg');
new Product('unicorn', 'jpg');
new Product('usb', 'gif');
new Product('water-can', 'jpg');
new Product('wine-glass', 'jpg');

function randomizer() {
    randomNumbers = [];
    for (var i = 0; i < 3; i++) {
        var randomNumber = generateRandom();
        while (randomNumbers.includes(randomNumber)) {
            randomNumber = generateRandom();
        }
        randomNumbers.unshift(randomNumber);
    }
    while (randomNumbers.length > 3) {
        randomNumbers.pop();
    }
}
function generateRandom() {
    return Math.floor(Math.random() * products.length);
}

function imageRender() {
    randomizer();

    imageOne.src = products[randomNumbers[0]].filePath;
    imageOne.title = products[randomNumbers[0]].title;
    imageOne.alt = products[randomNumbers[0]].alt;
    products[randomNumbers[0]].views++;

    imageTwo.src = products[randomNumbers[1]].filePath;
    imageTwo.title = products[randomNumbers[1]].title;
    imageTwo.alt = products[randomNumbers[1]].alt;
    products[randomNumbers[1]].views++;

    imageThree.src = products[randomNumbers[2]].filePath;
    imageThree.title = products[randomNumbers[2]].title;
    imageThree.alt = products[randomNumbers[2]].alt;
    products[randomNumbers[2]].views++;
}

function imageVotes(e) {
    var clickTitle = e.target.title;
    for (var i = 0; i < products.length; i++) {
        if (clickTitle === products[i].title) {
            products[i].votes++;
            rounds++;
        }
    }

    imageRender();

    if (rounds === 25) {
        containerElement.removeEventListener('click', imageVotes);
    }
}

containerElement.addEventListener('click', imageVotes);

imageRender();


// for chart.js chart:
// Make a loop to generate array of vote count and names
// loop over products array
// wrap the chart code in a a function, then call the function when we hit 25
