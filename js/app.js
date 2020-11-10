var containerElement = document.getElementById('images');
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');

var products = [];

var randomNumbers = [];

var Product = function (name) {
    this.filePath = `img/${name}.jpg`; //will have to fix .jpg issue
    this.name = name;
    this.alt = name;
    this.votes = 0;
    this.views = 0;

    products.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');       //.png *******
new Product('tauntaun');
new Product('unicorn');
new Product('usb');         //.gif *******
new Product('water-can');
new Product('wine-glass');

function randomizer() {
    var limit = 3;
    var amount = 3;
    var lowest = 0;
    var highest = products.length;                   //randomizer adapted from: https://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x/43697217
    if (amount > limit) limit = amount;
    while (randomNumbers.length < limit) {
        var random_number = Math.floor(Math.random() * (highest - lowest) + lowest);
        if (randomNumbers.indexOf(random_number) == -1) {
            randomNumbers.push(random_number);
        }
    }
}

function imageRender() {
    randomizer()
    imageOne.src = products[randomNumbers[0]].filePath;
    imageOne.title = products[randomNumbers[0]].title;
    imageOne.alt = products[randomNumbers[0]].alt;

    imageTwo.src = products[randomNumbers[1]].filePath;
    imageTwo.title = products[randomNumbers[1]].title;
    imageTwo.alt = products[randomNumbers[1]].alt;

    imageThree.src = products[randomNumbers[2]].filePath;
    imageThree.title = products[randomNumbers[2]].title;
    imageThree.alt = products[randomNumbers[2]].alt;
}

imageRender()