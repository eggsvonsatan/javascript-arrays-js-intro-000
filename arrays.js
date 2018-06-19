
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray (chocolateBars, mars) {return [mars, ...chocolateBars]};
function destructivelyAddElementToBeginningOfArray (chocolateBars, mars) {chocolateBars.unshift(mars);
return chocolateBars};
function addElementToEndOfArray (chocolateBars, mars) {return [...chocolateBars, mars]};
function destructivelyAddElementToEndOfArray (chocolateBars, mars) {return chocolateBars.push(mars)};
function accessElementInArray (array, index) {return array[index]};
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {return chocolateBars.shift()};
function removeElementFromBeginningOfArray (chocolateBars) {return chocolateBars.slice(0)};
function destructivelyRemoveElementFromEndOfArray (chocolateBars) {return chocolateBars.pop()};
