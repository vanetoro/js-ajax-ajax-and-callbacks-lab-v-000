$(document).ready(function (){
});

const api = 'https://api.github.com/users/'

function getRepositories(user){
  const req = new XMLHttpRequest()
  req.addEventListener('load', showRepositories);
  let username = document.getElementById('searchTerms').value
  req.open('GET', api + username )
  req.send()

}


function showRepositories(){
  debugger
}
