function isIsomorphic(s: string, t: string): boolean {
  const nUsed: Record<string, string> = {}
  const used: string[] = []

  const sArray = s.split('')
  const tArray = t.split('')
  for (let index = 0; index < sArray.length; index++) {
    const char1 = sArray[index]
    const char2 = tArray[index]

    if (nUsed[char1] === char2) {
    } else if (!nUsed[char1] && !used.includes(char2)) {
      nUsed[char1] = char2
      used.push(char2)
    } else {
      return false
    }
  }

  return true
}

console.log(isIsomorphic('42', '13'))
