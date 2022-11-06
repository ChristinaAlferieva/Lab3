var form = document.getElementById("searchForm")

//Function that shows all the data when button clicked
form.addEventListener('submit', function(getData){
    getData.preventDefault();

    var search = document.getElementById("search").value;

    //Gets all the data for the User Profile
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

        //Gets all the data for the User Repo
        fetch(reposUrl)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            //Gets the name and description of the user repo
            json.forEach(element => {
                console.log('Name:', element.name);
                console.log('Description:', element.description);

                document.getElementById("reponame").innerHTML = `<label>Name:    </label>${element.name}`;
                document.getElementById("repodescription").innerHTML = `<label>Description:    </label>${element.description}`;
            });
        });
    });
});
