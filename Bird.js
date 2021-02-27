class Bird {
  constructor(x, y, r) {
    var options = {
      'restitution': 1.0,
      'friction': 0,
      'density': 1.0,
      'isStatic': false
    }
    this.r = r
    this.body = Bodies.circle(x, y, r, options)
    World.add(world, this.body)

  }

  display() {
    fill('purple')
    ellipseMode(RADIUS)
    ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
console.log('hello')
  }
}
