const removeall = document.querySelector("#removeall")
// console.log(removeall);


function historyshow() {
    const userhistory = JSON.parse(localStorage.getItem("userhistory")) || []
    let historydata = ""
    if (userhistory == "") {
            historydata += `
                            <tr>
                                <td class="align-content-center text-danger fw-bold" colspan="6">NO DATA FOUND</td>
                            </tr>
            `
            tbody.innerHTML = historydata
            // location.reload()
        
    } else {
        userhistory.map((items,index)=>{
            historydata += `
                            <tr>
                        
                                <td class="align-content-center">${items.userId}</td>
                                <td class="align-content-center">${items.userName}</td>
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
    const userhistory = JSON.parse(localStorage.getItem("userhistory")) || []
    const historyrestore = confirm("Are U Want Do Restore This data")

    if (historyrestore) {

        const userdata = userhistory[id]
        const user = JSON.parse(localStorage.getItem("user")) || []
        user.push(userdata)
        console.log(userdata);
        
        localStorage.setItem("user",JSON.stringify(user))


        userhistory.splice(id,1)
        localStorage.setItem("userhistory",JSON.stringify(userhistory))
        location.reload()
        historyshow()
    } else {
        historyshow()
    }
}

function del(id) {
    const userhistory = JSON.parse(localStorage.getItem("userhistory")) || []
    const historydelete = confirm("Are U Want To Delete This Data")

    if (historydelete) {
        userhistory.splice(id,1)
        localStorage.setItem("userhistory",JSON.stringify(userhistory))
        location.reload()
        historyshow()
    } else {
        historyshow()
    }
}

// remove all data 
removeall.addEventListener("click",()=>{
    const userhistory = JSON.parse(localStorage.getItem("userhistory")) || []
    if (userhistory == "") {
        alert("There Are No Data Available")
    } else {
        const rmvall = confirm("Are U Want To Delete All Data")
    if (rmvall) {
    localStorage.removeItem("userhistory")
    location.reload()
    } else {
        location.reload()
    }
    }
    
})