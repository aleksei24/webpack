abstract class Furniture {
  constructor(
    public material: string,
    public category: string
  ) { }

  abstract getPlace(): string
}

// impossible to create an instance of an abstract class with new
// const stool = new Furniture('wood', 'stool') 

// the right way is this one
class Chair extends Furniture {
  // there should be super, not constructor
  constructor(
    public material: string,
    public category: string,
    public comfort: boolean
  ) {
    super(material, category)
  }

  getPlace(): string {
    return 'Chair is on the floor'
  }
}

const stool = new Chair('oak', 'stool', false)

const myLogOutTwelve = document.querySelector('#log_twelve') as HTMLObjectElement
myLogOutTwelve.innerText = `${stool.getPlace()}`