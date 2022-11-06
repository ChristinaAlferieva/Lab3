var form = document.getElementById("searchForm")

form.addEventListener('submit', function(getData){
    getData.preventDefault()

    var search = document.getElementById("search").value

    fetch("https://api.github.com/users/"+search)
    .then((response) => response.json())
    .then((json) => console.log(json))
})
