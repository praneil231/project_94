function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name",username);
    window.location.assign("/kwitter_room.html");
};