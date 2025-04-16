// show data function

function show() {
  const users = JSON.parse(localStorage.getItem("user")) || []
  let result = "";
  if (users == "") {
   result +=` <tr>
                <td colspan="3" class="text-danger fw-bold align-content-center">
                    NO USER FOUND
                </td>
             </tr>`
        tbody.innerHTML = result;

  } else {
    users.map((items, index) => {
        result += `
                 <tr>
                     <td class="align-content-center">${items.userId}</td>
                     <td class="align-content-center">${items.userName}</td>
                     <td class="align-content-center">
                         <button class="btn btn-outline-info border-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" onclick="edit('${index}')"><i class="fa-solid fa-pen-to-square"></i></button>
                         <button class="btn btn-outline-danger border-0" onclick="del('${index}')"><i class="fa-solid fa-trash"></i></button>
                     </td>
                 </tr>
            `;
        tbody.innerHTML = result;
      });
  }
  
}
show();

// edit function code
function edit(id) {
  const users = JSON.parse(localStorage.getItem("user")) || []

    userId.value = users[id].userId
    userName.value = users[id].userName

    updateId = id
        
}


// delete function code

function del(id) {
  const users = JSON.parse(localStorage.getItem("user")) || []

  const userDelete = confirm("Are U Want To Delete");
  if (userDelete) {

     // store delete data in variable 
     const userdata = users[id]

     // set or get data for history
     const userhistory = JSON.parse(localStorage.getItem("userhistory")) || []
     userhistory.push(userdata)
     localStorage.setItem("userhistory",JSON.stringify(userhistory))

     // delete data od task 

    users.splice(id, 1);
    localStorage.setItem("user", JSON.stringify(users));
    location.reload();
    show();
  } else {
    show();
  }
}


