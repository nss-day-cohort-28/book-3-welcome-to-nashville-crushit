// Built element for dom
const getParkName = function (parkar) {
    for (let i = 0; i < 5 && i < parkar.length; i++) {
        let parkAddress = parkar[i].mapped_location_address;
        let parkName = parkar[i].park_name;
        elementBuilder(parkName, parkAddress, "park");
    }
    injection();
}