function accessEventInfo(eventar)  {
  // Creates user interaction if no events exist of selected type for current day.
  if (eventar.length === 0) {
    buildClear();
    builtMeetupElements +=
    `<div>
      There are no upcoming meetups listed for this date! 
     </div>`;
  } else
  buildClear();
  for(let i = 0; i < 5 && i < eventar.length; i++) {
    let newNames = eventar[i].name.text;
    let newURL = eventar[i].url;
    elementMeetupBuilder(newNames, newURL, "meetup");
  }
  meetupInjection();
}