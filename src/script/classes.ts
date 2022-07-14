interface BikeInterface {
  showCityToTravel(): string;
}

class Bike implements BikeInterface {
  model: string;
  year: number;
  wheelsDiameter?: number;
  readonly cityToRide: string = 'Petersburg';
  // readonly property should have a value
  static beenFixed = 3;
  static showNumberItsBeenMended(): number {
    return Bike.beenFixed;
    // console.log(Bike.beenFixed);
  }

  // there should be a constructor
  constructor(model: string, year: number, city?: string, wheelsDiameter?: number) {
    if (city !== undefined) {
      this.cityToRide = city;
    }
    this.model = model,
      this.year = year,
      this.wheelsDiameter = wheelsDiameter;
  }

  showCityToTravel(): string {
    return `${this.cityToRide} is the city I travelled to with my bike.`;
  }

  riding(): string {
    return this.year + ' is a year it has been used since';
  }
};

const myBike = new Bike('Lorak', 2012);
console.log(myBike.riding());
console.log(myBike.showCityToTravel());
console.log(Bike.showNumberItsBeenMended());
