// format user's date selection into fetchable url extension
let musicFinder = (selection) => {
  let musicChoice = `min_date=${selection}&max_date=${selection}`
  return musicChoice;
}

let musicFetch = (musicValue) => {
  fetch(`https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?apikey=L3UYuAg36GRifLaf&${musicValue}`) // Fetch from the API
      .then(info => info.json())  // Parse as JSON
      .then(parsedinfo => {
        // send info through filter to return array of events
        let eventArray = musicFilter(parsedinfo);
        // send array through loop to return (artist @ venue)
        musicEventLoop(eventArray)
     })
}