abstract class Furniture {
  constructor(
    public material: string,
    public category: string
  ) { }
}

// impossible to create an instance of an abstract class with new
// const stool = new Furniture('wood', 'stool') 

// the right way is this one
class Chair extends Furniture {
  // there should be super, not constructor
  super(
    material: string,
    category: string
  ) { }
}

const stool = new Chair('oak', 'stool')