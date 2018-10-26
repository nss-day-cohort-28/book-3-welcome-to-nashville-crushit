function accessURL (parkar) {
    parkar.forEach(parks => {
        parkNames.push(parks.url)
    })
    console.log(parkNames)
}