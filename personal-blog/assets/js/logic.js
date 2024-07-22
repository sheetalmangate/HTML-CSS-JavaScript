// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleMode = document.querySelector("#toggle");
const body = document.querySelector("body");
const root = document.querySelector(":root");

let mode = 'light';

toggleMode.addEventListener('click', function() {

  if( mode === 'light' ) {

    mode = 'dark';
    body.setAttribute('class','dark');
    root.style.setProperty('--circle-color', 'lightblue');
    toggleMode.textContent = '☀️';

  } else {

    
    mode = 'light';
    body.setAttribute('class','light');
    root.style.setProperty('--circle-color', 'orange');
    toggleMode.textContent = '🌠';
    
  }
  
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

var posts = [];

const readLocalStorage = function() {
    
  const localPosts = JSON.parse(localStorage.getItem('posts'));
  if( localPosts != null ) {
    posts = localPosts;
  }

  return posts;
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function( newPost ) {

  readLocalStorage();
  posts.push(newPost);
  localStorage.setItem('posts',JSON.stringify(posts));

}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

