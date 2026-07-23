let vehicle2 = {
    id: "AK12113",
    longitude: 59.358615, 
    latitude: 17.947589,
    getId: function() {
        return this.id;
    }
};
let vehicle2JSON = JSON.stringify(vehicle2);
console.log(typeof vehicle2JSON); // -> string
console.log(vehicle2JSON);

let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // -> object
console.log(vehicle.position.longitude); // -> 59.358615
