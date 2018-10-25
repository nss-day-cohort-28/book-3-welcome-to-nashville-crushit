// Zomato key:9b3dcdee82f0db292f86f5027fae6fc0

// let foodObj = {};


const mexincan = "73";
const american = "1";
const greek = "156";
const chinese = "25";
const italian = "55";

const foodSearch = function (eventListenerValue) {
  let cuisineNumb = ""
  if (eventListenerValue === "Mexican") {
    cuisineNumb = mexincan;
  } else if (eventListenerValue === "American") {
    cuisineNumb = american;
  } else if (eventListenerValue === "Greek") {
    cuisineNumb = greek;
  } else if (eventListenerValue === "Chinese") {
    cuisineNumb = chinese;
  } else if (eventListenerValue === "Italian") {
    cuisineNumb = italian;
  }
    return cuisineNumb;
}

// refactor once eventlistener is created so that food cuntion can live inside this function
const foodFetch = function (cuisineValue) {
fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${cuisineValue}`, {
  headers: {
    "Content-Type": "application/json",
    "user-key": "9b3dcdee82f0db292f86f5027fae6fc0"
  }
 }).then(data => data.json())
   .then ( (data) => {
     console.log(data);
   })
  }

