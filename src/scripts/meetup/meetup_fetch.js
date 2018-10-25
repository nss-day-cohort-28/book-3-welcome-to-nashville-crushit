// Eventbrite Anonymous access OAuth token BGQCNORPETDNTE2EVJT2


const foodDrink = "110";
const arts = "105";
const sports = "108";
const hobbies = "119";
const familyEducation = "115";

fetch("https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&sort_by=date", {
  headers: {
    "Authorization": "Bearer BGQCNORPETDNTE2EVJT2"
  }
})
  .then(meetup => meetup.json())
  .then(filtered_meetups => {
    console.log(filtered_meetups)
  })
