
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray (chocolateBars, mars) {return [mars, ...chocolateBars]};
function destructivelyAddElementToBeginningOfArray (chocolateBars, mars) {chocolateBars.unshift(mars);
return chocolateBars};
function addElementToEndOfArray (chocolateBars, hersheys) {return [...chocolateBars, hersheys]};
function destructivelyAddElementToEndOfArray (chocolateBars, hersheys) {return chocolateBars.push(mars)};
function accessElementInArray (chocolateBars, chocolateBars[1]) {return chocolateBars[1]};
