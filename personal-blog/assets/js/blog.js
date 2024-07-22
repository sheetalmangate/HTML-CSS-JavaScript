// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("main");
const backButton  = document.querySelector("#back");
const redirectUrl = window.location.href.replace('blog.html','index.html');
const LocalStoragePosts = readLocalStorage();

// TODO: Create a function that builds an element and appends it to the DOM

const buildElementAndAppend = function() {

    for( let i =0 ; i<LocalStoragePosts.length; i++ ) {

        const post = LocalStoragePosts[i];

        const articleElement = document.createElement('article');
        const h2Element = document.createElement( 'h2' );
        const blockquoteElement = document.createElement( 'blockquote' );
        const pElement = document.createElement( 'p' );

        articleElement.className = 'card';
        h2Element.textContent = post['title'];
        blockquoteElement.textContent = post['content'];
        pElement.textContent = 'Posted By : '+post['username'];

        mainElement.appendChild( articleElement );
        articleElement.appendChild(h2Element);
        articleElement.appendChild(blockquoteElement);
        articleElement.appendChild(pElement);

    }

}


// TODO: Create a function that handles the case where there are no blog posts to display

const noPosts = function() {

    mainElement.textContent = 'No Blog posts yet...';
    return;

};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function() {

    if( LocalStoragePosts.length === 0 ) {
        noPosts();
    } else {
        buildElementAndAppend();
    }

};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener( 'click', function( event ) { 

    redirectPage(redirectUrl);

}); 