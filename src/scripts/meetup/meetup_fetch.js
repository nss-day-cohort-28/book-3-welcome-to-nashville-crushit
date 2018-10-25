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

const meetupFetch = function (categoryValue) {
  fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&categories=${categoryValue}&sort_by=date`, {
  headers: {
    "Authorization": "Bearer BGQCNORPETDNTE2EVJT2"
  }
})
  .then(meetup => meetup.json())
  .then(filtered_meetups => {
    console.log(filtered_meetups)
  })
}
