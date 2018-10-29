
// filter down the received object into desired event array
let musicFilter = (musicObject) => {
  let eventArray = musicObject.resultsPage.results.event;
  return eventArray
}


let musicEventLoop = (array) => {
  if (array === undefined) {
    builtElements +=
    `<div>
      There are no upcoming concerts listed for this date!
     </div>`;
  } else {
  buildClear();
  for (i=0; i<5 && i<array.length; i++) {
    let artist = array[i].performance[0].displayName;
    let venue = array[i].venue.displayName + " " + document.getElementById("section_music").value;
    elementBuilder(artist, venue, "music");
    }
  }
  // inject music info into the DOM
  injection();
}




// let artistName = event[i].performance.displayName
// let venueName = event[i].venue.displayName

// ARTIST
// “resultsPage: { “results”: { “event”: [ { “performance”: [ { “displayName”: ***
// VENUE
// “resultsPage: { “results”: { “event”: [ { “venue”: { “displayName: ***




// event[i]
// performance[0]