// Eventbrite Anonymous access OAuth token BGQCNORPETDNTE2EVJT2


const foodDrink = "110";
const arts = "105";
const sports = "108";
const hobbies = "119";
const familyEducation = "115";

const meetupSearch = function (eventListenerValue) {
  let categoryNumb = ""
  if (eventListenerValue === "Food_and_Drink") {
    categoryNumb = foodDrink;
  } else if (eventListenerValue === "Arts") {
    categoryNumb = arts;
  } else if (eventListenerValue === "Sports") {
    categoryNumb = sports;
  } else if (eventListenerValue === "Hobbies")  {
    categoryNumb = hobbies;
  } else if (eventListenerValue === "Family") {
    categoryNumb = familyEducation;
  }
    return categoryNumb;
}

let eventNames = [];
let events = [];
const meetupFetch = function (categoryValue) {
fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&categories=${categoryValue}&start_date.keyword=today&sort_by=best`, {
headers: {
  "Authorization": "Bearer BGQCNORPETDNTE2EVJT2"
}
})
.then(eventdata => eventdata.json())
.then(eventdata => eventdata.events)
.then(event => {
  events.push(event);
  console.log("event", event)
  events.forEach(eventar => accessEventName(eventar))
})
}

// Build dom element
function accessEventName (eventar)  {
  if (eventar.length === 0) {
    alert("No events of that type today. Search again.")
  } else
  for(let i = 0; i < 5 && i < eventar.length; i++) {
    let newNames = eventar[i].name.text;
    let newURL = eventar[i].url;
    elementBuilder(newNames, newURL);
    console.log(builtElements)
  }
  injection();
}