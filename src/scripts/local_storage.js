// function to fetch json server data and to post it in the dom

let mainFetch = function () {
  fetch(`http://localhost:8088/my_itinerary`, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(data => data.json())
    .then((data) => {
      injectItinerary(data);
      buildSavedItineray(data);
    })
}


let newFetch = function () {
  return fetch(`http://localhost:8088/my_itinerary`, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(data => data.json())
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


// pulls saved itinerary 
const viewSavedJson = (numb) => {
  fetch(`http://localhost:8088/my_itinerary/${numb}`, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then(data => data.json())
  .then((converteddata) => {
  recallSavedItinerary(converteddata)
  
})}