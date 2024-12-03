const inputbox=document.getElementById('input-box');
const listcontainer=document.getElementById('list-container');
function addMore(){
    if(inputbox.value==""){
        alert("Please enter any task!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let spane=document.createElement("span");
        spane.innerHTML="\u00d7";
        li.appendChild(spane);
    }
    inputbox.value='';
    saveData();
}
listcontainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();