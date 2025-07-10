// let products = []

// function addProduct(product){
//   todos.push(product)
// }

// function removeProduct(product) {
//   products = products.filter((e,i)=>{
//     return product != e
//   })

// }

// //Adding something in product

// addProduct("Going to market")
// addProduct("presentation")
// addProduct("go to the office")

// console.log(products);

// //Remove something in product

// removeProduct("Going to market")

// console.log(products);


// let products = []

// function addProduct(product){
//   products.push(product)
// }

// function removeProduct(product) {
//   products = products.filter((e,i)=>{
//     return product != e.id
//   })

// }

// //Adding something in product

// addProduct({id: products.length+1, content: "Going to market"})
// addProduct({id: products.length+1, content:"presentation"})
// addProduct({id: products.length+1, content:"Going to market"})
// addProduct({id: products.length+1, content:"go to the office"})

// console.log(products);

// //Remove something in product

// removeProduct(3)

// addProduct({id: products.length+1, content:"something nice"})

// console.log(products);


//EXAMPLE on SPLICE
//Splice remove a target number as far as its index and how many number you want to remove is known.  Example
//From the example Below if i want to remove only "hello" i will type.
//the index number of "hello" which is = 2, and how many item i want to remove which is = 1 item so they will be written in the parenthesis as (2,1)
// the name of the array 
// e.g items.splice(2,1) 
//console.log(items)

//result will  be [22, 8,55]

//but if i want to remove 2 items instead of writting 1, i will write 2
//i.e items.splice(2,2)
//console.log(items)

//result will be [22, 8]

// const arr = [22, 8, 'hello', 55]
// arr.splice(0, 1)
// console.log(arr)


// //example on FILTER

// let items = [22, 8, 'hello', 55]
// items = items.filter((e,i)=>{
//     return e%2==1
//     return e != "hello"
// })
// console.log(items)

//How to generate a random number
//HINT : go to Math in javasript on chrome (W3school)

// console.log(Math.floor(Math.random()*1000))
// console.log(Math.floor(Math.random()*1000))
// console.log(Math.ceil(Math.random()*1000))
// console.log(Math.ceil(Math.random()*1000))




// TO GENERATE ID (RANDOMLY)

let todos = []

function generateId(){
  return Math.floor(Math.random()*100000000)
}

function addTodo(todo){
  todos.push(todo)
}

function removeTodo(todo) {
  todos = todos.filter((e,i)=>{
    return todo != e.id
  })

}

function renderInfo(){
  const list = document.getElementById('todos-list')
list.innerHTML = ''
todos.forEach((todo,idx)=>{
  const div = document.createElement('div')
  const li = document.createElement('li')
  const img = document.createElement('img')
  img.src = 'https://img.icons8.com/ios11/512/FFFFFF/delete.png'
  img.alt = todo.id
  // li.innerHTML = todo.content   this is thesame as li.textContent = todo.content
  li.textContent = todo.content
  img.classList.add('bin')
  div.appendChild(li)
  div.appendChild(img)
  list.appendChild(div)
})
}
 //adding value to input and making it reflect in console.

// document.getElementById('btn').addEventListener('click',()=>{
// addTodo({id:generateId(), content: document.getElementById('inp').value})
// })

//Adding value to an array using click button

// document.getElementById('btn').addEventListener('click',()=>{
//   console.log(document.getElementById('inp').value)
//   console.log(todos);
// })

document.getElementById('btn').addEventListener('click',()=>{
addTodo({id: generateId(), content: document.getElementById('inp').value})


// const list = document.getElementById('todos-list')
// list.innerHTML = ''
// todos.forEach((todo,idx)=>{
//   const div = document.createElement('div')
//   const li = document.createElement('li')
//   const img = document.createElement('img')
//   img.src = 'https://img.icons8.com/ios11/512/FFFFFF/delete.png'
//   img.alt = todo.id
//   // li.innerHTML = todo.content   this is thesame as li.textContent = todo.content
//   li.textContent = todo.content
//   img.classList.add('bin')
//   div.appendChild(li)
//   div.appendChild(img)
//   list.appendChild(div)
// })


//Instead of writing the Above long line of Code, we can put them in a function E.G '(function renderIinfo())' and use it anywhere we want such as its used below.

renderInfo()


//this is another line of code

document.getElementById('inp').value=''
})



//REMOVAL PROCESS

//step 1 : get click on bin image only

document.getElementById('todos-list').addEventListener('click',(e) => {
  // console.log(e.target.tagName);
  if(e.target.tagName == 'IMG'){
    const id = e.target.getAttribute('alt')
    // console.log(id)
    removeTodo(id)
    renderInfo()
//   const list = document.getElementById('todos-list')
// list.innerHTML = ''
// todos.forEach((todo,idx)=>{
//   const div = document.createElement('div')
//   const li = document.createElement('li')
//   const img = document.createElement('img')
//   img.src = 'https://img.icons8.com/ios11/512/FFFFFF/delete.png'
//   img.alt = todo.id
//   // li.innerHTML = todo.content   this is thesame as li.textContent = todo.content
//   li.textContent = todo.content
//   img.classList.add('bin')
//   div.appendChild(li)
//   div.appendChild(img)
//   list.appendChild(div)
// })
 }

  // console.log(todos);
})










  

//Adding something in todo

// addTodo({id: generateId(), content: "Going to market"})
// addTodo({id: generateId(), content:"presentation"})
// addTodo({id: generateId(), content:"Going to market"})
// addTodo({id: generateId(), content:"go to the office"})

// console.log(todos);

// //Remove something in todo

// removeTodo(todos[2].id)

// addTodo({id: generateId(), content:"something nice"})

// console.log(todos);
