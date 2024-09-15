var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");


// Add event listener to the Add button to show the popup
addPopupButton.addEventListener("click", function() {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

 var cancelPopup = document.getElementById("cancel-popup")

 cancelPopup.addEventListener("click",function(){
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";

 })

 var container = document.querySelector(".container");
 var addbook = document.getElementById("add-book");
 var booktitleinput= document.getElementById("book-title-input");
 var bookauthorinput= document.getElementById("book-author-input");
 var bookdescriptioninput = document.getElementById("book-description-input");


 addbook.addEventListener("click",function(event){
    event.preventDefault()   
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `
    <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deleteBook(event)">Delete</button>
`;

    container.append(div)
    popupOverlay.style.display="none"
    popupBox.style.display="none"
 })

 function deleteBook(event) {
    event.target.parentElement.remove();
}
