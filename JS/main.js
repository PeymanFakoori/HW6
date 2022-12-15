let cars=[]
let numberOfCars = prompt("please enter number of cars")
function randomOrder(inputCarCount) {
    let randomNumbers = [];
    while (randomNumbers.length < inputCarCount) {
      let randOrder = parseInt(Math.random() * inputCarCount + 1);
      if (!randomNumbers.includes(randOrder)) {
        randomNumbers.push(randOrder);
      }
    }
    return randomNumbers;
  }
  function carInformation(input){
    this.getCarName = input;
}
function stepArray(Max, inputCount) {
    let stepOrder = [];
    while (stepOrder.length < inputCount) {
      stepOrder.push(parseInt(Math.random() * Max + 1));
    }
    return stepOrder;
  }
function carRace(numberOfCars){
    let road = [..."*".repeat(300)]
    // if(!isNaN(numberOfCars) || !Number.isInteger(numberOfCars) || numberOfCars === 0){
    //     return("You should use natural numbers")
    // }
    
    for(let index = 0 ; index < numberOfCars ; index++){
        let getCarName = prompt(`Please enter name of ${index +1} car's name `)
        if (!getCarName) {
            throw new Error("name can not be empty")
        }
        cars.push(new carInformation(getCarName))
    }
    let stepOrder = randomOrder(numberOfCars);
    cars.forEach((item, index) => {
        item.order = randomOrder[index]
        item.placment =0;
    });
    cars.sort((a,b)=>{
        return a.order = b.order;
    })
    console.log(stepOrder);
    cars.forEach((element)=>{
        console.log(element.getCarName);
    })
    let result=[]
    while(
        cars.filter((item)=>{
            return item.placment > 300;
        }).length<numberOfCars
    ){
        let steps = stepArray(10,numberOfCars);
        for(let index = 0 ; index < numberOfCars ; index++){
            cars[index].placment += steps[index];
            if(cars[index].placment < 300){
                road[cars[index].placment]=cars[index].getCarName;
                cars.filter((element)=>{
                    return(element.placment === cars[index].placment && element.getCarName !==cars[index].getCarName);
                });
            }else{
                result.push(cars[index].getCarName)
            }
        }
        console.log(road.join(""));
    }
    console.log(`the winers is : ${result[0]}`)
}

carRace(numberOfCars)