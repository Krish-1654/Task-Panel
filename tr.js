// show data function
const userId = document.querySelector("#user-id")
const userName = document.querySelector("#user-name")
const updateUser = document.querySelector("#update")

function show() {
  const users = JSON.parse(localStorage.getItem("user"));
  let result = "";
  users.map((items, index) => {
    result += `
             <tr>
                 <td>${items.userId}</td>
                 <td>${items.userName}</td>
                 <td>
                     <button class="btn btn-outline-info border-0" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" onclick="edit('${index}')"><i class="fa-solid fa-pen-to-square"></i></button>
                     <button class="btn btn-outline-danger border-0" onclick="del('${index}')"><i class="fa-solid fa-trash-arrow-up"></i></button>
                 </td>
             </tr>
        `;
    tbody.innerHTML = result;
  });
}
show();

// edit function code
function edit(id) {
  const users = JSON.parse(localStorage.getItem("user")); 

    userId.value = users[id].userId
    userName.value = users[id].userName

    // console.log(updateUser);
    
    updateUser.addEventListener("click",()=>{

         const userData = {
        userId: userId.value,
        userName: userName.value
    }

    const updateData = users.splice(id,1,userData)
    localStorage.setItem("user",JSON.stringify(users))

    // console.log(updateData);
    location.reload()
    })
        
}


// delete function code

function del(id) {
  const users = JSON.parse(localStorage.getItem("user"));

  const userDelete = confirm("Are U Want To Delete");
  if (userDelete) {
    users.splice(id, 1);
    localStorage.setItem("user", JSON.stringify(users));
    location.reload();
    show();
  } else {
    show();
  }
}


