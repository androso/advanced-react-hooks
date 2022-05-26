const dogs = {}

class Dog {
  constructor(name) {
    this.name = name
  }
}

function getDog(name) {
  if (dogs[name] === undefined) {
    dogs[name] = new Dog(name)
  }
  return dogs[name]
}

const dog1 = getDog('sam')
const dog2 = getDog('sam')
console.log(dog1 === dog2)
