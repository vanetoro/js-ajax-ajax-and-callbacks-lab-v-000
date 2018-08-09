$(document).ready(function (){
});

const api = 'https://api.github.com/users/'

function getRepositories(){
  const req = new XMLHttpRequest()
  req.addEventListener('load', showRepositories);
  let username = document.getElementById('searchTerms').value
  req.open('GET', api + username +'/repos' )
  req.send()
}


function showRepositories(){
  const repos = JSON.parse(this.responseText)
  var repoList = repos.map( r=> `<ul>${ ('<li>'+ r.name + '-' + r.description + '-' + r.html_url + '</li>')} </ul>`)
  document.getElementById('results').innerHTML = repoList

}
