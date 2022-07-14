class Bike {
  model: string;
  year: number;

  // there should be a constructor
  constructor(model: string, year: number) {
    this.model = model,
      this.year = year
  }

  production() {
    return this.year + ' is a year it was made';
  }
};

const myBike = new Bike('Lorak', 2012);
console.log(myBike.year);
console.log(myBike.production());
