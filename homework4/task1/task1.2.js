function Car (numberOfGears) {
  var gear = 0
  var speed = 0

  function gearUp () {
    if (gear < numberOfGears) {
      gear += 1
      speed += 20
    }
    console.log(`Gear = ${gear}, speed = ${speed}`)
  }

  function gearDown () {
    if (gear > 0) {
      gear -= 1
      speed -= 20
    }
    console.log(`Gear = ${gear}, speed = ${speed}`)
  }

  this.increaseSpeed = function () {
    gearUp()
  }

  this.decreaseSpeed = function () {
    gearDown()
  }
}

var car = new Car(5)

car.increaseSpeed()
car.increaseSpeed()
car.decreaseSpeed()
car.decreaseSpeed()
car.decreaseSpeed()
