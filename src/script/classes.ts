interface TwoWheelsVehicleInterface {
  showCityToTravel(): string;
}

class TwoWheelsVehicle implements TwoWheelsVehicleInterface {
  model: string;
  year: number;
  readonly cityToRide: string = 'Petersburg';
  // readonly property should have a value
  static beenFixed = 3;
  static showNumberItsBeenMended(): string {
    return `The vehicle's been mended ${TwoWheelsVehicle.beenFixed} times.`;
    // console.log(Bike.beenFixed);
  }

  // there should be a constructor
  constructor(model: string, year: number, city?: string) {
    if (city !== undefined) {
      this.cityToRide = city;
    }
    this.model = model,
      this.year = year;
  }

  showCityToTravel(): string {
    return `${this.cityToRide} is the city I travelled to with the vehicle.`;
  }

  riding(): string {
    return this.year + ' is a year it has been used since';
  }
};

const myBike = new TwoWheelsVehicle('Lorak', 2012);
console.log(myBike.riding());
console.log(myBike.showCityToTravel());
console.log(TwoWheelsVehicle.showNumberItsBeenMended());

class Scooter extends TwoWheelsVehicle {
  private speed: number = 55;
  // private property should have a value

  readonly cityToRide: string = 'No city';
  constructor(model: string, year: number, city?: string, wheelsDiameter?: number) {
    super(model, year, city);

    if (city !== undefined) {
      this.cityToRide = city;
    }
  }

  showWheelsDiameter(num: number): string {
    return `Diameter of scooter wheels: ${num}cm.`;
  }

  showScooterSpees(): string {
    return `Speed of scooter: ${this.speed}km/h.`;
  }
}

const selfRide = new Scooter('Whoosh', 2020, '');
console.log(selfRide.showWheelsDiameter(15));
console.log(selfRide.showScooterSpees());
