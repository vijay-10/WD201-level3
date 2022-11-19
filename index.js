const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    var i;
    var overdue_list = [];
    for (i in all) {
      if (all[i].due_Date < today) {
        overdue_list.push(all[i]);
      }
    }
    return overdue_list;
  }

  const due_Today = () => {
    var i;
    var due_Today_lst = [];
    for (i in all) {
      if (all[i].due_Date === today) {
        due_Today_lst.push(all[i]);
      }
    }
    return due_Today_lst;
  }

  const dueLater = () => {
    var i;
    var dueLater_list = [];
    for (i in all) {
      if (all[i].due_Date > today) {
        dueLater_list.push(all[i]);
      }
    }
    return dueLater_list;
  }

  const to_Displayable_List = (list) => {
    var i;
    var displayList = []
    for (i=0;i<list.length;i++) {
      if (list[i].completed === false) {
        if (list[i].due_Date===today) {
          displayList.push(`[ ] ${list[i].title}`)
        }
        else {
          displayList.push(`[ ] ${list[i].title} ${list[i].due_Date}`)
        }
      }
      else {
        if (list[i].due_Date===today) {
          displayList.push(`[x] ${list[i].title}`)
        }
        else {
          displayList.push(`[x] ${list[i].title} ${list[i].due_Date}`)
        }          
      }
    }
    
    return displayList.join("\n");
  }

  return { all, add, markAsComplete, overdue, due_Today, dueLater, to_Displayable_List };
}

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', due_Date: yesterday, completed: false })
todos.add({ title: 'Pay rent', due_Date: today, completed: true })
todos.add({ title: 'Service Vehicle', due_Date: today, completed: false })
todos.add({ title: 'File taxes', due_Date: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', due_Date: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.to_Displayable_List(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDue_Today = todos.due_Today()
let formattedItemsDue_Today = todos.to_Displayable_List(itemsDue_Today)
console.log(formattedItemsDue_Today)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.to_Displayable_List(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")