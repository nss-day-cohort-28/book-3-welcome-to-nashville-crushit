// build html components here

// ________________Search Results Build_________________________________
// locates the place in the dom for us to place the results
let searchResultSpot = document.getElementById("search_radios");
// creates variable to hold the divs we will insert into the dom. 
let builtElements = "";

// Resets builtElement to empty and clears inner HTML of the target div for search results
let buildClear = () => {
  builtElements = "";
  searchResultSpot.innerHTML = null;
}
// Builds divs of results
let elementBuilder = (data1, data2, newClass) => {
  builtElements +=
    `<div class = "radio">
      <input class=${newClass} type="radio" name="result" value="${data1} @ ${data2}">${data1} @ ${data2}
    </div>`;
}


// __________________Itinerary Build________________________________
// the place we are inserting the itinerary into the dom
const findItinerary = document.getElementById("itinerary_target");

let itineraryDivClear = () => {
  findItinerary.innerHTML = null;
}

// function to create itinerary div
let itineraryBuilder = (jsonObj) => {
  itineraryDivClear();
  let itinDiv = `<div class = "inserted">
    <h3 id = "itinerary_music">Music: ${jsonObj[0].music}</h3>
    <h3 id = "itinerary_park">Park: ${jsonObj[0].park}</h3>
    <h3 id = "itinerary_meetup">Meetup: ${jsonObj[0].meetup}</h3>
    <h3 id = "itinerary_food">Food: ${jsonObj[0].food}</h3>
  </div>`;
  return itinDiv;
}


// _____________Saved Itinerary Builder__________________________
let savedInsertSpot = document.getElementById("saved_itinerary");
let savedSpot = document.getElementById("select_itinerary")
let savedItineraryDivClear = () => {
  savedInsertSpot.innerHTML = null;
}

// builds itinerary on page
let savedItineraryBuilder = (jsonObj) => {
  savedItineraryDivClear()
  let itinDiv = `<div class = "inserted">
    <h3 id = "itinerary_music">Music: ${jsonObj.music}</h3>
    <h3 id = "itinerary_park">Park: ${jsonObj.park}</h3>
    <h3 id = "itinerary_meetup">Meetup: ${jsonObj.meetup}</h3>
    <h3 id = "itinerary_food">Food: ${jsonObj.food}</h3>
  </div>`;
  return itinDiv;
}

// Builds selection drop down
let buildSavedItineray = (jsonFact) => {
  let newoption;
  savedSpot.innerHTML = null;
  jsonFact.forEach((loop) => {
    if (loop.name !== "") {
      newoption += `<option value=${loop.id}>${loop.name}</option>`
    }
  })
  savedSpot.insertAdjacentHTML('beforeend', newoption);
}