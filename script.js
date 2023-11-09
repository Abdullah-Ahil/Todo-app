let taskList = document.querySelector('.lower');
// console.log(box)

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let btn = document.querySelector('#add-task');


btn.addEventListener('click',()=>{
    // let taskTitle = document.createElement('h2');
    // let taskDesc = document.createElement('p');
    // taskTitle.innerHTML = `${title.value}`;
    // taskDesc.innerHTML = `${desc.value}`;
    // task.appendChild =  (taskTitle,taskDesc)
    if(title.value == "" || desc.value == ""){
        alert("first enter task title and description!")
    }
    else{
        let task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `<div class="content"> <h2>${title.value}</h2>
                        <p>${desc.value}</p>
                        </div>
                        <div class='icons'>
                        <i class="ri-delete-bin-7-line"></i>
                        </div>
                        `;
        taskList.appendChild(task);
        // saveData(task);
        // console.log(box)
        task.querySelector('i').addEventListener('click',()=>{
            task.remove();
            alert(" deleting the task ")
        })
    }
    // showData(task.innerHTML)
    title.value =""
    desc.value = ""
})

// function saveData(task){
//     localStorage.setItem('data',task.innerHTML)
// }
// function showData(task){
//     localStorage.getItem(task)
// }
// console.log(task)
// console.log(btn)

// console.log(title)
// console.log(desc)
