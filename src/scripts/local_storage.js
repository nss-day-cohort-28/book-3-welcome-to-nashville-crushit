// function to fetch json server data and to post it in the dom
let mainFetch = function () {fetch(`http://localhost:8088/my_itinerary`, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then(data => data.json())
  .then((data) => {
    injectItinerary(data)
  })}


mainFetch()
// sends new info to json
const localJson = function (data) {
  fetch(`http://localhost:8088/my_itinerary`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}