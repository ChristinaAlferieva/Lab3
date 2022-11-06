var form = document.getElementById("searchForm")

form.addEventListener('submit', function(getData){
    getData.preventDefault();

    var search = document.getElementById("search").value;

    fetch("https://api.github.com/users/"+search)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)

        document.getElementById("image").innerHTML = `<img src="${json.avatar_url}"/> `;
        document.getElementById("name").innerHTML = `<label><b>Name:    </b></label>${json.name}`;
        document.getElementById("username").innerHTML = `<label><b>Username:    </b></label>${json.login}`;
        document.getElementById("email").innerHTML = `<label><b>Email:    </b></label>${json.email}`;
        document.getElementById("location").innerHTML = `<label><b>Location:    </b></label>${json.location}`;
        document.getElementById("gists").innerHTML = `<label><b>Number of Gists:    </b></label>${json.public_gists}`;

        document.getElementById("userRepos").innerHTML = `${json.repos_url.description}`;
                
    })


})
