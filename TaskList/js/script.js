const form = document.getElementById('task-form');
const taskInput = document.getElementById('taskInput');
const taskList = document.querySelector('.taskList');
const clearBtn = document.querySelector('.clear-allbtn');
const filter = document.getElementById('filterTasks');
loadEventListners();

function loadEventListners(){
   document.addEventListener('DOMContentLoaded',loadTasks)
   form.addEventListener('submit',addTask);
   taskList.addEventListener('click',removeTask);
   clearBtn.addEventListener('click',clearTasks);
   filter.addEventListener('keyup',filterTasks)
}


function  loadTasks(){
   let tasks;
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   }else{
   tasks=JSON.parse(localStorage.getItem('tasks'))
   }

   tasks.forEach((item)=>{
   const li = document.createElement('li');
   li.className = 'collections';
   let content = document.createTextNode(item);
   li.appendChild(content);
   const link = document.createElement('a');
   link.className = 'remove-item '
   link.innerHTML = '<i class="fa fa-remove"></i>'
   li.appendChild(link);
   taskList.appendChild(li);
   })
    
}

function addTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
      //   alert('Please add tasks');
      new Toaster("Please Add task","error")
        return;
    }

    if (checkSameValue(taskInput.value)) {
        return false;
    } else {
        const li = document.createElement('li');
        li.className = 'collections';
        let content = document.createTextNode(taskInput.value);

        li.appendChild(content);
        const link = document.createElement('a');
        link.className = 'remove-item';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
        saveinLocalStorage(taskInput.value);
    }
    form.reset()
}

function removeFromLocalStorage(taskContent){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks= tasks.filter((item)=>item!==taskContent)
     localStorage.setItem('tasks',JSON.stringify(tasks))
}

function checkSameValue(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] == task) {
            new Toaster("Same Task Found","error");
            return true; // Return true to indicate a duplicate was found
        }
    }
    return false; // Return false if no duplicate was found
}




function removeTask(e){
  if(e.target.parentElement.classList.contains('remove-item')){
   if(confirm('Are you sure')){
      e.target.parentElement.parentElement.remove();
       removeFromLocalStorage(e.target.parentElement.parentElement.textContent);
   }
   }
}



function clearTasks(e){
   while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
   }
 localStorage.clear()
   
}



function filterTasks(e) {
 const text = e.target.value.toLowerCase();  
let newData = taskList.children
Array.from(newData).forEach((data)=>{
   if(data.firstChild.textContent.toLowerCase().indexOf(text) !==-1){
      data.style.display="flex"
   }else{
      data.style.display = "none"
   }
})
}


function saveinLocalStorage(task){
let tasks;
if(localStorage.getItem('tasks') === null){
   tasks = []
}else{
   tasks = JSON.parse(localStorage.getItem('tasks')) 
  
}
  tasks.push(task)
 localStorage.setItem('tasks',JSON.stringify(tasks))
}



let toastElement = null;

function Toaster(message, className) {
    if (!toastElement) {
        toastElement = document.createElement('div');
        document.body.appendChild(toastElement);
    }
    toastElement.className = className;
    toastElement.innerHTML = ''; 

    const div = document.createElement('div');
    
    div.innerHTML = message;
    toastElement.appendChild(div);
    if(className == 'error'){
   const overlay = document.getElementById('overlay')
    overlay.style.display = "block" 
    }

    // Remove the toast after 3 seconds
    
    setTimeout(() => {
        toastElement.innerHTML = '';
        toastElement.className = '';
        overlay.style.display = "none"
    }, 2000)
   }