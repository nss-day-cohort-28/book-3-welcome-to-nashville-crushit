// captured the array stored in the Restaurants object in a varable
const foodFilter = (foodObj) => {
  let restArray = foodObj.restaurants;
  return restArray;
}

// Loop through my array and collect the name and location of each restaurant. T
const foodArrayLoop = (newArray) => {
  if (newArray.length === 0) {
    alert("No restaurants of that type. Search again.")
  } else
    for (let i = 0; i<5; i++) {
      let restName = newArray[i].restaurant.name;
      let restLocation = newArray[i].restaurant.location.address;
      // insert name and location into our build component
      elementBuilder(restName, restLocation, "food");
    }
  // inject our build component into the dom
  injection();
} 