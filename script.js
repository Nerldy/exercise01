// eFarmony Functions
// https://github.com/bgando/function-exercises/


// Write a function, AnimalTestUser, that has one string parameter, username. It returns an object with a username property.

/*In your AnimalTestUser function, create a check that sees how many arguments are passed. If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. Note: the arguments keyword is not a true array. Remember, it is an array-like object.*/
function AnimalTestUser(username) {
    if (arguments.length > 1) {
        var list = [];
        for (var i = 1; i <= arguments.length; i++) {
            list.push(i);
        }
        return {
            username: username,
            otherArgs: list
        };
    }
    return {
        username: username
    };
}

// console.log(AnimalTestUser('cootinBall', {'loves dancing': true}, [1, 2, 3]));

/*Write a constructor function, AnimalCreator that returns a single animal object. The constructor function has 4 parameters: username, species, tagline, and noises. The animal object should have at least 5 properties: username, species, noises, tagline, and friends. The values should all be strings except noises and friends, which are arrays.*/
function AnimalCreator(username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        noises: noises,
        tagline: tagline,
        friends: []
    };
}

// var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

/*Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function) and adds another animal object as a friend.*/
var addFriend = function (first, friend) {
    return first.friends.push(friend);
};

// Change your addFriend function to only add the username of the friend, not the whole object.
var addUserName = function (first, buddy) {
    return first.friends.push(buddy.username);
};

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = AnimalCreator('Moo', 'cow');

// addFriend(sheep, cow);
addUserName(sheep, cow);
// console.log(sheep);

var Llama = AnimalCreator('Zeny', "Llama");
// addFriend(sheep, Llama);
addUserName(sheep, Llama);
// console.log(sheep);

// Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!
var myFarm = [sheep, cow, Llama];
// console.log(myFarm.length);

/*Create a function, addMatchesArray, that takes a farm (array of animal objects) and adds a new property to each animal object called matches that is an empty array. Hint: you will need a loop.*/
var addMatchesArray = function (animals) {
    for (var i = 0; i < animals.length; i++) {
        animals[i]["matches"] = [];
    }
    return animals;
};
addMatchesArray(myFarm);
// console.log(addMatchesArray(myFarm));

/*
Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) that already has a matches property. It selects a name from the friends array and adds it to the matches array. You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.*/

// TODO