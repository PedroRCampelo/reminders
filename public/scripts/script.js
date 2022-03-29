
document.addEventListener('DOMContentLoaded', ()=>{
  updatePosts();
});

// Call to the backend in order to get the posts(title, description)
function updatePosts(){
  fetch('http://localhost:3000/api/all').then(res =>{
    return res.json();
  }).then(data => {

    let postElements = '';
    let posts = JSON.parse(data);

    // Every post received from the api will turn into a variable in html
    posts.forEach((post)=>{
      let postElement = `<div id=${post.id}>

      <div id="asdasd" class="card mb-4">

        <div class="card-header">

          <h5 class="card-title">${post.title}</h5>

        </div>

        <div class="card-body">

          <h5 class="card-text">${post.description}</h5>
          
        </div>

      </div>
    </div>`

      postElements += postElement;
    });

    document.getElementById('posts').innerHTML = postElements;
  })
};


// New post function
function newPost(){
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;

  let post = {title:title, description:description};

  const options = {
    method: "POST",
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(post)
  }

  fetch('http://localhost:3000/api/new', options).then(res=>{

  // !!!
  updatePosts();
  });
};