
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray (chocolateBars, mars) {return [mars, ...chocolateBars]};
function destructivelyAddElementToBeginningOfArray (chocolateBars, mars) {chocolateBars.unshift(mars);
return chocolateBars};
function addElementToEndOfArray (chocolateBars, mars) {return [...chocolateBars, mars]};
function destructivelyAddElementToEndOfArray (chocolateBars, mars) {chocolateBars.push(mars); return chocolateBars};
function accessElementInArray (array, index) {return array[index]};
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {chocolateBars.shift(); return chocolateBars};
function removeElementFromBeginningOfArray (chocolateBars) {return chocolateBars.slice(0)};
function destructivelyRemoveElementFromEndOfArray (chocolateBars) {return chocolateBars.pop()};
