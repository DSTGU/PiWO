"use strict";

const createDiv = (inputText) => {
    //const listItem = document.createElement("li");
    const dziw = document.createElement("div");
    //listItem.innerText = input.value;
    dziw.innerHTML = '<li class = "list-group-item"><p>' + inputText +'</p><p></p><button type="button" class="btn btn-danger position-absolute end-0 scale-50 translate-middle-y" onclick="removeme(this)">X</button></li>'
    // Assign an onclick event handler directly
    dziw.id = (Math.random() + 1).toString(36).substring(2);

    dziw.addEventListener("click", function() {
        this.firstChild.firstChild.classList.toggle("disabled");
        this.firstChild.firstChild.classList.toggle("text-decoration-line-through");
        const date = new Date()
        
        if (this.firstChild.firstChild.classList.contains("disabled")) {
            this.firstChild.firstChild.nextSibling.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
        else {
            this.firstChild.firstChild.nextSibling.innerHTML = "";
        }
    });

    dziw.firstChild.lastChild.addEventListener("click", function() {
        removeme(this)
        //this.parentNode.parentNode.remove();
    });

    return dziw;
}

const adder = () => {

    const input = document.getElementById("todo-input");

    if (input.value === ""){
        console.log("Empty input");
        return;
    }

    const dziw = createDiv(input.value);

    const theList = document.getElementById("todo-list");
    theList.append(dziw);
}

const recycleTrash = () => {
    const trash = document.getElementById("trashContent");
    const dziw = document.createElement("div");
    dziw.innerHTML = trash.innerHTML;
    trash.innerHTML = "";

    const theList = document.getElementById("todo-list");
    theList.append(dziw);
}


const removeme = (self) => {

    const modal = document.getElementById("potwierdzenie");
    const modalzadanie = document.getElementById("modalzadanie");
    modalzadanie.innerText = self.parentNode.parentNode.innerText;
    const modid = document.getElementById("elementToRemID")

    modid.innerHTML = self.parentNode.parentNode.id;

    modal.showModal();
    
    event.stopPropagation();
    //self.parentNode.parentNode.remove();
}

const searchbox = () => {
    const checkbox = document.getElementById("caseSensitiveCheck");
    const value = document.getElementById("searchboxInput").value;
    
    const table = document.getElementById("todo-list");
    var child=table.firstChild.nextSibling;

    while (child !== null){
        if (checkbox.checked){
            if(child.firstChild.firstChild.innerHTML.toLowerCase().includes(value.toLowerCase())){
                child.firstChild.classList.remove("d-none");
            }
            else{
                child.firstChild.classList.add("d-none");
            }
        }
        else{
            if(child.firstChild.firstChild.innerHTML.includes(value)){
                child.firstChild.classList.remove("d-none");
            }
            else{
                child.firstChild.classList.add("d-none");
            }
        }


        child = child.nextSibling;
    }

}

window.onload = () => {

    const closingButton = document.getElementById("closing");
    closingButton.addEventListener("click", () =>{
        
        const val = document.getElementById("elementToRemID").innerHTML;
        const elemtorem = document.getElementById(val);
        const trash = document.getElementById("trashContent");
        trash.innerHTML = elemtorem.innerHTML;
        
        if (elemtorem.parentNode.id === "todo-list"){
            elemtorem.remove();
        } else if(elemtorem.parentNode.id === "trashBin"){
            elemtorem.innerHTML = "";
        }
        
        const modal = document.getElementById("potwierdzenie");
        modal.close();


    });

    const quo = document.getElementById("quo");
    quo.addEventListener("click", () =>{

        const modal = document.getElementById("potwierdzenie");
        modal.close();

    });

}