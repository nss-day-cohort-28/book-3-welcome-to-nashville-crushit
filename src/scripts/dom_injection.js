// inserts builtElement html into the DOM
let injection = () => searchResultSpot.insertAdjacentHTML('afterbegin', builtElements);

// inserts unique builtMeetupElement html into the Dom
let meetupInjection = () => searchResultSpot.insertAdjacentHTML('afterbegin', builtMeetupElements);

// the place we are inserting the itinerary into the dom
const findItinerary = document.getElementById("itinerary_target");
// insert itinerary into DOM
let injectItinerary = (data) => findItinerary.insertAdjacentHTML('beforeend',itineraryBuilder(data));
