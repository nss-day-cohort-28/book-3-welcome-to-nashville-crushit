// build html components here


// Creates a new radio button with the information we pass into it and then adds that div to the build elements string.
// Should work for food, music and parks api.
let builtElements = "";
let elementBuilder = (data1, data2, newClass) => {
  builtElements +=
   `<div class = "radio">
      <input class=${newClass} type="radio" name="result" value="${data1} @ ${data2}">${data1} @ ${data2}
    </div>`;
}

// Special builder for meetup info.
let builtMeetupElements = "";
let elementMeetupBuilder = (data1, data2, newClass) => {
  builtMeetupElements +=
   `<div class = "radio">
      <input class=${newClass} type="radio" name="result" value="${data1}&${data2}"><a href="${data2}" target="_blank">${data1}</a>
    </div>`;
}
// function to create itinerary div
let itineraryBuilder = (jsonObj) => {
  return `<div class = "inserted">
    <h3>Music: ${jsonObj.music}</h3>
    <h3>Park: ${jsonObj.park}</h3>
    <h3>Meetup: <a href=${jsonObj.meetup_url}>${jsonObj.meetup}</a></h3>
    <h3>Food: ${jsonObj.food}</h3>
  </div>`;
}
