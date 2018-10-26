
// grabs the spots needed in html for food
let foodButton = document.getElementById("food_button")
let foodSelection = document.getElementById("section_food");
// event listener for food submission
foodButton.addEventListener("click", function() {
  let clickValue = foodSelection.options[foodSelection.selectedIndex].value
  let searchTheFood = foodSearch(clickValue);
  foodFetch(searchTheFood)
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
