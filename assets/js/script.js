const searchButtonEl = document.querySelector('.submitbtn');
const userInputEl = document.querySelector('#issueinput');
const searchFormEl = document.querySelector('#searchForm');
const googleSearchEl = document.querySelector('.google-search-input');
const googleApiKey = 'AIzaSyCiWEy9xURJ4OigfMcWMfi22poa1cD3kew'
const youtubeApiKey = 'AIzaSyCmgmCqfy810RN_DSYuppQL0stf-5exBaU'

function handleSubmitForm(event) {
    event.preventDefault();

    const searchInputVal = document.querySelector('#issueinput').value;

    if(searchInputVal) {
        //call another function
        googleApi(searchInputVal);
        youtubeApi(searchInputVal);
    } else {
        alert('Please enter a topic');
    }
    
}

function googleApi(search) {
    
    const api = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=95938830dbc574f09&q=${search}`

    fetch(api)
        .then(function(response) {
            response.json().then(function (data) {
                console.log(data);
                renderGoogleSearch(data);
            })
        })

    // gather data from fetch
    // store into variable
    // pass variables into a function to render on the page
}

function youtubeApi(search) { 
    const callYoutubeApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&trueEmbeddable=true&key=${youtubeApiKey}&q=${search}`
        fetch(callYoutubeApi)
            .then(function(response) {
                response.json().then(function (data) {
                    console.log(data);
                    // remder youtube video
                })
            })
    // gather data from fetch
    // store into variable
    // pass variables into a function to render on the page
}

function renderGoogleSearch(data) {
    googleSearchEl.innerHTML= "";
    //render googles search links on page
    for (var i = 0; i < data.items.length; i++) {
        let item = data.items[i];
        // Make sure HTML in item.htmlTitle is escaped.
        document.querySelector(".google-search-input").append(
          document.createElement("br"),
          document.createTextNode(item.title),
        );
        $('<a href="'+item.formattedUrl+'">'+item.link+'</a>').appendTo($('.google-search-input'));
    }
}


searchFormEl.addEventListener('submit', handleSubmitForm);
