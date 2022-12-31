//  * Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const l1 = list1?.val
  const l2 = list2?.val

  if (l1 != null && l2 != null) {
    return new ListNode(
      Math.min(l1, l2),
      mergeTwoLists(
        l1 <= l2 ? list1?.next : list1,
        l1 <= l2 ? list2 : list2.next
      )
    )
  } else if (l1 != null) {
    return list1
  } else if (l2 != null) {
    return list2
  }
  return null
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

const list1: number[] = [-10, -9, -6, -4, 1, 9, 9]

const list2: number[] = [-5, -3, 0, 7, 8, 8]

const convertAndMerge = (arr1: number[], arr2: number[]) => {
  const ln1 = convertToListNode(arr1)
  const ln2 = convertToListNode(arr2)
  return mergeTwoLists(ln1, ln2)
}

const merged = convertAndMerge(list1, list2)
const convertToList = (l: ListNode | null, arr = []): number[] => {
  if (l?.val) {
    return [...arr, l.val, ...convertToList(l?.next)]
  } else {
    return arr
  }
}
console.log(list1, list2, convertToList(merged))
