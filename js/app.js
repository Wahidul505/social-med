const loadUsers =async () =>{
 const response = await fetch('https://randomuser.me/api/?results=21');
 const data = await response.json();
    displayUsers(data.results);
}
loadUsers();
const displayUsers = (users)=>{
    const usersContainer = document.getElementById('users-container');
    users.forEach(user =>{
        console.log(user);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="img-div"> <img src="${user.picture.medium}"/>
        </div>
        <h3>${user.name.title} ${user.name.first} ${user.name.last} </h3>
        `
        usersContainer.appendChild(div);
    })
}
const loadUser = (data) =>{
    console.log(data);
}