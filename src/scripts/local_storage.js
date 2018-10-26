
// the place we are inserting the itinerary into the dom
const findItinerary = document.getElementById("itinerary");

// function to create itinerary div
let itineraryBuilder = (jsonObj) => {
  return `<div class = "inserted">
    <h3>Concert: ${jsonObj.music}</h3>
    <h3>Park: ${jsonObj.park}</h3>
    <h3>Event: ${jsonObj.meetup}</h3>
    <h3>Restaurant: ${jsonObj.food}</h3>
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



// const localJson = function () {
//   fetch(`http://localhost:8088/my_itinerary`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify
