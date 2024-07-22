// TODO: Create a variable that selects the form element
const blogForm = document.querySelector("#blog-form");
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const error = document.querySelector("#error");
const redirectUrl = window.location.href.replace('index.html','blog.html');


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

const formSubmission = function() {

    
    let username = usernameInput.value.trim();
    let title = titleInput.value.trim();
    let content = contentInput.value.trim();
    

    if( username === '' || title === '' || content === '' ) {
        
        error.textContent = "Please complete the form.";
        return;

    } else {

        let blog = {
            username : username,
            title    : title,
            content  : content
        };
    
        storeLocalStorage(blog);
        redirectPage( redirectUrl );
    }

};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
blogForm.addEventListener( 'submit', function( event ) {

    event.preventDefault();
    formSubmission();

});
