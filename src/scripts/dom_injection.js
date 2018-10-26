
// locates the place in the dom for us to place the results
let searchResultSpot = document.getElementById("search_radios");
 

// inserts builtElement html into the DOM
let injection = () => searchResultSpot.insertAdjacentHTML('afterbegin', builtElements);

// inserts unique builtMeetupElement html into the Dom
let meetupInjection = () => searchResultSpot.insertAdjacentHTML('afterbegin', builtMeetupElements);