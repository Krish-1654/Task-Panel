const taskform = document.querySelector("#task-form")
const taskname = document.querySelector("#task-name")
const taskdec = document.querySelector("#task-des")
const taskstatus = document.querySelector("#task-select")
const taskuser = document.querySelector("#user-select")
const tbody = document.querySelector("#tbody")
let taskUpdateId = null


function userFetch() {
    const users = JSON.parse(localStorage.getItem("user")) || []
    
    let userSelect = "<option disable>Select User</option>"
    users.map((item)=>{
        
        userSelect += `
        <option>${item.userName}</option>`
        taskuser.innerHTML = userSelect
    });
    

}
userFetch()

taskform.addEventListener("submit",(e)=>{
    e.preventDefault()
    const taskData = {
        taskname : taskname.value,
        taskdec : taskdec.value,
        taskstatus : taskstatus.value,
        taskuser : taskuser.value
    }
   
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    if (taskUpdateId == null) {
        tasks.push(taskData)
        alert("Task Created")
    } else {
        tasks[taskUpdateId] = taskData
        taskUpdateId = null
        alert("Task Updated")
        // location.reload()
    }

    localStorage.setItem("tasks",JSON.stringify(tasks))    

    location.reload()
})

