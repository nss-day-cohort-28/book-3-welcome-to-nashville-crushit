
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

