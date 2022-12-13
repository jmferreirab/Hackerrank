function rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  }
}

function testRectangle() {
  const userRect = rectangle(2, 3)
  console.assert(userRect.area === 6, 'rectangle Test 1')
  console.assert(userRect.length === 2, 'rectangle Test 1')
  console.assert(userRect.width === 3, 'rectangle Test 1')
  console.assert(userRect.perimeter === 10, 'rectangle Test 1')
}

function getCount(objects) {
  return objects.filter((o) => o.x === o.y).length
}

function testGetCount() {
  let data = [
    { x: 1, y: 1 },
    { x: 1, y: 1 },
    { x: 3, y: 3 },
    { x: 1, y: 4 },
  ]
  console.assert(getCount(data) === 3, 'GetCount Test 1')

  data = [{ x: 0, y: 1 }]
  console.assert(getCount(data) === 0, 'GetCount Test 2')
}

testRectangle()
testGetCount()

class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  perimeter() {
    return this.sides.reduce((base, current) => base + current, 0)
  }
}

const uRectangle = new Polygon([10, 20, 10, 20])
const square = new Polygon([10, 10, 10, 10])
const pentagon = new Polygon([10, 20, 30, 40, 43])

console.log(uRectangle.perimeter())
console.log(square.perimeter())
console.log(pentagon.perimeter())
