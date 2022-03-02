function vehicleClass() {

    let parts = { engine: 6, power: 100 };




    class Vehicle {


        constructor(type, model, parts, fuel, drive) {
            this.type = type;
            this.model = model;
            this.fuel = Number(fuel);
            this.drive = function (fuelLoss) {
                fuel = Number(fuel) - fuelLoss;
                return fuel;
            }
            this.parts = parts;
            parts.quality = parts.engine * parts.power;
        }
        
    }

    let vehicle = new Vehicle('a', 'b', parts, 200);
    console.log(vehicle);
    console.log(vehicle.drive(100));
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}
vehicleClass()