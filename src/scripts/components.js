// build html components here

let builtElements = "";
let elementBuilder = (data1, data2) => {
  builtElements += `<input type="radio" name="result" value="option">${data1} ${data2}`;
}


elementBuilder("wow", "wow");