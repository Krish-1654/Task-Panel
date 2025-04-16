// insert data js code 
const userFrom = document.querySelector("#user-from")
const userId = document.querySelector("#user-id")
const userName = document.querySelector("#user-name")
const tbody = document.querySelector("#tbody")
let updateId = null


userFrom.addEventListener("submit", (e) => {
    e.preventDefault()
    const userData = {
        userId: userId.value,
        userName: userName.value
    }

    const users = JSON.parse(localStorage.getItem("user")) || []
    if (updateId == null) {
    users.push(userData)
    alert("User Created")
    } else {
        users[updateId] = userData
        updateId = null
    alert("User Updated")
        location.reload()
    }

    localStorage.setItem("user", JSON.stringify(users))

    userId.value = ""
    userName.value = ""

    // show()
    
})




