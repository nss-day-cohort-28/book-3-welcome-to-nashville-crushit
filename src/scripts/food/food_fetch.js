// Zomato key:9b3dcdee82f0db292f86f5027fae6fc0

// Stores cuisine value in a varable
const mexican = "73";
const american = "1";
const greek = "156";
const chinese = "25";
const italian = "55";


// Takes the string from my eventlistener and associates it with the correct cuisine number
const foodSearch = function (eventListenerValue) {
  let cuisineNumb = ""
  if (eventListenerValue === "Mexican") {
    cuisineNumb = mexican;
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

// accepts the value of one of my cusine numbers and inserts it into the fetch url
const foodFetch = function (cuisineValue) {
fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${cuisineValue}`, {
  headers: {
    "Content-Type": "application/json",
    "user-key": "9b3dcdee82f0db292f86f5027fae6fc0"
  }
 }).then(data => data.json())
   .then ( (data) => {
    let newArray = foodFilter(data);
    foodArrayLoop(newArray);  
   })
  }

