function reverseString(s) {
  let reversed = s

  try {
    // reversed = [...s].reverse().join('')
    reversed = s.split('').reverse().join('')
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log(reversed)
  }
}

function reverseStringLoop(s) {
  // s = s.toString()
  const reversed = []

  try {
    if (typeof s !== 'string') {
      throw new Error('expected a string')
    }

    for (let i = s.length - 1; i >= 0; i--) {
      reversed.push(s[i])
    }
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log(reversed.join(''))
  }
}

function isPositive(a) {
  if (a > 0) {
    return 'YES'
  }
  if (a === 0) {
    throw new Error('Zero Error')
  }

  throw new Error('Negative Error')
}

reverseString(1234)
reverseStringLoop(1234)
isPositive(3)
