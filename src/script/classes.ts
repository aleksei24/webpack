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
console.log(TwoWheelsVehicle.showNumberItsBeenMended());

const myLogOutNine = document.querySelector('#log_nine') as HTMLObjectElement;
myLogOutNine.innerText = `Class My Bike: 
  ${myBike.riding()};
  ${myBike.showCityToTravel()};
`;


class Scooter extends TwoWheelsVehicle {
  readonly cityToRide: string = 'No city';
  constructor(
    public model: string,
    public year: number,
    public city?: string,
    private speed: number = 55,
    // private property should have a value
    public wheelsDiameter?: number) {
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

const myLogOutTen = document.querySelector('#log_ten') as HTMLObjectElement;
myLogOutTen.innerText = `Class Scooter: 
  ${selfRide.showWheelsDiameter(15)};
  ${selfRide.showScooterSpees()};
`;

class MotorBike extends TwoWheelsVehicle {
  private engine: number = 250
  constructor(
    public model: string,
    public year: number,
  ) {
    super(model, year)
  }

  // getter
  get getModel(): string {
    return 'Model: ' + this.model
  }

  // setter
  set setEngine(value: number) {
    let num = value
    this.engine = num
  }
}

const trata = new MotorBike('Ant', 1999)

const myLogOutEleven = document.querySelector('#log_eleven') as HTMLObjectElement;
myLogOutEleven.innerText = `Getter motorbike: ${trata.getModel}`