fetch("https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&sort_by=date", {
  headers: {
    "Authorization": "Bearer BGQCNORPETDNTE2EVJT2"
  }
    .then(meetup => meetup.json())
    .then(filtered_meetups => {
      console.table(filtered_meetups)
    })
})