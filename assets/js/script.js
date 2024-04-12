const searchButtonEl = document.querySelector('.submitbtn');
const userInputEl = document.querySelector('#issueinput');
const searchFormEl = document.querySelector('#searchForm');


function handleSubmitForm(event) {
    event.preventDefault();

    const searchInputVal = document.querySelector('#issueinput').value;

    if(searchInputVal) {
        //call another function
        googleApi(searchInputVal);
        // youtubeApi(searchInputVal);
    } else {
        alert('Please enter a topic');
    }
    
}

function googleApi(search) {
    const api = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCiWEy9xURJ4OigfMcWMfi22poa1cD3kew&cx=95938830dbc574f09&q=${search}`);
    // gather data from fetch
    // store into variable
    // pass variables into a function to render on the page
}

function youtubeApi(search) { 
    // gather data from fetch
    // store into variable
    // pass variables into a function to render on the page
}

function renderGoogleSearch() {
    //render googles search links on page
}


searchFormEl.addEventListener('submit', handleSubmitForm);
