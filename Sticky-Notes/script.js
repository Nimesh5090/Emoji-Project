let btn = document.querySelector(".add");
let text = document.getElementById("note");
let color = document.getElementById("color");
let note_container= document.getElementById("note-area");
let para = document.getElementById("message");

function addNotes(){
    if(text.value===""){
        alert("Please add your note");
        return;
    }
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    div.appendChild(p);
    div.appendChild(cross_btn);
    cross_btn.innerText='X';
    p.innerText=text.value; 
    div.style.backgroundColor=color.value;
    div.style.width="150px"
    div.style.height="175px"
    div.style.marginTop="30px"
    div.style.marginLeft="20px"
    cross_btn.style.width="28px"
    cross_btn.style.height="17px"
    cross_btn.style.marginLeft="100px"
    cross_btn.style.backgroundColor=color.value;
    cross_btn.style.border="none";
    cross_btn.style.cursor="pointer";
    note_container.appendChild(div);
    text.value="";
    if(note_container.value!==""){
     para.style.display="none";
    }
    cross_btn.addEventListener("click",function(){
        div.style.display="none";
    })
    
}
btn.addEventListener("click" , addNotes)