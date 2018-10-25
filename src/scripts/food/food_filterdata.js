const foodFilter = (foodObj) => {
  let restArray = foodObj.restaurants;
  return restArray;
}

const foodArrayLoop = (newArray) => {
  for (let i = 0; i<5; i++) {
    let restName = newArray[i].restaurant.name;
    let restLocation = newArray[i].restaurant.location.address;
    elementBuilder(restName, restLocation);
  }
  injection();
} 