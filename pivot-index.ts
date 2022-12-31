function pivotIndex(nums: number[]): number {
  if (nums.length === 0) return -1
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    const leftNums = nums.slice(0, index)
    const sumLeftNums = leftNums.reduce((a, b) => a + b, 0)

    const rightNums = nums.slice(index + 1)
    const sumRightNums = rightNums.reduce((a, b) => a + b, 0)
    console.log(leftNums, element, rightNums)
    console.log(sumLeftNums, sumRightNums)
    if (sumLeftNums === sumRightNums) return index
  }
  return -1
}

function pivotIndex2(nums: number[]): number {
  if (nums.length === 0) return -1
  let leftSum = 0
  let rightSum = nums.reduce((a, b) => a + b, 0) - nums[0]
  for (let index = 0; index < nums.length; index++) {
    if (leftSum === rightSum) {
      return index
    }
    leftSum += nums[index]
    rightSum -= nums[index + 1]
  }
  return -1
}

const a = pivotIndex2([1, 7, 3, 6, 5, 6])
console.log(a)
