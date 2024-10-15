// let list1 = [1,2,4]
// let list2 = [1,3,4]


class Node
{
  constructor(value)
  {
    this.value = value
    this.next = null
  }
}

class LinkedList
{
  constructor()
  {
    let head = null
    this.size = 0
  }

  isEmpty()
  {
    if (this.size == 0)
      {
        return true
      }
    else
    {
      return false
    }
  }

 append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = node
    }
    this.size++
  }
  
  prepend(value)
  {
    const node = new Node(value)
    if (this.isEmpty()) 
    {
      this.head = node
    } else 
    {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  getSize()
  {
    return this.size
  }

  
  giveLastElement()
  {
    if (this.isEmpty()) 
    {
      console.log("List is empty")
      return null
    }
    else
    {
        let curr = this.head
        let store
        while (curr) 
        {
          store = curr
          curr = curr.next
          console.log(curr)
        }
        return store
    }

  }

  removeLast()
  {
    if (this.isEmpty()) 
    {
      console.log("List is empty")
      return null
    }
    else
    {
      let curr = this.head
      while (curr) 
      {
        curr = curr.next
      }
      curr.value = null
      this.size--
    }
  }


  print() {
    if (this.isEmpty()) 
    {
      console.log("List is empty")
    }
    else 
    {
      let curr = this.head
      let list = ""
      while (curr) {
        list += curr.value
        curr = curr.next
      }
      return list
    }
  }
}

function isGreater()
{
  let temp1 = list1Values[list1Values.length-1]
  let temp2 = list2Values[list2Values.length-1]
  
  console.log(list1Values[list1Values.length-1], "List 1 Last Element")
  console.log(list2Values[list2Values.length-1], "List 2 Last Element")

  if (temp1 != undefined && temp2 != undefined)
  {
    if (temp1 > temp2)
    {
      list1Values.splice(list1Values.length-1)
      return temp1
    }
    else if (temp2 >= temp1)
    {
      list2Values.splice(list2Values.length-1)
      return temp2
    }
  }
  else if (temp1 != undefined)
  {
    return temp1
  }
  else if (temp2 != undefined)
  {
    return temp2
  }
}


const list1 = new LinkedList()
const list2 = new LinkedList()
const listFinal = new LinkedList()

list1.prepend(9)
list1.prepend(4)
list1.prepend(4)
list1.prepend(2)
list1.prepend(1)
list1.prepend(1)

list2.prepend(4)
list2.prepend(3)
list2.prepend(1)

console.log(list1.print())
console.log(list2.print())

let list1Values = list1.print()
let list2Values = list2.print()

list1Values = list1Values.split('')
list2Values = list2Values.split('')

let lengthTotal = list1Values.length + list2Values.length

console.log(list1Values, "List 1 value")
console.log(list2Values, "List 2 value")

for (i=0; i<lengthTotal; i++){
  if (list1Values.length == 0 && list2Values.length == 0)
  {
    i = lengthTotal
    break
  }
  let value = isGreater()
  console.log(value, "value")
  listFinal.prepend(value)
}

console.log("Hello")



console.log(list1.print())
console.log(list2.print())
console.log(listFinal.print())