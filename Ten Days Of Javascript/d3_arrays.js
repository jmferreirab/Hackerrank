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

function getSecondLargest(nums) {
  nums.sort((a, b) => a - b) // inplace
  const ordered = nums.filter((item) => !nums.slice(-1).includes(item))
  return ordered.slice(-1)[0]
}

function main() {
  const n = +readLine()
  console.log(n)
  const nums = readLine().split(' ').map(Number)

  console.assert(getSecondLargest(nums) === 4)
  console.log(getSecondLargest(nums))
}

process.stdin.emit('data', '5\n')
process.stdin.emit('data', '2 3 6 6 5\n')
process.stdin.emit('end')
process.exit()
