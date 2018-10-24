fetch("https://api.meetup.com/find/upcoming_events?key=8636b7c476c334d163e807e7523575b&lat=36.174465&lon=-86.767960&order=time")
  .then(meetup => meetup.json())
  .then(filtered_meetups => {
    console.table(filtered_meetups)
  })