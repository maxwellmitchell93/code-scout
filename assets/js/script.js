const searchButtonEl = document.querySelector('.submitbtn');

function handleSubmitForm() {

}

const api = fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyCiWEy9xURJ4OigfMcWMfi22poa1cD3kew')


searchButtonEl.addEventListener('submit', handleSubmitForm)
