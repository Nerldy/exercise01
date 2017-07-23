// exercise https://github.com/bgando/array-exercises/
var animal = {
    username: 'ratatolie',
    tagline: 'cook rats',
    noises: ['squeak', 'hiss', 'chomp']
};

var noisearray = [
    "meeow"
];
noisearray.unshift("woof");
noisearray.push("awoo");
noisearray[noisearray.length] = 'ssss-sss';

noisearray.length; // 4

var addA = animal.noises;

addA.push(noisearray);

var animals = [];

animals.push(animal);

var quackers = {username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl']};

animals[1] = quackers;

var goat = {
    username: "GOAT",
    tagline: 'chewed like green',
    noises: ['mee-eeh', 'baa-aah']
};

var bird = {
    username: "humm-stalk",
    tagline: "I tree-eed",
    noises: ['chirp', 'hum', 'sing']
};

animals.push(goat);
animals.push(bird);

console.log(animals.length);