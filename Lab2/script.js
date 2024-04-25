"use strict";

const createDiv = (inputText) => {
    //const listItem = document.createElement("li");
    const dziw = document.createElement("div")
    //listItem.innerText = input.value;
    dziw.innerHTML = '<li class = "list-group-item"><p>' + inputText +'</p><p></p><button type="button" class="btn btn-danger position-absolute end-0 scale-50" onclick="removeme(this)">X</button></li>'
    // Assign an onclick event handler directly
    dziw.addEventListener("click", function() {
        console.log("Clicked")
        this.firstChild.firstChild.classList.toggle("disabled");
        this.firstChild.firstChild.classList.toggle("text-decoration-line-through");
        const date = new Date()
        
        if (this.firstChild.firstChild.classList.contains("disabled")) {
            console.log("disabled");
            this.firstChild.firstChild.nextSibling.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
        else {
            console.log("enabled");
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


const removeme = (self) => {

    const modal = document.getElementById("potwierdzenie");
    const modalzadanie = document.getElementById("modalzadanie");
    modalzadanie.innerText = self.parentNode.parentNode.innerText;
    modal.showModal();
    //self.parentNode.parentNode.remove();
}


window.onload = () => {

    const closingButton = document.getElementById("closing");
    closingButton.addEventListener("click", () =>{
        
        const modal = document.getElementById("potwierdzenie");
        modal.close();


    });

    const quo = document.getElementById("quo");
    quo.addEventListener("click", () =>{

        const modal = document.getElementById("potwierdzenie");
        modal.close();

    });

}