// Your code here

class Dragon {
  constructor(name, color) {
    //we call these by using the input. so ie green dragon: greenDragon.name = name this = greenDragon ?
    this.name = name
    this.color = color

  }
  breathesFire(){
    // ${name} or ${this.name}?
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...dragons) {
    let array = []
    dragons.forEach((dragon) => {
      array.push(dragon.name)
    })
    return array
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}