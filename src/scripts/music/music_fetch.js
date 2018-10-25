// apikey=L3UYuAg36GRifLaf

// make variables for url date ranges
let date1029 = "min_date=2018-10-29&max_date=2018-10-29";
let date1030 = "min_date=2018-10-30&max_date=2018-10-30";
let date1031 = "min_date=2018-10-31&max_date=2018-10-31";
let date1101 = "min_date=2018-11-01&max_date=2018-11-01";
let date1102 = "min_date=2018-11-02&max_date=2018-11-02";

// set function for user interface selections
let musicFinder = (selection) => {
  let musicChoice = ""
  if (selection === "October 29") {
    musicChoice = date1029;
  } else if (selection === "October 30") {
      musicChoice = date1030;
  } else if (selection === "October 31") {
      musicChoice = date1031;
  } else if (selection === "November 1") {
      musicChoice = date1101;
  } else if (selection === "November 2") {
      musicChoice = date1102;
  }
  return musicChoice;
}


let musicFetch = (musicValue) => {
  fetch(`https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?apikey=L3UYuAg36GRifLaf&${musicValue}`) // Fetch from the API
      .then(thing => thing.json())  // Parse as JSON
      .then(parsedThing => {
        console.log(parsedThing)
     })
}