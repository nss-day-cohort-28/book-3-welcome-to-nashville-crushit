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

const parkFetch = function (parkValue) {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkValue}`, {
        headers: {
            "Accept": "application/json",
            "X-App-Token": "T7zn5kO3GnGyvLhoGQjL1b2EN"
        }
    })
        .then(data => data.json())
        .then((data) => {
            data.forEach( (obj) => {
                let parkAddress = obj.mapped_location_address;
                let parkName = obj.park_name;
                console.log(parkAddress, parkName);
            })
            console.log(data);
        })
}
// "mapped_location_address"
//  "park_name" 
// building dom element
