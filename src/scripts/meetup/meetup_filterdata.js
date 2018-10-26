function accessURL (eventar)  {
  eventar.forEach(events => {
    eventNames.push(events.url)
  })
  console.log(eventNames)
  }
