// function thats searching for the data from api when specified via button 
const parkSearch = function (eventListenerValue) {
    let typeofPark = ""
    if (eventListenerValue === "volleyball") {
        typeofPark = "volleyball=Yes"
    } else if (eventListenerValue === "golfCourse") {
        typeofPark = "golf_course=Yes"
    } else if (eventListenerValue === "basketballCourts") {
        typeofPark = "basketball_courts=Yes"
    } else if (eventListenerValue === "baseballFields") {
        typeofPark = "baseball_fields=Yes"
    } else if (eventListenerValue === "footballFields") {
        typeofPark = "football_multi_purpose_fields=Yes"
    }
    return typeofPark;
}
let parks = [];
const parkFetch = function (parkValue) {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkValue}`, {
        headers: {
            "Accept": "application/json",
            "X-App-Token": "T7zn5kO3GnGyvLhoGQjL1b2EN"
        }
    })
        .then(parkData => parkData.json())
        .then(parkData => {
            getParkName(parkData)
        })
}
