
// Varables that grab our 3 sections
let searchSection = document.getElementById("search_section");
let resultsSection = document.getElementById("search_results")
let itinerarySection = document.getElementById("itinerary");

// hides search section when search button is clicked. and reveals the results section
let hideSearch = function() {
  searchSection.className = "hidden"
  resultsSection.className = "show"
}

// brings back the search section and hides the results
let returnSearch = function() {
  searchSection.className = "search_section show"
  resultsSection.className = "hidden"
}

// back button
let backButtonMagic = document.getElementById("button_back");

// back button actually refreshes the browser to clear our dom of searches
backButtonMagic.addEventListener("click", function() {
   window.location.reload();
})


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


// access the music html locations
let musicButton = document.getElementById("music_button");
let musicSelection = document.getElementById("section_music");
// music selection event listener
musicButton.addEventListener("click", function() {
  // assigns user's date selection
  let clickValue = musicSelection.options[musicSelection.selectedIndex].value;

  let musicSearch = musicFinder(clickValue);
  musicFetch(musicSearch);
})

// grabs the spots needed in html for meetups
let meetupButton = document.getElementById("meetup_button");
let meetupSelection = document.getElementById("section_meetup");
// event listener for meetup submission
meetupButton.addEventListener("click", function() {
  let clickValue = meetupSelection.options[meetupSelection.selectedIndex].value;
  let searchMeetups = meetupSearch(clickValue);
  meetupFetch(searchMeetups)
})




