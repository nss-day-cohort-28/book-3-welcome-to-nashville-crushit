// inserts builtElement html into the DOM
let injection = () => searchResultSpot.insertAdjacentHTML('afterbegin', builtElements);

// insert itinerary into DOM
let injectItinerary = (data) => findItinerary.insertAdjacentHTML('beforeend',itineraryBuilder(data));