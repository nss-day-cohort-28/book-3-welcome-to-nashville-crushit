function accessEventInfo(eventar)  {
  buildClear();
  // Creates user interaction if no events exist of selected type for current day.
  if (eventar.length === 0) {
    alert("No events of that type today. Search again.")
  } else
  for(let i = 0; i < 5 && i < eventar.length; i++) {
    let newNames = eventar[i].name.text;
    let newURL = eventar[i].url;
    elementMeetupBuilder(newNames, newURL, "meetup");
  }
  meetupInjection();
}