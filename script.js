function upload(){
alert("Upload feature coming soon");
}

function searchBook(){

let input=document.getElementById("search").value.toLowerCase();

let books=document.querySelectorAll(".book");

books.forEach(book=>{

let text=book.innerText.toLowerCase();

if(text.includes(input))
book.style.display="block";
else
book.style.display="none";

});

}