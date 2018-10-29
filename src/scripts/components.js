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

// Special builder for meetup info.
let builtMeetupElements = "";
let elementMeetupBuilder = (data1, data2, newClass) => {
  builtMeetupElements +=
   `<div class = "radio">
      <input class=${newClass} type="radio" name="result" value="${data1}&${data2}"><a href="${data2}" target="_blank">${data1}</a>
    </div>`;
}

let itineraryDivClear = () => {
  findItinerary.innerHTML = null;
}

// function to create itinerary div
let itineraryBuilder = (jsonObj) => {
  itineraryDivClear();
  let itinDiv = `<div class = "inserted">
    <h3>Music: ${jsonObj.music}</h3>
    <h3>Park: ${jsonObj.park}</h3>
    <h3>Meetup: <a href=${jsonObj.meetup_url}>${jsonObj.meetup}</a></h3>
    <h3>Food: ${jsonObj.food}</h3>
  </div>`;
  return itinDiv;
}
