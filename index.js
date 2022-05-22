// Write your solution here!

//test 1
let cats = ["Milo", "Otis", "Garfield"];


//test 2
/*
const destructivelyAppendCat = function (name) {
cats.push(name)
}
*/
const destructivelyAppendCat = name => cats.push(name)


//test 3
/*
const destructivelyPrependCat = function (removedCat) {
cats.unshift('Bob');    
}
*/
const destructivelyPrependCat = removedCat => cats.unshift('Bob')


//test 4
/*
const destructivelyRemoveLastCat = function (name) {
cats.pop()
}
*/
const destructivelyRemoveLastCat = name => cats.pop()
 

// test 5
/*
const destructivelyRemoveFirstCat = function (removedCat) {
cats.shift('Bob');    
}
*/
const destructivelyRemoveFirstCat = removedCat => cats.shift();


//test 6
/*
const appendCat = function (name) {
const appendCatBroom = [...cats, name]
return (appendCatBroom);
}
*/
const appendCat = name => { const appendCatBroom = [...cats,name]
return appendCatBroom}


//test 7
const prependCat = function(name){
const prependCatArnold = ["Arnold",...cats];
return (prependCatArnold);
}


//test 8
/*
const removeLastCat = function () {
const removedCat = cats.slice(0,-1);
return (removedCat);
}
*/
const removeLastCat = () => cats.slice(0,-1)


//test 9
/*
const removeFirstCat = function () {
const removedFirtCat = cats.slice(1);
return (removedFirtCat);    
}
*/
const removeFirstCat = () => cats.slice(1)