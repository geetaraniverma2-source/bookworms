function uploadBook(){

let fileInput = document.getElementById("bookFile");
let file = fileInput.files[0];

if(!file){
alert("Please choose a file first");
return;
}

let library = document.getElementById("library");

let bookDiv = document.createElement("div");
bookDiv.className = "book";

let title = document.createElement("p");
title.innerText = file.name;

let link = document.createElement("a");
link.href = URL.createObjectURL(file);
link.target = "_blank";
link.innerText = "Read Book";

bookDiv.appendChild(title);
bookDiv.appendChild(link);

library.appendChild(bookDiv);

}