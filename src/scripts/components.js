// build html components here


// Creates a new radio button with the information we pass into it and then adds that div to the build elements string.
// Should work for food, music and parks api.
let builtElements = "";
let elementBuilder = (data1, data2, newClass) => {
  builtElements +=
   `<div class = "radio">
      <input class=${newClass} type="radio" name="result" value="option">${data1} @ ${data2}
    </div>`;
}

// Special builder for meetup info.
let builtMeetupElements = "";
let elementMeetupBuilder = (data1, data2, newClass) => {
  builtMeetupElements +=
   `<div class = "radio">
      <input class=${newClass} type="radio" name="result" value="option"><a href="${data2}" target="_blank">${data1}</a>
    </div>`;
}
