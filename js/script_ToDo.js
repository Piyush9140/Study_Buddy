const InputBox = document.getElementById("inputBox");
const Listcontainer = document.getElementById("ListContainer");

function AddTask(){
    if(InputBox.value === ''){
        alert("You must Write something!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    saveData();
}
Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML)
}
function showTask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();