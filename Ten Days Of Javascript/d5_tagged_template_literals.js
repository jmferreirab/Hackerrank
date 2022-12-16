process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin
})

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => string.trim())

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  // A = Area, P = perimeter
  const Area = expressions[0]
  const Perimeter = expressions[1]

  // uses quadratic formula from l = P/2 - w = A/w -> 2w^2 - Pw + 2A = 0
  const top = Math.sqrt(Perimeter ** 2 - 16 * Area)
  const side1 = (Perimeter - top) / 4
  const side2 = (Perimeter + top) / 4

  return [side1, side2]
}

function main() {
  // + implicitly forces string to be parsed as number
  const s1 = +readLine()
  const s2 = +readLine()

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${
    2 * (s1 + s2)
  }.`

  console.log(s1 === x ? s1 : -1)
  console.log(s2 === y ? s2 : -1)
}

// expect 2, 3 in stdout
process.stdin.emit('data', '2\n')
process.stdin.emit('data', '3\n')
process.stdin.emit('end')

process.exit()
