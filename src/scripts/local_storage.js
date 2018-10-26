
// the place we are inserting the itinerary into the dom
const findItinerary = document.getElementById("itinerary");

// function to create itinerary div
let itineraryBuilder = (jsonObj) => {
  return `<div class = "inserted">
    <h3>Music: ${jsonObj.music}</h3>
    <h3>Park: ${jsonObj.park}</h3>
    <h3>Meetup: ${jsonObj.meetup}</h3>
    <h3>Food: ${jsonObj.food}</h3>
  </div>`;
}

// function to fetch json server data and to post it in the dom
fetch(`http://localhost:8088/my_itinerary`, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(data => data.json())
    .then((data) => {
      findItinerary.insertAdjacentHTML('beforeend',itineraryBuilder(data));
    })



let radbut = document.getElementById("button_save")

let bigObj = {

}

const localJson = function (data) {
fetch(`http://localhost:8088/my_itinerary`, {
method: "PATCH",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(data)})}

radbut.addEventListener("click", function () {
  let radioCheck = document.querySelector('input[name="result"]:checked').value;
  let radioClass = document.querySelector('input[name="result"]:checked').className;
  if (radioClass === "music") {
    bigObj.music = radioCheck
  } else if (radioClass === "meetup") {
    bigObj.meetup = radioCheck
  } else if (radioClass === "park") {
    bigObj.park = radioCheck
  } else if (radioClass === "food") {
    bigObj.food = radioCheck
  }
  localJson(bigObj);
  window.location.reload();
})


