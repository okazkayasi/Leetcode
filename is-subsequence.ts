function isSubsequence(s: string, t: string): boolean {
  let i = 0
  let j = 0
  const sLen = s.length
  const tLen = t.length
  while (true) {
    if (i === sLen) {
      return true
    }
    if (j === tLen) {
      return false
    }

    if (s[i] === t[j]) {
      i++
      j++
    } else {
      j++
    }
  }

  return false
}
console.log(isSubsequence('axc', 'ahbgdc'))
