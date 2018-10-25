
// locates the place in the dom for us to place the results
let searchResultSpot = document.getElementById("search_radios");
 

// inserts builtElement html into the DOM
searchResultSpot.insertAdjacentHTML('afterbegin', builtElements);