//  * Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) return null
  let next: undefined | ListNode | null = head?.next
  let newNext: undefined | ListNode | null
  head.next = null

  while (next) {
    newNext = next.next
    next.next = head
    // move
    head = next
    next = newNext
  }

  return head
}

const convertToListNode = (arr: number[]) => {
  if (arr.length === 0) {
    return null
  }

  let linked: ListNode | null = null
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i]
    const lastNode: ListNode = new ListNode(element, linked)
    linked = lastNode
  }
  return linked
}

const convertToList = (l: ListNode | null, arr = []): number[] => {
  if (l?.val) {
    return [...arr, l.val, ...convertToList(l?.next)]
  } else {
    return arr
  }
}

const input: number[] = []
const conv = convertToListNode(input)
const res = reverseList(conv)
const out = convertToList(res)

console.log(out, 'out')
