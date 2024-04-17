const searchButtonEl = document.querySelector('.submitbtn');
const userInputEl = document.querySelector('#issueinput');
const searchFormEl = document.querySelector('#searchForm');
const googleSearchEl = document.querySelector('.google-search-input');
const youtubeContainerEl = document.querySelector('.youtube-container');
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
                    renderYoutubeVideo(data);
                    // render youtube video
                })
            })
    // gather data from fetch
    // store into variable
    // pass variables into a function to render on the page
}

function renderGoogleSearch(data) {
    googleSearchEl.innerHTML= "";
    //render googles search links on page
    console.log(data);
    for (var i = 0; i < data.items.length; i++) {
        let item = data.items[i];
        googleSearchEl.innerHTML += `
        <div>
            <h2>${data.items[i].title}</h2>
            <a href="${data.items[i].formattedUrl}">${data.items[i].link}</a>
        </div>
        `
    }
}

function renderYoutubeVideo(data) {
    youtubeContainerEl.innerHTML = "";
    let videos = data.items
    console.log(videos);
    for(let i= 0; i< videos.length; i++) {
        youtubeContainerEl.innerHTML += ` 
            <h3>${videos[i].snippet.title}</h3>
            <iframe class="w-full h-36" src="https://www.youtube.com/embed/${videos[i].id.videoId}" frameborder="0" allowfullscreen></iframe>
        `
    }
}

searchFormEl.addEventListener('submit', handleSubmitForm);
