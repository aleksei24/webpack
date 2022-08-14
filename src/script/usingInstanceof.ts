console.log('using instanceof');

interface BottledWater {
  brand: string
}

class Krainka implements BottledWater {
  volume: number;
  brand: string;
  constructor(volume: number, brand: string) {
    this.volume = volume;
    this.brand = brand;
  }
}

class Bouviet implements BottledWater {
  brand: string;
  bottle: string;
  constructor(brand: string, bottle: string) {
    this.brand = brand;
    this.bottle = bottle;
  }
}

const getRandomBottle = () => {
  return Math.random() < 0.5 ? new Krainka(1.5, 'Krainka') : new Bouviet('Lipetsk Bouvet', 'plastic');
}

let bottledWater = getRandomBottle();

if (bottledWater instanceof Krainka) {
  console.log(bottledWater.volume);
}

if (bottledWater instanceof Bouviet) {
  console.log(bottledWater.bottle);
}

console.log('stop using instanceof');
