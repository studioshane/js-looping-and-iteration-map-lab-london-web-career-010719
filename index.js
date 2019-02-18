// Code your solution in this file.

function lowerCaseDrivers(array){

  let lowerCaseDriver = [] 
  
  array.map(function(element){
    lowerCaseDriver.push(element.toLowerCase())
  });
  return lowerCaseDriver
};

function nameToAttributes(array){

  let newArray=[]

  array.map(function (name) { 
    newArray.push(Object.assign({firstName: name.split(" ")[0], lastName: name.split(" ")[1] })) 
  });
return newArray
};



function attributesToPhrase(array){
  let newArray = []
  array.map(function (driver) {newArray.push(`${driver.name} is from ${driver.hometown}`)});

return newArray

};
