const removeall = document.querySelector("#removeall")
// console.log(removeall);


function historyshow() {
    const history = JSON.parse(localStorage.getItem("history")) || []
    let historydata = ""
    if (history == "") {
            historydata += `
                            <tr>
                                <td class="align-content-center text-danger fw-bold" colspan="6">NO DATA FOUND</td>
                            </tr>
            `
            tbody.innerHTML = historydata
            // location.reload()
        
    } else {
        history.map((items,index)=>{
            historydata += `
                            <tr>
                                <td class="align-content-center">${index + 1}</td>
                                <td class="align-content-center">${items.taskname}</td>
                                <td class="align-content-center">${items.taskdec}</td>
                                <td class="align-content-center">${items.taskstatus}</td>
                                <td class="align-content-center">${items.taskuser}</td>
                                <td class="align-content-center"><button class="btn btn-outline-info border-0" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onclick="restore('${index}')"><i class="fa-solid fa-trash-can-arrow-up"></i></button>
                                 <button class="btn btn-outline-danger border-0" onclick="del('${index}')"><i class="fa-solid fa-trash"></i></button></td>
                            </tr>
            `
            tbody.innerHTML = historydata
            // location.reload()
        })
    }
    
}
historyshow()


function restore(id) {
    const history = JSON.parse(localStorage.getItem("history")) || []
    const historyrestore = confirm("Are U Want Do Restore This data")

    if (historyrestore) {

        const restoreid = history[id]
        const tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks.push(restoreid)
        localStorage.setItem("tasks",JSON.stringify(tasks))


        history.splice(id,1)
        localStorage.setItem("history",JSON.stringify(history))
        location.reload()
        historyshow()
    } else {
        historyshow()
    }
}

function del(id) {
    const history = JSON.parse(localStorage.getItem("history")) || []
    const historydelete = confirm("Are U Want To Delete This Data")

    if (historydelete) {
        history.splice(id,1)
        localStorage.setItem("history",JSON.stringify(history))
        location.reload()
        historyshow()
    } else {
        historyshow()
    }
}

// remove all data 
removeall.addEventListener("click",()=>{
    const history = JSON.parse(localStorage.getItem("history")) || []
    if (history == "") {
        alert("There Are No Data Available")
    } else {
        const rmvall = confirm("Are U Want To Delete All Data")
    if (rmvall) {
    localStorage.removeItem("history")
    location.reload()
    } else {
        location.reload()
    }
    }
    
})