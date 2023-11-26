var popupoverlay = document.querySelector(".popup-overlay");
console.log(popupoverlay);
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
console.log(addpopupbutton);

addpopupbutton.addEventListener("click", function(event){
    popupbox.style.display = "block";
    popupoverlay.style.display = "block";
})

var cancelbutton = document.querySelector("#cancel-book");

cancelbutton.addEventListener("click", function(event)
{
    event.preventDefault();
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
})

var container = document.querySelector(".container");
var book_title = document.querySelector("#book-title-input");
var book_author = document.querySelector("#book-author-input");
var book_description = document.querySelector("#book-description-input");
var add_button = document.querySelector("#add-book");

add_button.addEventListener("click", function(event){
    var div = document.createElement("div");
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>
                ${book_title.value}
            </h2>
            <u><h4>${book_author.value}</h4></u>
            <p>${book_description.value}</p>
            <button onclick='del(event)'>Delete</button>`
            event.preventDefault();
    container.append(div);
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
})

function del(event){
    event.target.parentElement.remove();
}