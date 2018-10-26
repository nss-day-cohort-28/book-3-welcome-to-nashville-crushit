// build html components here


// Creates a new radio button with the information we pass into it and then adds that div to the build elements string.
// Should work for food, music and parks api. We may have to make something different for weather.
let builtElements = "";
let elementBuilder = (data1, data2, newClass) => {
  builtElements +=
   `<div class = "radio">
      <input class=${newClass} type="radio" name="result" value="option">${data1} @ ${data2}
    </div>`;
}

