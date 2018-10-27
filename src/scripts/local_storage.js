// function to fetch json server data and to post it in the dom

let jsonFact;
let mainFetch = function () {
  fetch(`http://localhost:8088/my_itinerary`, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(data => data.json())
    .then((data) => {
      injectItinerary(data);
      jsonFact = data;
      buildSavedItineray(jsonFact);
    })
}



mainFetch()
// sends new info to json
const localJson = function (data) {
  fetch(`http://localhost:8088/my_itinerary/1`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}

// saves an itinerary 
const postJson = (data) => {
  fetch(`http://localhost:8088/my_itinerary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}

const viewSavedJson = (numb) => {
  fetch(`http://localhost:8088/my_itinerary/${numb}`, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then(data => data.json())
  .then((converteddata) => {
    console.log(converteddata)
    recallSavedItinerary(converteddata)
  
})}