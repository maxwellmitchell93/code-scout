const searchButtonEl = document.querySelector('.submitbtn');
const userInputEl = document.querySelector('#issueinput');
const searchFormEl = document.querySelector('#searchForm');


function handleSubmitForm(event) {
    event.preventDefault();

    const searchInputVal = document.querySelector('#issueinput').value;

    if(searchInputVal) {
        //call another function
        // googleApi(searchInputVal);
    } else {
        alert('Please enter a topic');
    }
    
}

function googleApi(search) {

}

function youtubeApi(search) { 

}

// const api = fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyCiWEy9xURJ4OigfMcWMfi22poa1cD3kew')


searchFormEl.addEventListener('submit', handleSubmitForm);
