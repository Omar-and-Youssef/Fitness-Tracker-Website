var loginButton=document.querySelector(".login");
// here make it so if the local var is empty cannot eneter
loginButton.addEventListener("click",checkInput);
function checkInput(){
    console.log("hi");
    var theMaintenance = localStorage.getItem("maintenance");
    var theweight=localStorage.getItem("weight");
    console.log(theweight);
    console.log(theMaintenance);
    if(theMaintenance==null||theweight==null){
        alert("Please regiser");
    }
    else{
        window.location.href = "main.html";
    }
}