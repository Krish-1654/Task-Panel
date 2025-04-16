function taskshow() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    let taskresult = ""
    if (tasks == "") {
        taskresult += `
                        <tr>
                            <td class="align-content-center text-danger fw-bold" colspan="6">NO TASK FOUND</td>
                        </tr>
            `
            tbody.innerHTML = taskresult
    } else {
        tasks.map((task,index)=>{
            taskresult += `
                        <tr>
                            <td class="align-content-center">${index + 1}</td>
                            <td class="align-content-center">${task.taskname}</td>
                            <td class="align-content-center">${task.taskdec}</td>
                            <td class="align-content-center">${task.taskstatus}</td>
                            <td class="align-content-center">${task.taskuser}</td>
                            <td class="align-content-center"><button class="btn btn-outline-info border-0" data-bs-toggle="modal"
                                data-bs-target="#exampleModal" onclick="edit('${index}')"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-outline-danger border-0" onclick="del('${index}')"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
            `
            tbody.innerHTML = taskresult

        })
    }
    
}
taskshow()

function edit(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    taskname.value = tasks[id].taskname
    taskdec.value = tasks[id].taskdec
    taskstatus.value = tasks[id].taskstatus
    taskuser.value = tasks[id].taskuser

    taskUpdateId = id
    
    
}


function del(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    const taskdel = confirm("Are U Want To Delete This Task")

    if (taskdel) {
        // store delete data in variable 
        const deleteid = tasks[id]

        // set or get data for history
        const history = JSON.parse(localStorage.getItem("history")) || []
        history.push(deleteid)
        localStorage.setItem("history",JSON.stringify(history))

        // delete data od task 

        tasks.splice(id,1)
        localStorage.setItem("tasks",JSON.stringify(tasks))
        location.reload()
        taskshow()
    } else {
        taskshow()
        
    }
    
}



