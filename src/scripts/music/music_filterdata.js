
// filter down the received object into desired event array
let musicFilter = (musicObject) => {
  let eventArray = musicObject.resultsPage.results.event;
  return eventArray
}


let musicEventLoop = (array) => {
  for (i=0; i<5; i++) {
    let artist = array[i].performance[0].displayName;
    let venue = array[i].venue.displayName;
    elementBuilder(artist, venue, "music");
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