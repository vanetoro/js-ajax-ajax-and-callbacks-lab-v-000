$(document).ready(function (){

});


function searchRepositories() {
  let searchTerms = $('#searchTerms').val()
  fetch(`https://api.github.com/search/repositories?q=${searchTerms}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
  var repo = data.items[0]
  var displayData = `${repo.name} - ${repo.description} - ${repo.html_url}<br> <a data-owner="${repo.owner.login}" data-name="${repo.name}"href="#" onclick="showCommits(this)">Show Commits</a>`
    $('#results').html(`${displayData}`)
  })
  .catch(function(error){
    displayError()
  })
}

  function showCommits(el){
    let repo = el.dataset.name
    let owner = el.dataset.owner
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      let commitsList = '<ul>'
      data.map(function(d){
        let img = `<img height="50" src = "${d.author.avatar_url}">`
        let sha = `Sha: ${d.sha}<br>`
        let login = `Login: ${d.author.login }<br>`
          return  commitsList +=`<li>${img} Owner: ${owner}<br> ${login} ${sha}</li>`
       })
       commitsList +="</ul>"
       $('#details').html(`${commitsList}`)
    })

  }

  function displayError(){
    $('#errors').text("I'm sorry, there's been an error. Please try again.")

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
