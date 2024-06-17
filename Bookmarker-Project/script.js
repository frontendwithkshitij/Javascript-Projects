

const bookmarkForm = document.getElementById('bookmarkForm')

bookmarkForm.addEventListener('submit',saveBookmark)

document.addEventListener('DOMContentLoaded',fetchbookMarks)


function hrefClick(url) {
    window.open(url,'_blank');
}


function deleteBookmark(url){
let bookMarks = JSON.parse(localStorage.getItem('bookMarks')) 
bookMarks.forEach((bookmark,index)=>{
  if(bookmark.url === url){
    bookMarks.splice(index,1)
  }

})
    localStorage.setItem('bookMarks',JSON.stringify(bookMarks))
    fetchbookMarks()
  
}

function fetchbookMarks(){
let bookMarks = JSON.parse(localStorage.getItem('bookMarks')) || [];
let bookmarkOutput = document.getElementById('bookmarkOutput')
bookmarkOutput.innerHTML = ''
bookMarks.forEach((bookmark)=>{
bookmarkOutput.innerHTML += `<div class="card">
                <div class="card-content">
                    <h4>${bookmark.name}</h4>
                    <p>${bookmark.desc}</p>
                </div>
                <div class="card-footer">
                    <div class="btn-grup">
                        <button class="view-btn" onClick = "hrefClick('${bookmark.url}')">View</button>
                        <button class="del-btn" onClick = "deleteBookmark('${bookmark.url}')">Delete</button>

                    </div>
                </div>
            </div> `
})
}



function saveBookmark(e){
 e.preventDefault()
   
 let siteName = document.getElementById('siteName').value
 let siteUrl = document.getElementById('siteUrl').value
 let siteDesc = document.getElementById('siteDesc').value


if(!validateForm(siteName,siteDesc,siteUrl)){
  return false
}else{
let bookmark = {
  name:siteName,
  url:siteUrl,
  desc:siteDesc
}

let bookMarks;
if(localStorage.getItem('bookMarks') === null){
  bookMarks = [];
  bookMarks.push(bookmark)
  localStorage.setItem('bookMarks',JSON.stringify(bookMarks))
} else{
  bookMarks = JSON.parse(localStorage.getItem('bookMarks'))
  bookMarks.push(bookmark)
  localStorage.setItem('bookMarks',JSON.stringify(bookMarks))
}
}
bookmarkForm.reset();
new Toaster("Bookmark created Sucessdfully","success")
fetchbookMarks()
}

function validateForm(siteName,siteDesc,siteUrl){
if(!siteName || !siteUrl || !siteDesc){
  new Toaster("Please Fill all fields","error")
  return false
}

var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
if(!siteUrl.match(regex)){
  new Toaster("Site URL should be Valid","error")
  return false
}

let bookMarks = JSON.parse(localStorage.getItem('bookMarks')) || [];
for(const bookmark of bookMarks ){
  if(bookmark.name === siteName){
    new Toaster("Site name already exists", "error");
          return false;

  }

  if(bookmark.url === siteUrl){
      new Toaster("Site URL already exists", "error");
      return false;
  }

}

return true
}

let toastElement = null;

function Toaster(message, className) {
    if (!toastElement) {
        toastElement = document.createElement('div');
        document.body.appendChild(toastElement);
    }
    toastElement.className = className;
    toastElement.innerHTML = ''; 

    const div = document.createElement('div');
    
    div.innerHTML = message;
    toastElement.appendChild(div);
    if(className == 'error'){
      const overlay = document.getElementById('overlay')
    overlay.style.display = "block" 
    }

    // Remove the toast after 3 seconds
    
    setTimeout(() => {
        toastElement.innerHTML = '';
        toastElement.className = '';
        overlay.style.display = "none"
    }, 2000)

}
