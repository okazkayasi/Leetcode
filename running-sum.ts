function runningSum(nums: number[]): number[] {
  return nums.reduce(
    (a, b) => [...a, b + (a.length > 0 ? a[a.length - 1] : 0)],
    [] as number[]
  )
}

console.log(runningSum([1, 2, 3, 4]))
