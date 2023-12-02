const todoList = [{
  name: 'make dinner',
  dueDate: '2023-12-09'
 }, {
  name: 'wash dishes',
  dueDate: '2023-12-09'
 }];


renderTodoList();

function renderTodoList() {
  let todoListHTML='';

/*
  //USING FOR LOOP
  for (i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; 
    //generating the HTML
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
  //console.log(todoListHTML);
*/


  //USING .forEach LOOP
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; 
    //generating the HTML
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  //to put the result into html
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', ()=>{
    addTodo();
  });


function addTodo() {
  //take the input and save to inputElement
  const inputElement = document.querySelector('.js-name-input');
  // to get the text out use a property of inputElement called value
  const name = inputElement.value;
  //above step will take the value save inside the inputElement and put into variable 'name'

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;



  //let put the input into the array
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

  //display the array in the console
  //console.log(todoList);


  //reset the text box
  inputElement.value = '';

  renderTodoList();
}