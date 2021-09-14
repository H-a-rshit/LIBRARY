function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

function Display() {}

Display.prototype.add=function(book){
    tableBody=document.getElementById(`tableBody`);
    let uiString=`<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                  </tr>`
    tableBody.innerHTML += uiString;
}
Display.prototype.clear=function(){
    let libraryForm=document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate=function(book){
    if(book.name.length<2 || book.author.length<2)
    {
        return false;
    }
    else
    {
        return true;
    }
}
Display.prototype.show=function(type,displaymessage){
    let message=document.getElementById('message');
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>MESSAGE</strong> ${displaymessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
    setTimeout(() => {
        message.innerHTML="";
    }, 2000);
}
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  // let type = document.getElementById('type').value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  let display=new Display();
  if(display.validate(book))
  {
      display.add(book);
      display.clear();
      display.show('success','Your Book is Added');
  }
  else
  {
      display.show(`danger`,`Sorry You cannot Add this book`);
  }
  e.preventDefault();
}
