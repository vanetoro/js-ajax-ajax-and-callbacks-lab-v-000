$(document).ready(function (){

});

function searchRepos() {
  let searchTerms = $('#searchTerms').val()
  fetch(`https://api.github.com/search/repositories?q=${searchTerms}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
  var repo = data.items[0]

  var displayData = `${repo.name} - ${repo.description} - ${repo.html_url}`
    $('#results').html(`${displayData}`)
  })
  .catch(function(error){

  })

}



//
// var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))




// function showRepositories(){
//   const repos = JSON.parse(this.responseText)
// <<<<<<< HEAD
//   var repoList = '<ul>'
//   repoList = repos.map( function(r){
//     var description = `Description: ${r.description}  <br>`
//     var avatar = `<img width= "50" src='${r.owner.avatar_url}'> <br>`
//
//     var owner = `Owner: ${r.owner.login}<br>`
//     var url = `Url: ${r.html_url}`
//     var commits = `<a href='#' data-repo="${name}" onclick='getCommits(${r.commits_url})'>Get Commits</a>`
//       return `<li>${avatar}${name}${description}${owner}${url}${commits}</li>`
// })
//
//
// }
//
// function getCommits(el){
//   const req = new XMLHttpRequest()
//   req.addEventListener('load', showcommits);
//   req.open('GET', el)
// }
//
//
// function showcommits(){
//
// =======
//   const repoName = repos.name
//   const repoDescription = repos.description
//   const repoUrl = repos.html_url
//   const avatar = repos.owner.avatar_url
//   debugger
//   var repoList = repos.map( r=> `<ul>${ ('<li>'+ r.name + '-' + r.description + '-' + r.html_url + '</li>')} </ul>`)
//   document.getElementById('results').innerHTML = repoList
// >>>>>>> d6a47848e16b3528b9cd67cf5f2cd52b74064ae4
// }
