const todos = [
  {
    id: 1,
    title: 'Got to school',
    completed: true
  },
  {
    id: 2,
    title: 'Got to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Got shopping',
    completed: false
  },
]

// for(let i = 0; i < todos.length; i++){
//   let todo = todos[i];
//   if(todo.completed == true) {
//     console.log(i, todo.title);
//   }
// }

// for(let i in todos){
//   let todo = todos[i];
//   if(todo.completed == true) {
//     console.log(i, todo.title);
//   }
// }

for(let todo of todos){

  if(todo.completed == true){
    console.log(todo.title);
  }
}