/*
 * Modify and return the array so that all even elements are doubled
 * and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map((x) => {
    if (x % 2 === 0) {
      return x * 2
    }
    return x * 3
  })
}

// expect 3, 4, 9, 8
console.log(modifyArray([1, 2, 3, 4]))
