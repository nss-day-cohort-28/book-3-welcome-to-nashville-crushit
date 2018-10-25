// fetch('https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=T7zn5kO3GnGyvLhoGQjL1b2EN')
//     .then(data => data.json())
//     .then ( (data)=> {
//         console.table(data);
//     })



const parkSearch = function (eventListenerValue) {
    let typeofPark = ""
    if (eventListenerValue === "volleyball") {
        typeofPark = "volleyball=Yes"
    } else if (eventListenerValue === "golfCourse") {
        typeofPark = "golf_course=Yes"
    } else if (eventListenerValue === "basketballCourts") {
        typeofPark; "basketball_courts=Yes"
    } else if (eventListenerValue === "baseballFeilds") {
        typeofPark = "baseball_feilds=Yes"
    } else if (eventListenerValue === "footballFeild") {
        typeofPark = "football_multi_purpose_feilds=Yes"
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
            console.log(data);
        })
}