$(document).ready(function (){

});

var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))

var searchRepositories = () => {
  let searchTerms = $('#searchTerms').value()
  $.get('https://api.github.com/search/repositories?q=${searchTerms}', data =>{
    $('#results').html(renderSearchResults(data))
  })

}


function showRepositories(){
  const repos = JSON.parse(this.responseText)
  var repoList = '<ul>'
  repoList = repos.map( function(r){
    var description = `Description: ${r.description}  <br>`
    var avatar = `<img width= "50" src='${r.owner.avatar_url}'> <br>`
    var name = `Name: ${r.name}<br>`
    var owner = `Owner: ${r.owner.login}<br>`
    var url = `Url: ${r.html_url}`
    var commits = `<a href='#' data-repo="${name}" onclick='getCommits(${r.commits_url})'>Get Commits</a>`
      return `<li>${avatar}${name}${description}${owner}${url}${commits}</li>`
})
repoList+= '</ul>'
  document.getElementById('results').innerHTML = repoList
}

function getCommits(el){
  const req = new XMLHttpRequest()
  req.addEventListener('load', showcommits);
  req.open('GET', el)
}


function showcommits(){

}
