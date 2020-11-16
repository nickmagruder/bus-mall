//universal variables
var products = [];

var containerElement = document.getElementById('images');
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var results = document.getElementById('results');

var ctx = document.getElementById('myChart').getContext('2d');
var chartLabels = [];
var chartData = [];

var randomNumbers = [];
var lastThree = [];
var rounds = 0;

// primary constructor function for buidling product image list
var Product = function (name, fileType) {
    this.filePath = `img/${name}.${fileType}`;
    this.alt = this.title = name;
    this.votes = 0;
    this.views = 0;
    this.fileType = fileType;

    products.push(this);
}

firstProductInstantiation();

console.log(products);

// loop to check local storage, and if empty, populate the products array with Product objects
function firstProductInstantiation() {
    if (localStorage.lsproducts) {
        var LSproducts = localStorage.getItem('lsproducts');
        products = JSON.parse(LSproducts);
    } else {
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
    }
}

// make random numbers for both the randomNumbers and lastThree arrays, prevents dupes and reusing numbers from the last 3 images used
function randomizer() {
    randomNumbers = [];
    for (var i = 0; i < 3; i++) {
        var randomNumber = generateRandom();
        while (lastThree.includes(randomNumber) || randomNumbers.includes(randomNumber)) {
            randomNumber = generateRandom();
        }
        randomNumbers.unshift(randomNumber);
        lastThree.unshift(randomNumber);
    }
}
function generateRandom() {
    return Math.floor(Math.random() * products.length);
}

// function for rendering the 3 image and tallying views of each image
function imageRender() {
    lastThree = randomNumbers;
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

// function for tallying votes for each image and total rounds
function imageVotes(e) {
    var clickTitle = e.target.title;
    for (var i = 0; i < products.length; i++) {
        if (clickTitle === products[i].title) {
            products[i].votes++;
            rounds++;
        }
    }

    imageRender();

    // blanks out current images, creates chart and saves to local storage after 25 rounds
    if (rounds === 25) {
        containerElement.removeEventListener('click', imageVotes);

        imageOne.src = '';
        imageOne.title = '';
        imageOne.alt = '';

        imageTwo.src = '';
        imageTwo.title = '';
        imageTwo.alt = '';

        imageThree.src = '';
        imageThree.title = '';
        imageThree.alt = '';

        chartDataCreator();
        chartLabelsCreator();
        insertChart();
        productsToLS();
    }
}

// save to LS
function productsToLS() {
    var stringifiedProducts = JSON.stringify(products);
    localStorage.setItem('lsproducts', stringifiedProducts);
}

// generates chart lebel data array
function chartDataCreator() {
    for (var i = 0; i < products.length; i++) {
        chartData.push(products[i].votes);
        chartData.push(products[i].views);
    }
}


// generates chart product-names labels array
function chartLabelsCreator() {
    for (var i = 0; i < products.length; i++) {
        chartLabels.push(products[i].alt + ' votes');
        chartLabels.push(products[i].alt + ' views');
    }
}

containerElement.addEventListener('click', imageVotes);

imageRender();

// chart.js code:
function insertChart() {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartLabels,
            datasets: [{
                label: '# of Votes and # of Views',
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}