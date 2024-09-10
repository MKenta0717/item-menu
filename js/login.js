const password = "Anna";


function login_hundler(){
  let inputPass = document.getElementById("pass").value
  if(inputPass == password){
    window.location.href = "./itempage.html"
  }else{
    alert('パスワードが違います。')
    document.getElementById("pass").value = "";
  }
}