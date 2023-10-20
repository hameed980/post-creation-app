function addPost(){
  var title = document.getElementById("title")

  var createpost = document.getElementById("createpost")

 if(title.value.trim() && createpost.value.trim()){

  var posts = document.getElementById("posts")

  

  posts.innerHTML += `
  <div class="card mb-2">
  <div class="card-header">
  @post
  </div>
  <div class="card-body">
  <blockquote class="blockquote mb-0">
  <p>${title.value}</p>
  <footer class="blockquote-footer">${createpost.value}<cite>
  </cite></footer>
  </blockquote>
  </div>
  </div>
  `
  title.value = ""
  createpost.value = ""
  
}else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please enter a title and create post!',
  })
}
}

 
