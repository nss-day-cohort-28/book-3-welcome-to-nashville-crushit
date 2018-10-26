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
  events.forEach(eventar => accessEventName(eventar))
})
}

function accessEventName (eventar)  {
eventar.forEach(events => {
  eventNames.push(events.name.text)
})
console.log(eventNames)
}

// const meetupFetch = function (categoryValue) {
//   fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&categories=${categoryValue}&start_date.keyword=today&sort_by=best`, {
//   headers: {
//     "Authorization": "Bearer BGQCNORPETDNTE2EVJT2"
//   }
// })
//   .then(meetup => meetup.json())
//   // .then(filtered_meetups => {
//   //   console.log(filtered_meetups)
//   // })
//   // .then(eventdata => eventdata.events)
//   // .then(event => {
//   //   let eventNames = [];
//   //   let events = [];
//   //   events.push(event);
//   //   events.forEach(event => { eventNames.push(event.name.text)});
//   //   console.log(eventNames);
//   // })
// }
