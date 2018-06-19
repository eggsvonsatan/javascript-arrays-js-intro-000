
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray (chocolateBars, mars) {return [mars, ...chocolateBars]};
function destructivelyAddElementToBeginningOfArray (chocolateBars, mars) {return [chocolateBars.unshift(mars)]};
