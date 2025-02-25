let inp = document.querySelector("input");
let btn = document.querySelector("button");
let lis = document.querySelector("ul");

btn.addEventListener('click', function () {
    let task = document.createElement("li");
    task.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("home");

    lis.appendChild(task);
    task.appendChild(delbtn);
    inp.value = "";
    console.log("The task added");
    let home1 = document.querySelectorAll(".home");  // Use ".home" for class selector
for (hi of home1) {
    hi.addEventListener("click", function () {
        let par = this.parentElement;
        console.log("The Element IS Delete");
        par.remove();
    });
}

});



