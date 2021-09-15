function addUser()
{
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location="quiz.html";
}

  function changeColor(){
  var x = document.getElementById("full");
  if(x.style.color=="pink"){
    x.style.color = "purple";
  } else {
    x.style.color = "pink";
  }
 
}

setInterval(changeColor,1000);