
// locates the place in the dom for us to place the results
let searchResultSpot = document.getElementById("search_radios");
 

// inserts builtElement html into the DOM
let injection = () => searchResultSpot.insertAdjacentHTML('afterbegin', builtElements);


// the place we are inserting the itinerary into the dom
const findItinerary = document.getElementById("itinerary_target");
// insert itinerary into DOM
let injectItinerary = (data) => findItinerary.insertAdjacentHTML('beforeend',itineraryBuilder(data));