let list = document.querySelector("#list");
let btn = document.querySelector("#btn");
let myInput = document.querySelector("#myInput");
let indi = document.querySelector("#indi");
// Adding new element
btn.addEventListener("click", () => {
     let li = document.createElement("li");
//     check mark
     let doneSpan = document.createElement("SPAN");
     let doneIcon = document.createTextNode("\u2713");
     doneSpan.className = "done";
     doneSpan.appendChild(doneIcon);
     li.appendChild(doneSpan);
//     check mark
 // pentool
//  let penSpan = document.createElement("SPAN");
//  let penIcon = document.createTextNode("\u270E");
//  penSpan.className = "close";
//  penSpan.appendChild(penIcon);
//  li.appendChild(penSpan);
 // pen tool
     let text = document.createTextNode(myInput.value);
     li.appendChild(text)

     if (myInput.value == "") {
          alert("please enter your task..")
     }
     else {
          list.appendChild(li); 
     }
     myInput.value = "";
     indi.style.display = "flex";

     let CloseSpan = document.createElement("SPAN");
     let closeIcon = document.createTextNode("\u00D7");
     CloseSpan.className = "close";
     CloseSpan.appendChild(closeIcon);
     li.appendChild(CloseSpan);

     // delete element
     CloseSpan.addEventListener("click",() => {
        li.remove();
     })
     // delete element
     doneSpan.addEventListener("click",() => {
          li.style.background = "green";
       })

     //   pen tool
     // penSpan.addEventListener("click",() => {
     //      myInput.innerHTML = li;
     //   })
})



