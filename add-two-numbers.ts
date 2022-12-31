class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const hasNext = (l?: ListNode | null) => !!l?.next

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): number[] | null {
  let sum = 0
  let current1: undefined | ListNode | null = l1
  let current2: undefined | ListNode | null = l2

  let vals: number[] = []
  let addition = 0

  while (current1 != null || current2 != null) {
    const val = (current1?.val ?? 0) + (current2?.val ?? 0) + addition

    current1 = hasNext(current1) ? current1?.next : null
    current2 = hasNext(current2) ? current2?.next : null
    const leftover = val % 10
    addition = val >= 10 ? 1 : 0
    vals.push(leftover)
  }

  return vals
}

const convertToListNode = (arr: number[]) => {
  if (arr.length === 0) {
    return new ListNode()
  }

  let linked: ListNode | null = null
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i]
    const lastNode: ListNode = new ListNode(element, linked)
    linked = lastNode
  }
  return linked
}

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]
const listNode1 = convertToListNode(l1)
const listNode2 = convertToListNode(l2)
const numm = addTwoNumbers(listNode1, listNode2)
console.log(numm)

const l3 = [0]
const l4 = [0]
const ln3 = convertToListNode(l3)
const ln4 = convertToListNode(l4)
const num2 = addTwoNumbers(ln3, ln4)
console.log(num2)

const wl1 = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]
const wl2 = [5, 6, 4]

const wln1 = convertToListNode(wl1)
const wln2 = convertToListNode(wl2)
console.log(wln2)

// const num3 = addTwoNumbers(wln1, wln2) || []

// console.log(num3)

const ll1 = [9, 9, 9, 9, 9, 9, 9]
const ll2 = [9, 9, 9, 9]
const wll1 = convertToListNode(ll1)
const wll2 = convertToListNode(ll2)
const num4 = addTwoNumbers(wll1, wll2)
console.log(num4)
