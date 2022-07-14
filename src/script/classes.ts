interface BikeInterface {
  showCityToTravel(): string;
}

class Bike implements BikeInterface {
  model: string;
  year: number;
  readonly cityToRide: string = 'Petersburg';
  // readonly property should have a value
  static beenFixed = 3;
  static showNumberItsBeenMended(): string {
    return `Bike's been mended ${Bike.beenFixed} times.`;
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

class Scooter extends Bike {
  // private wheelDiameter: number;
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
}

const selfRide = new Scooter('Whoosh', 2020, '');
console.log(selfRide.showWheelsDiameter(15));
