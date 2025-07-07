// let todos = []

// function addTodo(todo){
//   todos.push(todo)
// }

// function removeTodo(todo) {
//   todos = todos.filter((e,i)=>{
//     return todo != e
//   })

// }

// //Adding something in todo

// addTodo("Going to market")
// addTodo("presentation")
// addTodo("go to the office")

// console.log(todos);

// //Remove something in todo

// removeTodo("Going to market")

// console.log(todos);


let todos = []

function addTodo(todo){
  todos.push(todo)
}

function removeTodo(todo) {
  todos = todos.filter((e,i)=>{
    return todo != e.id
  })

}

//Adding something in todo

addTodo({id: todos.length+1, content: "Going to market"})
addTodo({id: todos.length+1, content:"presentation"})
addTodo({id: todos.length+1, content:"Going to market"})
addTodo({id: todos.length+1, content:"go to the office"})

console.log(todos);

//Remove something in todo

removeTodo(3)

console.log(todos);