let toDo = document.getElementById("todo");  //input part
let addButton = document.getElementById("add_button");   //add button
let total = document.getElementById("total")
let done = document.getElementById("done")
const addingParent = document.querySelector(".item")
const ul=document.querySelector(".itemList");
let deleteAll = document.getElementById("delete_all")
const itemList = document.getElementsByClassName("itemList")

const createItemPart = (action) => {
     return `
     <div class="item">
     <li class="unchecked">${action}</li>
     <button class="delete_btn">&#128473;</button>
    </div>` 
}


addButton.addEventListener("click", () => {
    
    if (toDo.value) {
        ul.innerHTML += createItemPart(toDo.value); 
        toDo.value = "";
        toDo.focus();
    }
    else alert("enter SOMETHING")
    footerCounter();
    toDo.focus();
})
deleteAll.addEventListener("click", (e) => {

    if (confirm("Are You Sure to delete All Tasks?")) {
        e.path[2].children[2].children[1].innerHTML = ""
        done.innerHTML = "00"
        total.innerHTML = "00"
        
    }   else {
        return;
    }
    
   
})

ul.addEventListener("click", e => {
    if(e.target.classList.contains("delete_btn")){
        e.target.parentElement.remove();
    }
    footerCounter();
})

ul.addEventListener("click", e => {
    // if (e.target.classList.contains("unchecked")) {
    //     e.target.className = "checked"
    //     // e.target.style.textDecoration = "line-through"

    // } else if (e.target.classList.contains("checked")){
    //     e.target.className = "unchecked"
    //     // e.target.style.textDecoration = "none"

    // } else if (e.target.classList.contains("item")){
    if (e.target.children[0].className == "unchecked") {
           e.target.children[0].className = "checked";

    }  else if (e.target.children[0].className == "checked") {
         e.target.children[0].className = "unchecked";
    }
    





    footerCounter();
    
})

const footerCounter = () => {
    done.innerHTML = ul.getElementsByClassName("checked").length
    total.innerHTML = ul.getElementsByClassName("checked").length + ul.getElementsByClassName("unchecked").length
}



    toDo.addEventListener("keydown", (e) => {
        if (e.key == "Enter" || e.key == "NumpadEnter") {
            addButton.click();
        }
    })
