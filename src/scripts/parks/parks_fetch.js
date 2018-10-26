// fetch('https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=T7zn5kO3GnGyvLhoGQjL1b2EN')
//     .then(data => data.json())
//     .then ( (data)=> {
//         console.table(data);
//     })


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
let parkNames = [];
let parks = [];
const parkFetch = function (parkValue) {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkValue}`, {
        headers: {
            "Accept": "application/json",
            "X-App-Token": "T7zn5kO3GnGyvLhoGQjL1b2EN"
        }
    })
        .then(parkData => parkData.json())
        .then(parkData => parkData.park)
        .then(park => {
            parks.push(park);
            parks.forEach(parkar => getParkName(parkar))
        })
}
// Built element for dom
function getParkName(pakrar) {
    for (let i = 0; i < 5 && i < parkar.length; i++) {
        let parkAddress = obj.mapped_location_address;
        let parkName = obj.park_name;
        elementBuilder(parkName, parkAddress, "park");
    }
    injection();
}


// data.forEach((obj) => {
//     let parkAddress = obj.mapped_location_address;
//     let parkName = obj.park_name;
//     elementBuilder(parkName, parkAddress, "park")
// })
