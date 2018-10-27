// inserts builtElement html into the DOM
let injection = () => searchResultSpot.insertAdjacentHTML('afterbegin', builtElements);

// insert itinerary into DOM
let injectItinerary = (data) => findItinerary.insertAdjacentHTML('beforeend',itineraryBuilder(data, 0));

// insert saved itineraries into DOM
let recallSavedItinerary = (data) => savedInsertSpot.insertAdjacentHTML('beforeend',savedItineraryBuilder(data));
