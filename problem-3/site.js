var form = document.getElementById("searchForm")

form.addEventListener('submit', function(getData){
    getData.preventDefault();

    var search = document.getElementById("search").value;

    fetch("https://api.github.com/users/"+search)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)

        document.getElementById("image").innerHTML = `<img src="${json.avatar_url}"/> `;
        document.getElementById("name").innerHTML = `<label>Name:    </label>${json.name}`;
        document.getElementById("username").innerHTML = `<label>Username:    </label>${json.login}`;
        document.getElementById("email").innerHTML = `<label>Email:    </label>${json.email}`;
        document.getElementById("location").innerHTML = `<label>Location:    </label>${json.location}`;
        document.getElementById("gists").innerHTML = `<label>Number of Gists:    </label>${json.public_gists}`;
        
        const reposUrl = `${json.repos_url}`;

        fetch(reposUrl)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            document.getElementById("userRepos").innerHTML = `${json.full_name}`;
        })
                
    })


})
