function Tamagotchi (name, kind) {
  this.health = 50
  this.happiness = 50
  this.fullness = 50
  this.cleanness = 50
  this.cheerfulness = 50
  this.mood = 50
  this.breakTimer = false

  this.born = function () {
    console.log(`The ${kind} ${name} was born`)
  }

  this.feed = function () {
    console.log(`${name} is feeding`)
    this.fullness += 10
    this.checkShowStatus()
  }

  this.walk = function () {
    console.log(`${name} is walking`)
    this.cheerfulness += 10
    this.fullness -= 10
    this.cleanness -= 10
    this.checkShowStatus()
  }

  this.sleep = function () {
    console.log(`${name} is sleeping`)
    this.cheerfulness += 10
    this.fullness -= 10
    this.checkShowStatus()
  }

  this.play = function () {
    console.log(`${name} is playing`)
    this.happiness += 10
    this.fullness -= 10
    this.cleanness -= 10
    this.checkShowStatus()
  }

  this.wash = function () {
    console.log(`${name} is washing`)
    this.cleanness += 10
    this.fullness -= 10
    this.checkShowStatus()
  }

  this.cure = function () {
    console.log(`${name} is curing`)
    this.health += 10
    this.checkShowStatus()
  }

  this.checkShowStatus = function () {
    if (this.health === 0 || this.happiness === 0 || this.fullness === 0 || this.cleanness === 0 || this.cheerfulness === 0 || this.mood === 0) {
      alert(`The ${kind} ${name} could not stand the abuse and ran away`)
      this.breakTimer = true
    } else {
      console.log(`Health: ${this.health}`)
      console.log(`Happiness: ${this.happiness}`)
      console.log(`Fullness: ${this.fullness}`)
      console.log(`Cleanness: ${this.cleanness}`)
      console.log(`Cheerfulness: ${this.cheerfulness}`)
      console.log(`Mood: ${this.mood}`)
      console.log('-----------------------------------------------------')
    }
  }

  this.randomAction = function () {
    var action = Math.floor(Math.random() * 6 + 1)
    switch (action) {
      case 1:
        this.feed()
        break
      case 2:
        this.walk()
        break
      case 3:
        this.sleep()
        break
      case 4:
        this.play()
        break
      case 5:
        this.wash()
        break
      case 6:
        this.cure()
        break
    }
  }
}

var pet = new Tamagotchi('Lucky', 'dog')
pet.born()
var timer = setInterval(function run () {
  if (pet.breakTimer) {
    clearInterval(timer)
  }
  pet.randomAction()
}, 3000)
