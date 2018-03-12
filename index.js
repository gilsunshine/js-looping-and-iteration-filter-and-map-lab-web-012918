// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, revenue){
  let filtered = drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
    return filtered.map(driver => driver.name);
};

function exactMatch(drivers, attr){
  let key = Object.keys(attr);
  return drivers.filter(driver => driver[key] === attr[key])
}

function exactMatchToList(drivers, attr){
  let filtered = exactMatch(drivers, attr);
  return filtered.map(driver => driver.name);
};
