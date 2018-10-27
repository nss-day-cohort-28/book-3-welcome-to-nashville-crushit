// all event listeners


// _________Search Buttons_____________

// grabs the spots needed in html for food
let foodButton = document.getElementById("food_button")
let foodSelection = document.getElementById("section_food");
// event listener for food submission
foodButton.addEventListener("click", function() {
  let clickValue = foodSelection.options[foodSelection.selectedIndex].value
  let searchTheFood = foodSearch(clickValue);
  foodFetch(searchTheFood)
  // hides searchsection
  hideSearch();
 })

// grabs the spots needed in html for food
let parkButton = document.getElementById("park_button")
let parkSelection = document.getElementById("section_park")
// event lsitener for park submission
parkButton.addEventListener("click", function() {
  let clickValue = parkSelection.options 
  [parkSelection.selectedIndex].value
  let searchThePark = parkSearch(clickValue);
  parkFetch(searchThePark)
  hideSearch();
})

// access the music html locations
let musicButton = document.getElementById("music_button");
let musicSelection = document.getElementById("section_music");
// music selection event listener
musicButton.addEventListener("click", function() {
  // assigns user's date selection
  let clickValue = musicSelection.options[musicSelection.selectedIndex].value;

  let musicSearch = musicFinder(clickValue);
  musicFetch(musicSearch);
  hideSearch();
})

// grabs the spots needed in html for meetups
let meetupButton = document.getElementById("meetup_button");
let meetupSelection = document.getElementById("section_meetup");
// event listener for meetup submission
meetupButton.addEventListener("click", function() {
  let clickValue = meetupSelection.options[meetupSelection.selectedIndex].value;
  let searchMeetups = meetupSearch(clickValue);
  meetupFetch(searchMeetups)
  hideSearch();
})


// __________________Results Buttons_______________

// SAVE BUTTON: and decides what key in json gets updated
let radbut = document.getElementById("button_save")
let bigObj = {}
radbut.addEventListener("click", function () {
  let radioCheck = document.querySelector('input[name="result"]:checked').value;
  let radioClass = document.querySelector('input[name="result"]:checked').className;
  if (radioClass === "music") {
    bigObj.music = radioCheck
  } else if (radioClass === "meetup") {
    bigObj.meetup = radioCheck
  } else if (radioClass === "park") {
    bigObj.park = radioCheck
  } else if (radioClass === "food") {
    bigObj.food = radioCheck
  }
  localJson(bigObj);
  mainFetch();
  buildClear();
  returnSearch()
  })

// BACK BUTTON
let backButtonMagic = document.getElementById("button_back");

backButtonMagic.addEventListener("click", function() {
  buildClear()
  returnSearch();
})


// ___________________Itinerary Buttons___________________
// CLEAR BUTTON: Clear out our itinerary
let clearButton = document.getElementById("button_clear");
clearButton.addEventListener("click", () => {
  let clearObj = {
    music: "",
    park: "",
    meetup: "",
    food: "",
    meetup_url: ""
    }
  localJson(clearObj);
  buildClear()
  mainFetch()
})


// Save Button now post a new itinerary to json
let saveItinButton = document.getElementById("button_itinerary_save");

saveItinButton.addEventListener("click", () => {
   let saveObj = {
    music: jsonFact[0].music,
    park: jsonFact[0].park,
    meetup: jsonFact[0].meetup,
    food: jsonFact[0].food,
    meetup_url: jsonFact[0].meetup_url,
    name: document.getElementById("itinerary_name").value
    }
  postJson(saveObj);
})
