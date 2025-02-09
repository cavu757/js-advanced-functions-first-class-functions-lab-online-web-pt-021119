const returnFirstTwoDrivers = function (array){
  return array.slice(0,2)
};

const returnLastTwoDrivers = function (array){
  return array.slice(-2)
};

let selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function(multiplier){
  return function(fare){
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (array, fn){
  return fn(array);  
};
