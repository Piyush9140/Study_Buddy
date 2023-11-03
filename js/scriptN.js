const notesContainer=document.querySelector(".notes_container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".inputBox");

var icon = document.getElementById("icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="../images/sun.png";
    }else{
        icon.src="../images/moon.png";
    }
}

function shownotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img = document.createElement("img");
    inputbox.className="inputBox";
    inputbox.setAttribute("contenteditable", "true");
    img.src="../images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="P"){
        notes=document.querySelectorAll(".inputBox");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})